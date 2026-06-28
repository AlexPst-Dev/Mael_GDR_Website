# syntax=docker/dockerfile:1.7

ARG BUN_VERSION=1
FROM oven/bun:${BUN_VERSION}-alpine AS base

WORKDIR /app
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001 -G nodejs
RUN chown -R nodejs:nodejs /app

# ── Dépendances ──────────────────────────────────────────────────────────────
FROM base AS deps

COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache,sharing=locked \
    bun install --frozen-lockfile

# ── Build ─────────────────────────────────────────────────────────────────────
FROM base AS builder

COPY package.json bun.lock ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Next.js a besoin de Node.js pour le build, pas de Bun
RUN bun run build

# ── Production ────────────────────────────────────────────────────────────────
FROM node:20-alpine AS production

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

WORKDIR /app
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001 -G nodejs

COPY --from=builder --chown=nodejs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodejs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nodejs:nodejs /app/public ./public

USER nodejs
EXPOSE 3000

CMD ["node", "server.js"]