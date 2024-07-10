import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p style={{height: 5000}}>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>
export default IndexPage