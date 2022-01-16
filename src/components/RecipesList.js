import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const imageData = getImage(image);

        //when we hit a url through file system routes api - 
        //we may be directed to a url like this -
        //http://localhost:8000/Banana%20Pancakes instead of http://localhost:8000/Banana-Pancakes which is standard
        //we use slugify to set it right by adding the hyphens in-between
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage className="recipe-img" image={imageData} alt={title} />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
