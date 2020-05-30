import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'

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
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulPost.title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}
