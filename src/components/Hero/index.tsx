import Link from "next/link";

const Hero = ({ anime }: { anime: any }) => {
  // Kalau data anime kosong/belum load, jangan tampilkan apa-apa
  if (!anime) return null;

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${anime.attributes.coverImage?.original || anime.attributes.posterImage?.large})` 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F1A] via-[#0F0F1A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-3xl flex flex-col gap-4">
        <span className="text-primary font-bold tracking-widest text-sm md:text-base drop-shadow-md">
          ANIME TERPOPULER SAAT INI
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white line-clamp-2 drop-shadow-lg">
          {anime.attributes.titles.en_jp || anime.attributes.canonicalTitle}
        </h1>
        <p className="text-gray-300 text-sm md:text-base line-clamp-3 md:line-clamp-4 leading-relaxed">
          {anime.attributes.synopsis}
        </p>
        <div className="mt-4 flex gap-4">
          <Link 
            href={`/anime/${anime.id}`}
            className="bg-primary text-white font-bold px-8 py-3 rounded shadow-lg shadow-primary/30 hover:bg-secondary hover:-translate-y-1 transition-all"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;