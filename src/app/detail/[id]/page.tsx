"use client";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  return (
    <div className="m-10">
      <AppNavbar />
      <div className="text-white">
        detail page id: {id}
      </div>
      <AppFooter />
    </div>
  );
};

export default Page;
