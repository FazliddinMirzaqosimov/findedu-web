import Link from "next/link";
import React from "react";
import Breadcrumb from "./components/Breadcrumb";
function SinovJoyi() {
  return (
    <div>
      SinovJoyi
      <Link href="/components">Components</Link>
      <Breadcrumb />
    </div>
  );
}

export default SinovJoyi;
