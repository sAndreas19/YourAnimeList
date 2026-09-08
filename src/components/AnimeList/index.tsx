import Image from "next/image"
import Link from "next/link"

const AnimeList = ({id, title, imageUrl}) => {
    return(
        <>
            <Link href={`/${id}`} className="cursor-pointer">
                <Image
                    src={imageUrl}
                    alt="..."
                    width={350}
                    height={350}
                    className="w-full max-h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
        </>
    )
}

export default AnimeList