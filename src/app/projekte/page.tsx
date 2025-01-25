import Image from "next/image";
import Link from "next/link";

export default function Projekte() {
  const logos = {
    scrapyard:
      "https://cloud-2lxl137co-hack-club-bot.vercel.app/0wordmark_2x.svg",
    hackclub:
      "https://cloud-lw6fbttel-hack-club-bot.vercel.app/0hcstadelogo.svg",
    atheblues:
      "https://cloud-xp00lfj6g-hack-club-bot.vercel.app/0atheblues_logo_v1.svg",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-[60%] mx-auto bg-black">
      <header className="w-full flex justify-start items-center gap-4">
        <Link href="/" prefetch>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z" />
          </svg>
        </Link>
      </header>

      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Unsere Projekte
      </h1>

      <section className="w-full">
        <h2 className="text-2xl font-bold text-white mb-6">
          Aktuelle Projekte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            href="https://atheblues.de"
            prefetch
            className="relative bg-black rounded-lg border border-white p-6 block"
          >
            <div className="flex items-start gap-4">
              <Image
                src={logos.atheblues}
                alt="AtheBlues Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">AtheBlues</h3>
                <p className="text-sm text-slate-700 mt-2">
                  Ein Erfolgreiches Robotikteam aus Stade
                </p>
              </div>
            </div>
            <Image
              src="https://cloud-xp00lfj6g-hack-club-bot.vercel.app/1rcj_2024_kas_01.jpg"
              alt="AtheBlues Banner"
              width={400}
              height={200}
              className="rounded-lg mt-4"
            />
          </Link>

          <Link
            href="https://scrapyard.hackclub.com/hamburg"
            prefetch
            className="relative bg-black rounded-lg border border-white p-6 block"
          >
            <div className="flex items-start gap-4">
              <Image
                src={logos.scrapyard}
                alt="Scrapyard Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Scrapyard Hamburg
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Großer Globaler Hackathon in Hamburg
                </p>
              </div>
            </div>
            <Image
              src="https://cloud-2lxl137co-hack-club-bot.vercel.app/1image.png"
              alt="Scrapyard Hamburg Banner"
              width={400}
              height={200}
              className="rounded-lg mt-4"
            />
          </Link>
        </div>
      </section>

      <section className="w-full mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Geplante Projekte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            href="https://hackclub-stade.de"
            prefetch
            className="relative bg-black rounded-lg border border-white p-6 block"
          >
            <div className="flex items-start gap-4">
              <Image
                src={logos.hackclub}
                alt="Hackclub Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold text-white">Hackclub Stade</h3>
                <p className="text-sm text-slate-700 mt-2">
                  Eine AG im Athenaeum Stade
                </p>
              </div>
            </div>
          </Link>

          <div className="relative bg-black rounded-lg border border-white p-6">
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-white"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm6 13H6v-2h12v2z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Das DJL Fördernetzwerk
                </h3>
                <p className="text-sm text-slate-700 mt-2">
                  Ein Verein (den ich noch gründe) der Bildungsinitiativen in
                  der Metropolregion Hamburg fördert
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
