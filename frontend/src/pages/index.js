import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <Layout>
      <Seo title={data.strapiMainpage.title} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  );
}
const query = graphql`
  query {
    strapiMainpage {
      title
    }
  }
`;
export default IndexPage
