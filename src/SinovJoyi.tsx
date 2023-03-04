import React from "react";
import Breadcrumb from "./components/Breadcrumb";

function SinovJoyi() {
  return (
    <div>
      {/* <Sponsor
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ width: 400 }}
      /> */}
      <Breadcrumb
        path={[
          { title: "nmadr", link: "/" },
          { title: "nmadr", link: "/" },
          { title: "nmadr", link: "/" },
          { title: "nmadr", link: "/" },
        ]}
      />
      <Breadcrumb />
    </div>
  );
}

export default SinovJoyi;
