import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Styling
import "../css/index.scss";
import AlternatingText from '../components/AlternatingText';


const IndexPage = () => {
  return (
    <Layout>
      <section className='about'>
        <div className='greet'>
          <AlternatingText interval={3000}>
            <p>hi.</p>
            <p>你好.</p>
            <p>こんにちは.</p>
          </AlternatingText>
          <p>I'm</p>
          <p>Justin</p>
        </div>
        <div className='about'>
          <p>I'm a freelance software developer specializing in Machine Learning, passionate 
            about bringing ideas to life through technology.</p>
        </div>
      </section>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>
export default IndexPage