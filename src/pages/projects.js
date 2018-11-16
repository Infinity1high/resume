import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const imgStyle = {
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '5px',
  width: '400px',
  height: '220px'
}

const ProjectsPage = (props) => (
  <Layout>
    <div className="projects section">
      <Img imgStyle={imgStyle} style={{ width: '400px',height: '220px', float: 'left'}} fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img imgStyle={imgStyle} style={{ width: '400px', height: '220px', float: 'right'}} fluid={props.data.imageTwo.childImageSharp.fluid} />
    </div>
    <div className="projects section description">
      <div className="project-item" style={{float: 'left'}}>Neborecords. Smart ticket search and agregator</div>
      <div className="project-item" style={{float: 'right'}}>Solastis. CRM system</div>
    </div>

  </Layout>
)

export const query = graphql`
 query {
  imageOne: file(relativePath: { eq: "nebo.png" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "solastis.png" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default ProjectsPage;
