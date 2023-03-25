import { useAppSelector } from "@/service/redux/hooks";
import { Alert, Space } from "antd";

const ValError = () => {
  const { error } = useAppSelector((state) => state.auth);
  console.log(error);

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "80%",
          textAlign: "center",
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: 99,
        }}
      >
        <Alert
          message="should be at least 5 characters"
          type="info"
          closable={true}
        />
        <Alert
          message="should be at least 5 characters"
          type="info"
          closable={true}
        />
      </Space>
    </div>
  );
};

export default ValError;
