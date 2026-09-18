"use client";

import { PlusCircleIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ViewCollectionButton from "./ViewCollectionButton";

type pageProps = {
  anime_id: string;
  user_email: string | undefined | null;
  anime_image: string
  anime_title: string
};

const AddToCollectionButton = ({ anime_id, user_email, anime_image, anime_title }: pageProps) => {
  const [isCreated, setIsCreated] = useState(false);
  const navigation = useRouter();

  const handleCollection = async (e: any) => {
    e.preventDefault();
    if (!user_email) {
      navigation.push("/api/auth/signin");
    }

    const data = { anime_id, user_email, anime_image, anime_title };

    try {

      const response = await fetch("/api/v1/collection/", {
        method: "POST",
        body: JSON.stringify(data),
      });
  
      const collection = await response.json();
      if (collection.isCreated) {
        setIsCreated(true);
      }
    } catch(error) {
      alert("Gagal menambahkan. Periksa koneksi internet kamu.")
      console.error("db tidak tersedia")
    }
  };
  return (
    <div>
      {isCreated ? (
        <ViewCollectionButton user_email={user_email} />
      ) : (
        <button
          onClick={handleCollection}
          className=" flex justify-center items-center hover:cursor-pointer hover:bg-secondary bg-primary px-2 py-1 rounded"
        >
          <PlusCircleIcon size={24} />
          Add To Collection
        </button>
      )}
    </div>
  );
};

export default AddToCollectionButton;
