"use client";

import { chatApiSlice } from "@/lib/redux/features/chatApiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";

const ReduxApiProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ApiProvider api={chatApiSlice}>{children}</ApiProvider>;
};

export default ReduxApiProvider;
