import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'
import { FiClock } from 'react-icons/fi'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { Row, Col, Card } from 'react-bootstrap'

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

export default function Blog({ data, pageContext }) {
  const { next, prev } = pageContext
  const { title, publishedDate, body } = data.contentfulPost
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} className='img-fluid rounded' />
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulPost.title} />
      <div className='my-3'>
        <h1>{title}</h1>
        <p className='d-flex align-items-center'>
          <FiClock />
          <span className='ml-2'>{publishedDate}</span>
        </p>
        {documentToReactComponents(body.json, options)}
        <Row>
          {prev && (
            <Col>
              <Card
                bg='light'
                className='shadow'
                as={Link}
                to={`/blog/${prev.slug}`}
              >
                <Card.Body>
                  <GrLinkPrevious />
                </Card.Body>
              </Card>
            </Col>
          )}
          {next && (
            <Col>
              <Card
                bg='light'
                className='shadow'
                as={Link}
                to={`/blog/${next.slug}`}
              >
                <Card.Body>
                  <GrLinkNext />
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    </Layout>
  )
}
