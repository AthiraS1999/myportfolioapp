import React from 'react'
import '../components/About.css'
import about_image from '../../src/components/profile.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className='about-section'>
       <div className='about-left'>
       <img src={about_image} alt=''/>
       </div>
       <div className='about-right'>
        <p>Hello! I’m a Java front-end developer passionate about crafting beautiful and intuitive user interfaces. Throughout my studies, I developed a strong foundation in devoloping and designing,that i’m eager to apply my knowledge in a professional setting</p>
        <p>I am a motivated Java front-end developer with a passion for creating visually appealing and user-friendly web applications.I thrive on creativity and problem-solving, and I love collaborating with others to bring ideas to life.</p>

        <p>As a continuous learner, I stay updated with industry trends and best practices, striving to enhance my skills and deliver high-quality results.As I embark on my career journey, I’m excited to take on new challenges and contribute to innovative projects. I’m looking forward to connecting with like-minded professionals and learning from industry leaders.</p>
        <p>Thank you for visiting my portfolio!</p>
       </div>
      </div>
    </div>
  )
}

export default About