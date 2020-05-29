import React from 'react'
import Navigation from './Navigation'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <header>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <Navigation />
    </header>
  )
}

export default Header
