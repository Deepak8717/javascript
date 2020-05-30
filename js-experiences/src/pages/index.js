import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import { Jumbotron } from 'react-bootstrap'

const index = () => {
  return (
    <Layout>
      <Head title='Home' />
      <div className='my-3'>
        <Jumbotron className='m-0'>
          <h1 className='m-0 mb-3'>#JavaScriptExperiences</h1>
          <p>
            Get familiar with various JavaScript concepts through small projects
            based. Fork/Clone the repository and kick off your journey to
            understand JavaScript.
          </p>
          <p>
            See project source, read existing code, rethink actual idea in your
            imagination and get your idea working while you debug through any
            errors, bugs.
          </p>
          <p>
            The repository contain vanilla JavaScript projects, React projects
            and quick introduction to Redux. All you need is a Laptop, VS Code
            to get working.
          </p>
          <p className='m-0'>
            There is no requirement for any sign ups etc. Ideal recommendation
            is to take on one project a day/week and solve it in your own way.
            Once you are confident with JavaScript, try building a major project
            that involves routing, styling, data.
          </p>
        </Jumbotron>
      </div>
    </Layout>
  )
}

export default index
