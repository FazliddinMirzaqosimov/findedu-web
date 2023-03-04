import Link from "next/link";
import React from "react";
import Button from "./components/Button";
import Layout from "./components/Layout";

function SinovJoyi() {
  return (
    <div>
      <Layout>
        SinovJoyi
        <Link href="/components">Components</Link>
        <Button onClick={() => window.location.href = 'https://www.google.com'} border='full' label="Kirish" type='secondary' />
        <Button border='full' label="Ro'yhatdan o'tish" type='primary' />
        <Button disable border='full' label="Kirish" type='secondary' />
        <Button width disable border='half' label="Ro'yhatdan o'tish" type='primary' />
      </Layout>
    </div>
  );
}

export default SinovJoyi;
