import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

/**
 * Page created with gatsby-node
 * @param {*} param0 refers to graphQL data
 * @param {*} param1 refers to where the dynamic parameter in the graphQL name "GetRecipes" is below i.e {pageContext: data} - console.log(props) to find out
 * @returns  * Create pages using gatsby node (just like filesystem route API using {ContentfulRecipe.title.js})
 * @returns gatsby-node template
 */
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

//"GetRecipes" same name in gatsby-node.js
export const query = graphql`
  query GetRecipes($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

export default TagTemplate
