"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";

export default function Founder() {
  const [foundationVisible, setFoundationVisible] = useState(true);

  useEffect(() => {
    setFoundationVisible(false);
  }, []);
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

        <motion.div className="mt-8 flex flex-col items-center">
          <motion.h1 className="text-4xl font-bold flex" layout>
            <AnimatePresence>
              <motion.p>D</motion.p>
              {!foundationVisible && (
                <>
                  {" "}
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    igitales
                  </motion.p>{" "}
                </>
              )}
              <motion.p>J</motion.p>
              {!foundationVisible && (
                <>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    ugend{" "}
                  </motion.p>
                </>
              )}
              <motion.p>L</motion.p>
              {!foundationVisible && (
                <>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    ernzentrum
                  </motion.p>{" "}
                </>
              )}
              <AnimatePresence>
                {foundationVisible && (
                  <motion.p
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    Foundation
                  </motion.p>
                )}
              </AnimatePresence>
            </AnimatePresence>
          </motion.h1>
        </motion.div>
      </main>
    </div>
  );
}
