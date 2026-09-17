"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type pageProps = {
  anime_id: string
  user_email: string | null | undefined
  username: string | null | undefined
  anime_title: string
}

const CommentInput = ({anime_id, user_email, username, anime_title}: pageProps) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false)
  const router = useRouter()

  const handleInput = ( e : any) => {
    setComment(e.target.value);
  };

  const handleSendComment = async (e: any) => {
    e.preventDefault()
    if(!user_email) {
      router.push("/api/auth/signin")
    }

    if (comment.trim() === "") {
      alert("Komentar tidak boleh kosong!");
      return; 
    }

    const data = {anime_id, user_email, comment, username, anime_title}

    const response = await fetch("/api/v1/comment/", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const postComment = await response.json()
    if(postComment.isCreated) {
      setIsCreated(true)
      setComment("")
      router.refresh()
    }

  }

  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      {isCreated && <p>Postingan Sudah Terkirim</p>}
      <textarea onChange={handleInput} value={comment} className="p-2 font-bold w-full h-48 border rounded bg-cards"/>
      <button onClick={handleSendComment} className="bg-primary px-4 py-2 rounded font-bold">Send Comment</button>
    </div>
  );
};

export default CommentInput;
