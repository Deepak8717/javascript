import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <footer className='bg-dark text-muted py-5 text-center'>
      <Container>
        <Row>
          <Col xs={12}>
            <p>
              &copy; {new Date().getFullYear()} by {author}
            </p>
            <p className='m-0'>
              Thanks to <strong>Andrew Mead</strong> for his amazing lecture on
              Gatsby that helped me build this page
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
