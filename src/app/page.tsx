import Link from "next/link";
import { HomeHeroVideo } from "@/components/HomeHeroVideo";

export default function Home() {
  return (
    <section>
      <div className="page-shell pb-8 pt-10 sm:pb-12 sm:pt-16 md:pt-20">
        <div className="hero-title-wrap">
          <p className="text-sm text-muted sm:text-base">
            University of Florida
          </p>
          <h1 className="mt-3 text-balance text-[clamp(2rem,8vw,5rem)] font-medium leading-[0.92] tracking-[-0.065em] sm:mt-5 xl:text-[clamp(2.5rem,5.5vw,7.5rem)] xl:leading-[0.88] xl:whitespace-nowrap">
            Embodied Intelligence Group
          </h1>
        </div>

        <div className="mt-4 sm:mt-6">
          <HomeHeroVideo />
          <p className="mt-5 text-base font-medium leading-relaxed text-foreground sm:mt-8 sm:text-xl md:text-2xl">
            A UF student group exploring how intelligent machines learn.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-muted sm:mt-6 sm:text-base"
          >
            Interested? ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
