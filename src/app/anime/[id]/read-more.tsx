"use client";

import { useState } from "react";

const Synopsis = ({ text }: { text: string }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  // Jika teks pendek, tampilkan langsung
  if (!text || text.length <= 300) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {isReadMore ? text : `${text.slice(0, 300)}...`}
      </p>
      <button
        onClick={() => setIsReadMore(!isReadMore)}
        className="text-primary hover:text-secondary font-bold mt-2 cursor-pointer transition-all"
      >
        {isReadMore ? "Lebih Sedikit" : "Baca Selengkapnya"}
      </button>
    </div>
  );
};

export default Synopsis;