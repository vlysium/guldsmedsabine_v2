import KontaktFormular from "./KontaktFormular";
import Router from "next/router";

export default function Kontakt({ content }) {
  const { overskrift, paragraf, billede, formular } = content;

  return (
    <section className="grid lg:grid-cols-2 max-w-[1450px] mx-auto  ">
      <div className="relative px-6 sm:px-12 lg:px-16 xl:px-24  py-16 flex flex-col gap-8  mx-auto bg-no-repeat bg-cover lg:bg-contain bg-center" style={{ backgroundImage: `url("/images/sabineLogoBaground.svg")` }}>
        <button className="absolute top-0 lg:top-4 left-6 sm:left-12 lg:left-16 xl:left-24 text-offWhite text-4xl" onClick={() => Router.back()}>
          ←
        </button>
        <div>
          <h1 className="text-gold-light uppercase text-4xl font-light mb-2">{overskrift}</h1>
          <p className="text-offWhite">{paragraf}</p>
        </div>
        <KontaktFormular formular={formular[0]} />
      </div>
      <div style={{ backgroundImage: `url("${billede?.url}")` }} className="hidden lg:block bg-cover bg-[66%]" role="img" />
    </section>
  );
}
