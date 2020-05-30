import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Head from '../components/Head'

export default function NotFound() {
  return (
    <Layout>
      <Head title='Sorry' />
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
      <Link to='/'>Go Home</Link>
    </Layout>
  )
}
