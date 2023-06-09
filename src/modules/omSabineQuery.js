import { gql } from "graphql-request";

//* Import af Inhold til siden "Om Sabine"
export const omSabineQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Om Sabine" } }) {
      id
      name
      content {
        ... on OmSabineHeroRecord {
          __typename
          id
          title
          paragraph
          heroImage {
            url
            width
            height
            alt
          }
        }
        ... on MinHistorieRecord {
          __typename
          id
          title
          title2
          paragraph
          paragraph2
          knap {
            text
            url
          }
          sabinephoto {
            url
            width
            height
            alt
          }
        }
        ... on OmSabineGalleriRecord {
          __typename
          id
          galleri {
            id
            url
            width
            height
            alt
          }
        }
        ... on OmSabineInformationRecord {
          __typename
          id
          heading
          subHeading
          paragraph
          knap {
            ... on EksternLinkRecord {
              text
              url
            }
          }
          lokation
          lokationHeading
          aabningstiderHeading
          tider
        }
      }
    }
    footer: allPages(filter: { name: { eq: "Footer" } }) {
      id
      name
      content {
        ... on FooterIndholdRecord {
          __typename
          logo {
            url
          }
          adresse
          telefonNummer
          email
          cvr
          socialMedie {
            icon {
              url
            }
            title
            link
          }
          undersider {
            overskrift
            link {
              titleLink
              link
            }
          }
        }
      }
    }
  }
`;
