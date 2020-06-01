import appStyles from '../styles/app.module.scss'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import classNames from 'classnames'

const Navigation = () => {
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
    <Navbar
      //bg='dark'
      variant='dark'
      fixed='top'
      className={classNames(appStyles.footerBg, 'shadow-lg')}
    >
      <Navbar.Brand as={Link} to='/'>
        {title}
      </Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link as={Link} to='/blog' activeClassName='active'>
          Projects
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
