import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import Layout from '../components/layout'
import Image from '../components/image'


const IndexPage = () => (
  <Layout>
    <div className="position section">
      <h3>Diana Lisovenko</h3>
      <p>front-end developer</p>
    </div>
    <div className="personal-information section">
      <div className="text-information">
        <p>
          <Image />
          Hi there. I am Front End developer from Kyiv, Ukraine.
          I am obsessed with making things and even more obsessed with making things better. I enjoy taking complex problems and turning them into simple and beautiful interface design. I love logic and structure of coding  and always
          strive to write clean and efficient code
        </p>
      </div>
      <p className="skills-title">I can do next:</p>
      <div className="skills-list">
        <span className="new badge" data-badge-caption="Java script"></span>
        <span className="new badge" data-badge-caption="React JS"></span>
        <span className="new badge" data-badge-caption="Node JS"></span>
        <span className="new badge" data-badge-caption="Mongo DB"></span>
        <span className="new badge" data-badge-caption="HTML"></span>
        <span className="new badge" data-badge-caption="CSS"></span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
