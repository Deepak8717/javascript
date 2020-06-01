import '../styles/index.scss'
import appStyles from '../styles/app.module.scss'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import classNames from 'classnames'

const Layout = ({ children }) => {
  return (
    <div className={classNames(appStyles.app, appStyles.bg)}>
      <Header />
      <main className={appStyles.fullHeight}>
        <Container>
          <Row>
            <Col xs={12}>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
