import AccompagnementLayout from "@/components/accompagnements/AccompagnementLayout";
import { Accompagnement, getAccompagnementById } from "@/lib/accompagnements";

const data = getAccompagnementById("perte-de-poids");

// 3. Passer les données au template
export default function Page() {
  return <AccompagnementLayout data={data as Accompagnement} />;
}
