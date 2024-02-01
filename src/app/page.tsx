import Image from "next/image";
import banner from "../../public/banner.svg";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="container relative">
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:block">Let us solve your critical website development challenges</h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl mt-4 mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          facere pariatur maxime, voluptatibus iure soluta modi vitae cum rem
          quasi doloremque ipsum esse repellendus animi ut quo nihil
          consectetur. Dolores.
        </p>
        <Image src={banner} height={395} width={750} alt="Banner" />
    </section>
    <Testimonial/>
    <Team/>
    </div>
  );
}
