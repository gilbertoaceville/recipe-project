import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import setupTags from "../utils/setupTags"

export default function Tags({ data }) {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
