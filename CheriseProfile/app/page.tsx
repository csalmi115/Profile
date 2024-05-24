import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet", size: "lg" })}>
          Cherise Salmi&nbsp;
        </h1>
        <br />
        <h2
          className={subtitle({
            class: "px-4 min-w-20 h-10 text-mediam gap-2 rounded-small",
          })}
        >
          Junior Software Engineer
        </h2>
      </div>
      <Image
        width={600}
        height={600}
        alt="Picture of the author"
        src="https://wallpapercave.com/wp/FCDgjHU.jpg"
      />
      <br />
      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Projects Preview
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
