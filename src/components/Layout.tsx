import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div className="bg-blue-950 min-h-screen">{children}</div>;
}
