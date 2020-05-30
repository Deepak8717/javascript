import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <ul>
        {edges.map((i, idx) => {
          const { title, date } = i.node.frontmatter
          const { slug } = i.node.fields
          return (
            <li key={idx}>
              <Link to={`/blog/${slug}`}>
                <h1>{title}</h1>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
