import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/HomePage/Banner'
import OverViewSection from '../components/HomePage/OverviewSection/OverViewSection'
import Feature from '../components/HomePage/FeatureSection/Feature'
import GraphSection from '../components/HomePage/GraphSection/GraphSection'

const HomePage = () => {
  return (
    <Layout>
      <div className='w-screen'>
        <Banner/>
        <OverViewSection/>
        <GraphSection/>
        <Feature/>
        
      </div>
    </Layout>
  )
}

export default HomePage