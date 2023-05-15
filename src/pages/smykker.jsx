import { GraphQLClient } from "graphql-request";
import { smykkerQuery } from "../modules/smykkerQuery";
import Galleri from "../components/DatoCMS/smykker/Galleri";




export default function Smykker({ data }) {
  const { allProdukters } = data;
  const produkter = allProdukters
  console.log(produkter);

  return (
    <>
      <section className="flex items-center justify-center py-8">
        <h1 className="text-gold-light">Smykker</h1>
      </section>
      <div className="text-lg flex gap-8 justify-center py-32 bg-grey-dark">
        <Galleri produkter={produkter} />
      </div>
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

  const graphQLData = await graphQLClient.request(smykkerQuery);
  //console.log(filteredGraphQLData);
  return {
    props: { data: graphQLData },
  };
}