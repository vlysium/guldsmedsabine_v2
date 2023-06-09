import Anchor from "../../Anchor";

export default function KontaktInformation({ content }) {
  const { overskrift, adresse, telefon, email, cvr, kort } = content;

  return (
    <section className="grid lg:grid-cols-2 max-w-[1450px] mx-auto">
      <div className="px-6 sm:px-12 py-16  flex flex-col justify-center lg:items-center">
        <article>
          <h1 className="text-gold-light uppercase text-4xl mb-8 font-light">{overskrift}</h1>
          <address className="text-transform not-italic text-offWhite text-lg grid gap-y-8 mb-8">
            <p>{"Adresse: " + adresse}</p>
            <a href={"tel:+45" + telefon.replaceAll(" ", "")}>{"Telefon: " + telefon}</a>
            <a href={"mailto:" + email}>{"Email: " + email}</a>
            <p>{"CVR: " + cvr}</p>
          </address>
          <Anchor className="button-primary" href="/kontakt-formular">
            Kontakt formular
          </Anchor>
        </article>
      </div>
      <div className="lg:order-first grayscale">
        <iframe title="Google maps, Fredensborg Briller" width="100%" height="600" src={"https://maps.google.com/maps?q=" + kort.latitude + "," + kort.longitude + "&t=&z=19&ie=UTF8&iwloc=&output=embed"}></iframe>
      </div>
    </section>
  );
}
