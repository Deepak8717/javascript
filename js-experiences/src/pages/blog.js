import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Head from '../components/Head'
import { ListGroup, Badge } from 'react-bootstrap'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const { edges } = data.allContentfulPost
  return (
    <Layout>
      <Head title='Blog' />
      <div className='my-3'>
        <h1>Projects</h1>
        <ListGroup>
          {edges.map((i, idx) => {
            const { title, publishedDate, slug } = i.node
            return (
              <ListGroup.Item key={idx} action as={Link} to={`/blog/${slug}`}>
                <div className='d-flex justify-content-between align-items-center'>
                  <span>{title}</span>
                  <Badge variant='primary'>{publishedDate}</Badge>
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    </Layout>
  )
}

export default Blog
