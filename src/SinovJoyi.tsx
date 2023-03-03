import Link from "next/link";
import React from "react";
import Button from "./components/Button";

function SinovJoyi() {
  return (
    <div>
      SinovJoyi
      <Link href="/components">Components</Link>
      <Button onClick={(e) => console.log(e.target)} border='full' label="Kirish" type='secondary' />
      <Button border='full' label="Ro'yhatdan o'tish" type='primary' />
      <Button disable border='full' label="Kirish" type='secondary' />
      <Button width disable border='half' label="Ro'yhatdan o'tish" type='primary' />
    </div>
  );
}

export default SinovJoyi;
