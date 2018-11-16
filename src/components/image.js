import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const imgStyle = {
  top: 0,
  right: 0,
  borderRadius: '50%',
  padding: '0 0 15px 15px',
  height: 'auto',
  maxWidth: '200px'
}

const Image = ({ image }) => (
      <StaticQuery
        query={graphql`
          query{
            placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
       `}
        render={data => <Img imgStyle={imgStyle} style={{ width: '40%',float: 'right'}} placeholderClassName="avatar" fluid={data.placeholderImage.childImageSharp.fluid}/>}
      />
)

export default Image
