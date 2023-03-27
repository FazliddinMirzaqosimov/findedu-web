import { useAppSelector } from "@/service/redux/hooks";
import { Alert, Space } from "antd";

interface valErr {
  message: string;
}

const ValError = ({ message }: valErr) => {
  // const { error } = useAppSelector((state) => state.auth);
  // console.log(error);

  return <Alert message={message} type="info" />;
};

export default ValError;
