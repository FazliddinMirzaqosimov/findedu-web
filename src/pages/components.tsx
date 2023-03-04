import Counter from "@/components/counter/Counter";
import Input from "@/components/Input/Input";
import React from "react";

const Components = () => {
  return (
    <div>
      <Input />
      <h1>salom</h1>
      <h1>salom</h1>
      <h1>salom</h1>
      <h1>salom</h1>
      <Counter
        options={[
          { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
          { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
          { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
        ]}
      />
    </div>
  );
};

export default Components;
