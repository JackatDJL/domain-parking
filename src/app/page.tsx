import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center mb-4">
        This Domain is Parked on my Bun!
      </h1>
      <p className="text-lg text-center">
        Diese Domains sind Eigentum der{" "}
        <Link
          href="https://djl.foundation"
          prefetch
          className="text-blue-500 hover:underline"
        >
          DJL Foundation
        </Link>
        . Wir sind in Deutschland ansässig.
      </p>
      <p className="text-lg text-center">
        Unsere Projekte dienen ausschließlich gemeinnützigen Zwecken.
      </p>
      <div className="flex justify-center mt-8">
        <Link
          href="/projekte"
          prefetch
          className="text-blue-500 hover:underline"
        >
          Aktuelle Projekte
        </Link>
        <span className="mx-2">|</span>
        <Link
          href="/founder"
          prefetch
          className="text-blue-500 hover:underline"
        >
          Unser Gründer
        </Link>
      </div>
    </div>
  );
}
