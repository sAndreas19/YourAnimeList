import Link from "next/link"

const Navbar = () => {
    return (
        <header className="">
            <div className="flex flex-col md:flex-row justify-between p-4 gap-2 bg-cards">
                <Link href="/" className="font-bold text-2xl border-b-2 border-primary">YourAnimeList</Link>
                <input placeholder="Cari Anime..." className="border-1 rounded-sm p-1"/>
            </div>
        </header>
    )
}

export default Navbar