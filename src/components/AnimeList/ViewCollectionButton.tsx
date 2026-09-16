"use client";

import { BoxArrowDownIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

type pageProps = {
  user_email: string | undefined | null;
};

const ViewCollectionButton = ({ user_email }: pageProps) => {
  const navigation = useRouter();

  const handleViewCollection = async (e: any) => {
    e.preventDefault();
    if (!user_email) {
      navigation.push("/api/auth/signin");
    }
    navigation.push("/users/dashboard/collection");
  };
  return (
    <div>
      <p>Added to collection</p>
      <button
        onClick={handleViewCollection}
        className=" flex justify-center items-center hover:cursor-pointer hover:bg-secondary bg-primary px-2 py-1 rounded"
      >
        <BoxArrowDownIcon size={24} />
        View Collection
      </button>
    </div>
  );
};

export default ViewCollectionButton;
