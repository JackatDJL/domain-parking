import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]  bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to our Domain Parking Lot!
      </h1>
      <p className="text-lg text-center">
        Hey there! You&apos;ve reached one of our parked domains. This domain is
        owned by the{' '}
        <a
          href="https://djl.foundation"
          className="text-blue-500 hover:underline"
        >
          DJL Foundation
        </a>
        . We&apos;re based in Germany.
      </p>
      <p className="text-lg text-center">
        All our projects are for non-profit purposes.
      </p>
      <div className="flex justify-center mt-8">
        <Link to="/projekte" className="text-blue-500 hover:underline">
          Check out our projects
        </Link>
        <span className="mx-2">|</span>
        <Link to="/founder" className="text-blue-500 hover:underline">
          Meet our founder
        </Link>
      </div>
    </div>
  );
}
