import { useAppSelector } from "@/service/redux/hooks";
import { Alert, Space } from "antd";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface valErr {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const ValError = ({ message }: valErr) => {
  // const { error } = useAppSelector((state) => state.auth);
  // console.log(error);

  return <Alert message={message} type="info" />;
};

export default ValError;
