import { signPreError } from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { Alert, Space } from "antd";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface valErr {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  type: "error" | "info";
  remove?: boolean;
}

const ValError = ({ message, type, remove }: valErr) => {
  // const { error } = useAppSelector((state) => state.auth);
  // console.log(error);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(signPreError());
  };

  return remove ? (
    <Alert message={message} closable type={type} showIcon onClose={onClose} />
  ) : (
    <Alert message={message} type={type} showIcon />
  );
};

export default ValError;
