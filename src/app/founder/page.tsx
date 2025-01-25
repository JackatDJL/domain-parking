"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Founder() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
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

      <main className="max-w-[60%] text-center">
        <h1 className="text-4xl font-bold mb-8">Über unseren Gründer</h1>
        <p className="text-lg mb-4">
          Ich bin Jack Ruder, stellvertretender Schülersprecher des Gymnasium
          Athenaeum Stade und habe dieses Netzwerk gegründet, um die Bildung in
          infotechnologischen und robotechnologischen Bereichen zu fördern.
        </p>
        <p className="text-lg mb-4">
          Auf meinem Lebensweg habe ich über weite Umwege, neben den üblichen
          Informatikkursen, die Robotik-AG an unserer Schule entdeckt. Diese hat
          mich zu Plattformen wie GitHub und Hackclub geführt, wo ich inzwischen
          meine eigene AG sowie einen Hackathon in Hamburg organisiert habe.
          Mehr zu diesen Projekten findest du unter{" "}
          <Link
            href="/projekte"
            prefetch
            className="text-blue-500 hover:underline"
          >
            Projekte
          </Link>
          .
        </p>
        <p className="text-lg mb-4">
          Ich setze mich gerne für andere ein und möchte in Zukunft meinen
          Verein, die DJL Foundation, offiziell ins Vereinsregister eintragen
          lassen und ihn vom Finanzamt als gemeinnützig deklarieren lassen. Der
          Name steht für das Ziel, ein Digitales Jugend Lernzentrum (DJL)
          aufzubauen, und gleichzeitig andere Initiativen in den Bereichen
          Mechatronik, Informatik und Robotik zu fördern.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8"
        >
          <h2 className="text-3xl font-bold">Digitales Jugend Lernzentrum</h2>
          <p className="text-slate-400 mt-2">
            Ein Zentrum, das Jugendliche für die Technologien der Zukunft
            begeistert.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
