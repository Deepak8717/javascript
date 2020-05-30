import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

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
      <ul>
        {edges.map((i, idx) => {
          const { title, publishedDate, slug } = i.node
          return (
            <li key={idx}>
              <Link to={`/blog/${slug}`}>
                <h1>{title}</h1>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
