import Image from "next/image";


function Ydelser({ content }) {
  return (
    <>
      {content.ydelser.map((ydelse, index) => {
 
        return (
          <section
            key={ydelse.id}
            className=" bg-grey-dark grid justify-items-center"
          >
            <div className=" grid sm:grid-cols-2 max-w-[1450px] mx-auto">
              <div className="flex flex-col  justify-center items-center">
                <article className="max-w-xl px-4 py-16 sm:p-4 ">
                  <h2 className="text-gold-light text-4xl mb-4 font-light uppercase">
                    {ydelse.title}
                  </h2>

                  <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                  <p className="text-offWhite mb-4">{ydelse.broedtekst}</p>
                  <p className="text-gold-light text-xl font-light ">
                    {ydelse.price}
                  </p>
                </article>
              </div>

              <Image
                className={`w-[726px] h-[500px] object-cover  ${
                  index % 2 == 0 ? "sm:order-first" : ""
                }`}
                src={ydelse.photo.url}
                alt={ydelse.photo.alt}
                width={ydelse.photo.width}
                height={ydelse.photo.height}
                loading="lazy"
              />
            </div>
          </section>
        );
      })}
    </>
  );
}
export default Ydelser;
