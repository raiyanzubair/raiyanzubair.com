import React from 'react'
import IntroBlock from '../components/IntroBlock'
import Link from 'gatsby-link'
import profile from '../profile.png' 
import resume from '../raiyan-zubair-resume.pdf'

const About = () => (
  <div>
  	<IntroBlock title="Raiyan Zubair" content="(Ray)" color="#C90016"/>
	  <div className="wot"
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '2rem 1rem',
      }}
    >
    	<p style={{fontSize:"30px"}}>About Me</p>
      <hr/>
      <div style={{display:"flex"}}>
        <div style={{float:"left", width:"70%", padding: "0 1rem 0 0"}}>
        <p>Hi there, I'm Ray and I've currently just finished my second year of a Bachelor of Computer Science at UNSW. I have previously completed a Bachelor of Medical Science (Honours) majoring in Physiology and Pharmacology and would love to pursue a line of work combining both technology and biological sciences.</p>
        <p>I'm a firm believer in being a jack of all trades and having a diverse portfolio of skills to allow you to tackle any job at hand. In my spare time I have dabbled in front-end technologies to complement the data structures, algorithms, and foundations of computing that I learn of at university, and through this found my passion and goal of working in full-stack development.</p>
        <div style={{display:"flex"}}>
          <div style={{float:"left", width:"40%"}}>
          <p style={{fontSize:"20px"}}>Skills</p>
            <ul>
              <li>JavaScript with ES6+</li>
              <li>React and Redux</li>
              <li>Google Firebase</li>
              <li>Node.js and Express</li>
              <li>Java, C++, Perl, Python, AVR Assembly, HTML/CSS</li>
            </ul>
          </div>
          <div style={{float:"left", width:"60%"}}>
            <p style={{fontSize:"20px"}}>Key Classes</p>
              <ul>
                <li>Object Oriented Design</li>
                <li>Extended Algorithms & Programming Techniques</li>
                <li>Computer Networks and Applications</li>
                <li>Advanced C++ Programming</li>
                <li>Human Computer Interaction and Design</li>
              </ul>
          </div>
        </div>
        </div>
        <div style={{float:"left", width:"30%", display: "block", padding: "0rem"}}>
          <img style={{margin:0}}src={profile} />
          <a href="https://github.com/raiyanzubair/">
            <div style={{margin:"1rem", borderWidth: "1px", borderStyle:"solid", textAlign:"center"}}>View my GitHub</div>
          </a>
          <a href={resume}>
            <div style={{margin:"1rem", borderWidth: "1px", borderStyle:"solid", textAlign:"center"}}>Download my Resume</div>
          </a>  
        </div>
      </div>        
	  </div>
  </div>
)

export default About
