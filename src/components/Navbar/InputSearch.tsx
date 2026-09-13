"use client";

import { useRef } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const keyword = searchRef.current?.value;
    if (!keyword || keyword.trim() == "") return;

    router.push(`/search/${keyword}`);
  };
  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          placeholder="Cari Anime..."
          ref={searchRef}
          className="w-full border-1 rounded p-2"
          required
        />
        <button className="absolute top-2 end-1 cursor-pointer">
          <MagnifyingGlassIcon size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
