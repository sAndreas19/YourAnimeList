"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type pageProps = {
  anime_id: string;
  user_email: string | null | undefined;
  username: string | null | undefined;
  anime_title: string;
  anime_image: string | null | undefined
  user_image: string | null | undefined
};

const CommentInput = ({
  anime_id,
  user_email,
  username,
  anime_title,
  anime_image,
  user_image
}: pageProps) => {

  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleInput = (e: any) => {
    setComment(e.target.value);
  };

  const handleSendComment = async (e: any) => {
    e.preventDefault();
    if (!user_email) {
      router.push("/api/auth/signin");
    }

    if (comment.trim() === "") {
      alert("Komentar tidak boleh kosong!");
      return;
    }

    const data = { anime_id, user_email, comment, username, anime_title, anime_image, user_image };

    try {

      const response = await fetch("/api/v1/comment/", {
        method: "POST",
        body: JSON.stringify(data),
      });
      
      if(!response.ok) {
        alert("Server sedang bermasalah, coba lagi nanti.")
        return
      }

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    } catch(error) {
      alert("Gagal mengirim komentar. Periksa koneksi internet kamu.")
      console.error("db tidak tersedia")
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      {isCreated && <p>Postingan Sudah Terkirim</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="p-2 font-bold w-full h-48 border rounded bg-cards"
      />
      <button
        onClick={handleSendComment}
        className="bg-primary px-4 py-2 rounded font-bold hover:cursor-pointer hover:bg-secondary"
      >
        Kirim Komentar
      </button>
    </div>
  );
};

export default CommentInput;
