import React from "react";
import { useStore } from "store/store";
import "./styles.css";

function Header() {
  const { count: reduxCount } = useStore();
  return <div className="header">Header - {reduxCount?.toString()}</div>;
}

export default Header;
