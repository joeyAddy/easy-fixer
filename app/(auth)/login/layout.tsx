import React from "react";
import "../../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-screen">{children}</main>;
}
