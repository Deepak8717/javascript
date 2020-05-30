import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default function Blog({ data }) {
  const { title, publishedDate, body } = data.contentfulPost
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json)}
    </Layout>
  )
}
