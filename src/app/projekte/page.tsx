import Link from "next/link";
import ProjectBox from "@/components/ProjectBox";
import projects from "@/data/projects";

export default function Projekte() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-[60%] mx-auto  bg-black text-white">
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
          {projects
            .filter((project) => project.name !== "Das DJL Fördernetzwerk")
            .map((project) => (
              <ProjectBox
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                logo={project.logo}
                image={project.image}
              />
            ))}
        </div>
      </section>

      <section className="w-full mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          Geplante Projekte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects
            .filter((project) => project.name === "Das DJL Fördernetzwerk")
            .map((project) => (
              <ProjectBox
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                logo={project.logo}
                image={project.image}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
