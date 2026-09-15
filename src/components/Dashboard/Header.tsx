"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }: { title: string }) => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }
  return (
    <div className="flex justify-between items-center mb-5">
      <button onClick={handleBack} className="flex gap-1 cursor-pointer">
        <span>
          <ArrowLeftIcon size={28} />
        </span>
        <span>BACK</span>
      </button>
      <h3 className="">{title}</h3>
    </div>
  );
};

export default Header;
