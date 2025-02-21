import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/HomePage/Banner'
import OverViewSection from '../components/HomePage/OverviewSection/OverViewSection'
import Feature from '../components/HomePage/FeatureSection/Feature'
import FounderSection from '../components/HomePage/CardSection/FounderSection'
import QueryForm from '../components/HomePage/QueryForm'


const HomePage = () => {
  return (
    <Layout>
      <div className='w-screen items-center justify-center'>
        <Banner/>
        <OverViewSection/>
        {/* <Feature/> */}
        <FounderSection/> 
        <QueryForm/>
          
      </div>
    </Layout>
  )
}

export default HomePage