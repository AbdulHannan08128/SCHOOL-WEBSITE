import React from 'react'
import Hero from '@/components/Hero/Hero';
import Performers from '@/components/Performers/Performers';
import Subjects from '@/components/Subjects/Subjects';
import YearlyActivities from '@/components/Activities/Yearly/YearlyActivities';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Hero/>
    <Performers/>
    <Subjects/>
    <YearlyActivities/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home