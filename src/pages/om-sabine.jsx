import { GraphQLClient } from "graphql-request";
import { omSabineQuery } from "../modules/omSabineQuery";
import Hero from "../components/DatoCMS/omSabine/Hero";
import OmMig from "../components/DatoCMS/omSabine/OmMig";
import Galleri from "../components/DatoCMS/omSabine/Galleri";
import Informationer from "../components/DatoCMS/omSabine/Informationer";
import Footer from "../components/Footer";
import Head from "next/head";

export default function OmSabine({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
      <Head>
        <title>Om Sabine | Lidt om mig</title>
        <meta
          name="description"
          content="Træd ind i den fortryllende verden af smykker med Guldsmed Sabine Sørensen, en dedikeret kunstner med mere end 15 års erfaring. Her mødes passion, kreativitet og traditionelt håndværk for at skabe unikke smykker, der er skræddersyet til dig. Udforsk Sabines historie, hendes inspirerende kunstneriske rejse, og find ud af, hvordan du kan erhverve et smykke, der er håndlavet med omhu og kærlighed."
        ></meta>
      </Head>
      <main>
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "OmSabineHeroRecord":
              return <Hero key={content.id} content={content} />;
            case "MinHistorieRecord":
              return <OmMig key={content.id} content={content} />;
            case "OmSabineGalleriRecord":
              return <Galleri key={content.id} content={content} />;
            case "OmSabineInformationRecord":
              return <Informationer key={content.id} content={content} />;
          }
        })}
      </main>
      <Footer content={footer[0].content[0]} />
    </>
  );
}

// GET Request
export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData = await graphQLClient.request(omSabineQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}
