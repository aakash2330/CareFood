'use client'
import appStore from "@/lib/appStore";
import { Provider } from "react-redux";


export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={appStore}>{children}</Provider>;
}