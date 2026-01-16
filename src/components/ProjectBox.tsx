"use client";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface ProjectBoxProps {
  name: string;
  description: string;
  link: string;
  logo: string;
  image: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  name,
  description,
  link,
  logo,
  image,
}) => {
  const handleProjectClick = () => {
    posthog.capture("parking_project_clicked", {
      project_name: name,
      project_link: link,
    });
  };

  return (
    <Link
      href={link}
      prefetch
      className="relative bg-black rounded-lg border border-white p-6 block"
      onClick={handleProjectClick}
    >
      <div className="flex items-start gap-4">
        <Image
          src={logo}
          alt={`${name} Logo`}
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-slate-700 mt-2">{description}</p>
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt={`${name} Banner`}
          width={400}
          height={200}
          className="rounded-lg mt-4"
        />
      )}
    </Link>
  );
};

export default ProjectBox;
