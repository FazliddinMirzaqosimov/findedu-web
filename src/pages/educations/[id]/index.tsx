import EducationDetail from "@/modules/educationDetail";
import { useRouter } from "next/router";
import { useGetByIdEducation } from "@/hooks/EducationQuery";
import { Skeleton } from "antd";

function Index() {
  const router = useRouter();
  let { id = "" } = router.query;
  if (Array.isArray(id)) {
    id = id[0];
  }

  const data = useGetByIdEducation(id);
  if (data.status !== "success") return <Skeleton />;

  return <EducationDetail data={data.data} />;
}

export default Index;
