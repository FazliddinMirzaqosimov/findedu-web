import EducationDetail from "@/modules/educationDetail";
import { useRouter } from "next/router";
import { useGetByIdEducation } from "@/hooks/EducationQuery";

function Index() {
  const router = useRouter();
  let { id = "" } = router.query;
  if (Array.isArray(id)) {
    id = id[0];
  }

  const data = useGetByIdEducation(id);
  if (data.status !== "success") return <h1>{data.status}</h1>;

  return <EducationDetail data={data.data} />;
}

export default Index;
