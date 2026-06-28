# syntax=docker/dockerfile:1.7

# Multi-stage Dockerfile for a production Next.js app (standalone output)

ARG NODE_VERSION=20-alpine
FROM node:${NODE_VERSION} AS base

WORKDIR /app

# Non-root user for better container security
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001 -G nodejs

RUN chown -R nodejs:nodejs /app

FROM base AS deps

COPY package*.json ./

# Install dependencies (includes dev deps needed for building)
RUN --mount=type=cache,target=/root/.npm,sharing=locked \
  npm ci --no-audit --no-fund

FROM base AS builder

COPY package*.json ./
COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM base AS production

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

WORKDIR /app
USER nodejs

# `next.config.js` sets `output: "standalone"` so the runtime server is at:
# - .next/standalone/server.js
COPY --from=builder --chown=nodejs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodejs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nodejs:nodejs /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
