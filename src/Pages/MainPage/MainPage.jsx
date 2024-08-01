import React from 'react'
import Header from '../../Components/Header/Header'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import MainVideo from '../../Components/MainVideo/MainVideo'
import OurHits from '../../Components/OurHits/OurHits'
import Reviews from '../../Components/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import s from './MainPage.module.css'

function MainPage() {
  return (
    <>
        <Header/>
        {/* <CategoryBar/> */}
        <MainVideo/>
        <OurHits/>
        <Reviews/>
        <Footer/>
    </>
  )
}

export default MainPage