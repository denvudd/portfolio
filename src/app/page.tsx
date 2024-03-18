import { CardHover } from "@/components/card-hover";
import { HeroParallax } from "../components/hero-parallax";
import { LampContainer } from "@/components/lamp";
import { Tabs } from "@/components/tabs";
import { BackgroundBeams } from "@/components/background-beams";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

const products = [
  {
    title: "Ivan Peklin",
    link: "https://ivanpeklin-racing.com/en",
    thumbnail: "/assets/projects/peklin.png",
  },
  {
    title: "Plura",
    link: "https://plura-denvud.vercel.app/",
    thumbnail: "/assets/projects/plura.png",
  },
  {
    title: "Sieben Umzuege",
    link: "https://sieben-umzuege.de/de",
    thumbnail: "/assets/projects/su.png",
  },

  {
    title: "Djinni",
    link: "https://djinni-clone.vercel.app/",
    thumbnail: "/assets/projects/djinni.png",
  },
  {
    title: "Breaddit",
    link: "https://breaddit-devud.vercel.app/",
    thumbnail: "/assets/projects/breaddit.png",
  },
  {
    title: "Mifu",
    link: "https://www.mifu.co.uk/",
    thumbnail: "/assets/projects/mifu.png",
  },

  {
    title: "Vantazhivochka",
    link: "https://vantazhivochka.com/",
    thumbnail: "/assets/projects/vantazhivochka.png",
  },
  {
    title: "RAWG",
    link: "https://denvud-react-games.netlify.app/",
    thumbnail: "/assets/projects/rawg.png",
  },
  {
    title: "TMDB",
    link: "https://react-dbmovies.vercel.app/",
    thumbnail: "/assets/projects/tmdb.png",
  },
  {
    title: "Hippo Digital",
    link: "https://hippodigital.co.uk/",
    thumbnail: "/assets/projects/hippo.png",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden antialiased relative">
      <section>
        <HeroParallax products={products} />
      </section>
      <section>
        <LampContainer />
        <div className="max-w-5xl mx-auto px-8">
          <CardHover />
        </div>
      </section>
      <section className="h-[45rem] [perspective:1000px] relative b flex flex-col mx-auto w-full items-start justify-start mt-20 mb-40">
        <Tabs />
      </section>
      <section className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Me
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Do you have any question left? Any suggestions? Want to just chat
            about how challenging it is to be a developer these days? Feel free
            to reach out, and we can discuss it all over a cup of coffee!
          </p>
          <div className="flex justify-center z-10">
            <a
              href="mailto:dmitry.yurin2020@gmail.com"
              className={cn(buttonVariants(), "w-20 mt-4 z-10")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </div>
        </div>
        <BackgroundBeams />
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Dmytro Yurin - Front End Developer",
  description:
    "I build beautiful products with the latest technologies and frameworks.",
  openGraph: {
    images: [
      {
        url: "https://web-developer.in.ua/assets/articles/react/react-top/react-top.png",
      },
    ],
  },
};
