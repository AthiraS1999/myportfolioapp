import React from 'react'
import '../components/Hom.css'
import Profile_img from '../../src/components/profile.jpg'


const Home = () => {
  return (
      <div className='intro'>
         <img className='intro-img' src={Profile_img} alt='imgage'></img>
         <h1><span>I'm Athira.S,</span>From Kerala.</h1>
         <p>I am a Java full stack developer from Kerala,Trivandrum.Expertise is to create and website design,Frontend design,and many more..... </p>
        <div className='intro-action'>
          <div className='intro-resume'>My resume</div>

        </div>
      </div>
  

  )
}

export default Home