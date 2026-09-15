"use client"
import { FileSearchIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"


const NotFound = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col gap-3">
        <FileSearchIcon size={38} className="text-primary"/>
        <h3 className="font-display font-bold text-3xl text-primary">This Page Not Found</h3>
        <button onClick={() => router.back()} className="text-primary hover:text-secondary underline">Kembali</button>
    </div>
  )
}

export default NotFound