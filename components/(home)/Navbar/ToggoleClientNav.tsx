"use client";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const ClientNavToggole = () => {
  const path = usePathname();
  return path === "/" ? null : <Navbar />;
};

export default ClientNavToggole;
