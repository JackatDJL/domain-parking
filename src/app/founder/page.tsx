"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Founder() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [foundationVisible, setFoundationVisible] = useState(true);

  useEffect(() => {
    // Start the animation sequence
    setAnimationStarted(true);

    // After 2 seconds, hide "Foundation"
    const timer = setTimeout(() => {
      setFoundationVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Subtle background with clean streaks */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Subtle streaks in the background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: `${30 + Math.random() * 40}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 70}%`,
              transform: `rotate(${Math.random() * 180 - 90}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              x: ["-5%", "5%", "-5%"],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute z-0 rounded-full bg-blue-900/10 blur-3xl"
        initial={{ width: 0, height: 0 }}
        animate={{ width: "40vh", height: "40vh" }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <header className="w-full flex justify-start items-center gap-4 z-10">
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

      <main className="max-w-[60%] text-center z-10 text-white">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Über unseren Gründer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg mb-4">
            Ich bin Jack Ruder, stellvertretender Schülersprecher des Gymnasium
            Athenaeum Stade und habe dieses Netzwerk gegründet, um die Bildung
            in infotechnologischen und robotechnologischen Bereichen zu fördern.
          </p>
          <p className="text-lg mb-4">
            Auf meinem Lebensweg habe ich über weite Umwege, neben den üblichen
            Informatikkursen, die Robotik-AG an unserer Schule entdeckt. Diese
            hat mich zu Plattformen wie GitHub und Hackclub geführt, wo ich
            inzwischen meine eigene AG sowie einen Hackathon in Hamburg
            organisiert habe. Mehr zu diesen Projekten findest du unter{" "}
            <Link
              href="/projekte"
              prefetch
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Projekte
            </Link>
            .
          </p>
          <p className="text-lg mb-4">
            Ich setze mich gerne für andere ein und möchte in Zukunft meinen
            Verein, die DJL Foundation, offiziell ins Vereinsregister eintragen
            lassen und ihn vom Finanzamt als gemeinnützig deklarieren lassen.
            Der Name steht für das Ziel, ein Digitales Jugend Lernzentrum (DJL)
            aufzubauen, und gleichzeitig andere Initiativen in den Bereichen
            Mechatronik, Informatik und Robotik zu fördern.
          </p>
        </motion.div>

        {/* Logo animation container */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative h-16 flex items-center justify-center">
            {/* DJL letters with expanding animation */}
            <motion.div
              className="flex items-center text-5xl font-bold"
              initial={{ gap: "0px" }}
              animate={{
                gap: animationStarted && !foundationVisible ? "12px" : "0px",
              }}
              transition={{
                duration: 0.8,
                delay: 2.25, // Start spreading 0.25s after Foundation starts fading
              }}
            >
              {/* D with igitales */}
              <div className="relative flex items-center">
                <motion.span
                  initial={{ x: "-8.5rem" }}
                  animate={{
                    x:
                      animationStarted && !foundationVisible
                        ? "-15rem"
                        : "0rem",
                  }}
                  transition={{ duration: 0.8, delay: 2.25 }}
                >
                  D
                </motion.span>
                <AnimatePresence>
                  {!foundationVisible && (
                    <motion.span
                      className="absolute left-[100%] whitespace-nowrap"
                      initial={{ opacity: 0, width: 0, x: "0.1rem" }}
                      animate={{ opacity: 1, width: "auto", x: "-14.9rem" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.8, delay: 2.25 }}
                    >
                      igitales
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* J with ugend */}
              <div className="relative flex items-center">
                <motion.span
                  initial={{ x: "-8.5rem" }}
                  animate={{
                    x:
                      animationStarted && !foundationVisible
                        ? "-4.0rem"
                        : "11rem",
                  }}
                  transition={{ duration: 0.8, delay: 2.25 }}
                >
                  J
                </motion.span>
                <AnimatePresence>
                  {!foundationVisible && (
                    <motion.span
                      className="absolute left-[100%] whitespace-nowrap"
                      initial={{ opacity: 0, width: 0, x: "0.1rem" }}
                      animate={{ opacity: 1, width: "auto", x: "-3.9rem" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.8, delay: 2.25 }}
                    >
                      ugend
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* L with ernzentrum */}
              <div className="relative flex items-center">
                <motion.span
                  initial={{ x: "-8.5rem" }}
                  animate={{
                    x:
                      animationStarted && !foundationVisible ? "5rem" : "20rem",
                  }}
                  transition={{ duration: 0.8, delay: 2.25 }}
                >
                  L
                </motion.span>
                <AnimatePresence>
                  {!foundationVisible && (
                    <motion.span
                      className="absolute left-[100%] whitespace-nowrap"
                      initial={{ opacity: 0, width: 0, x: "0.1rem" }}
                      animate={{ opacity: 1, width: "auto", x: "5.1rem" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.8, delay: 2.25 }}
                    >
                      ernzentrum
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Foundation text that fades away */}
            <AnimatePresence>
              {foundationVisible && (
                <motion.div
                  className="absolute ml-1"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1, x: "3rem" }}
                  exit={{
                    opacity: 0,
                    transitionEnd: { display: "none" }, // Ensure it's completely hidden after animation
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-5xl font-bold">Foundation</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Animated underline */}
          <motion.div
            className="h-[1px] bg-white/50 rounded-full mt-2"
            initial={{ width: 0 }}
            animate={{ width: animationStarted ? "100%" : 0 }}
            transition={{ duration: 1.5, delay: foundationVisible ? 0.5 : 2.5 }}
          />
        </motion.div>
      </main>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 z-0 pointer-events-none" />
    </div>
  );
}
