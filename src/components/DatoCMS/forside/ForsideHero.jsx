import Image from "next/image";
import Anchor from "../../Anchor";

export default function ForsideHero({ content }) {
  console.log(content)
  return (
    <section className="mx-auto">
      <div className="grid max-md:hidden relative h-[75vh]">
        <div className="bg-black/25 col-start-1 row-start-1 z-[1]">
          <div className=" text-offWhite flex flex-col justify-center p-4 gap-4 max-w-[1450px] mx-auto w-full h-full">
            <h1 className="text-gold-light font-italianno mb-4">
              {content.overskrift}
            </h1>
            <h2 className="text-gold-light uppercase font-light mb-4">
              {content.subOverskrift}
            </h2>
            <p className="mb-8 text-offWhite max-w-lg">{content.brDtekst}</p>
            <Anchor className="button-primary" href={content.knap[0].url}>
              {content.knap[0].text}
            </Anchor>
          </div>
        </div>
        <video
          muted
          autoPlay
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={content.baggrundsvideo?.url} type="video/mp4" />
        </video>
      </div>
      <div className="grid md:hidden h-[70vh]">
        <div className="bg-black/50 col-start-1 row-start-1 text-offWhite z-[1] flex flex-col justify-center p-4 gap-4">
          <h1 className="text-gold-light font-italianno mb-4">
            {content.overskrift}
          </h1>
          <h2 className="text-gold-light uppercase font-light mb-4">
            {content.subOverskrift}
          </h2>
          <p className="mb-8 text-offWhite max-w-lg">{content.brDtekst}</p>
          <Anchor className="button-primary" href={content.knap[0].url}>
            {content.knap[0].text}
          </Anchor>
        </div>
        <Image
          className="col-start-1 row-span-1 object-cover h-full col-start-1 row-start-1 aspect-square "
          width={content.mobileBaggrund?.width}
          height={content.mobileBaggrund?.height}
          src={content.mobileBaggrund?.url}
          alt={content.mobileBaggrund?.alt}
          priority={true}
        />
      </div>
    </section>
  );
}
{/* <section className="mx-auto">
      <div className="grid max-md:hidden">
        <div className="bg-black/25 col-start-1 row-start-1 text-offWhite z-[1] flex flex-col justify-center p-4 gap-4">
          <h1 className="">Guldsmed Sabine</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <video muted autoPlay loop className="w-full col-start-1 row-start-1 max-h-[70vh]">
          <source src={content.baggrundsvideo?.url} type="video/mp4" />
        </video>
      </div>
      <div className="grid md:hidden">
        <div className="bg-black/50 col-start-1 row-start-1 text-offWhite z-[1] flex flex-col justify-center p-4 gap-4">
          <h1 className="">Sabine guldsmid</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Image
          className="col-start-1 row-span-1 object-cover h-full col-start-1 row-start-1 aspect-square "
          width={content.mobileBaggrund?.width}
          height={content.mobileBaggrund?.height}
          src={content.mobileBaggrund?.url}
          alt={content.mobileBaggrund?.alt}
          priority={true}
        />
      </div>
    </section> */}