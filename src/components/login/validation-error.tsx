import { useAppSelector } from "@/service/redux/hooks";

const ValError = () => {
  const { error } = useAppSelector((state) => state.auth);
  console.log(error);

  return <div>Validation Error</div>;
};

export default ValError;
