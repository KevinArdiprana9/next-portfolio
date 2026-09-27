import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="py-10 sm:py-18">
      <div className="mx-auto max-w-5xl px-6">
        <Stagger className="flex flex-col-reverse items-center gap-12 sm:flex-row sm:justify-between sm:gap-16">
          <div className="max-w-2xl text-center sm:text-left">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-2 rounded-full bg-accent" />
                Fresh graduate · Open to entry-level roles
              </p>
            </Reveal>

            <Reveal>
              <h1 className="font-display text-3xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Kevin.
                <span className="block italic text-muted-foreground">
                  I build useful things on the web
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg">
                Informatics graduate from Atma Jaya Yogyakarta University,
                focused on fullstack web development. I like turning
                rough ideas into products people can actually use.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Button asChild variant="accent" size="lg">
                  <Link href="#projects">See my work</Link>
                </Button>

                {/* <Button asChild variant="outline" size="lg">
                  <a href="/cv.pdf" download>
                    Download CV
                  </a>
                </Button> */}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-full bg-accent/10 blur-2xl" />

              <div className="relative size-52 overflow-hidden rounded-full border-2 border-border bg-secondary shadow-xl sm:size-64 lg:size-72">
                <Image
                  src="/images/hero.jpg"
                  alt="Kevin Ardiprana"
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </Reveal>
        </Stagger>
      </div>
    </section>
  );
}