import React from 'react'
import Link from 'gatsby-link'
import IntroBlock from '../components/IntroBlock'
import rocketvault from '../rocketvault.png'
import occupo from '../occupo.png'
import socialising from '../socialising.png'


const IndexPage = () => (
  <div>
  	<IntroBlock title="Hi there!" color="#0A6187" content="I'm Raiyan, a computer science student interested in all aspects of creating great software."/>
	  <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '2rem 1rem',
      }}
    >
	    <p style={{fontSize:"30px"}}>Featured Side Projects</p>
      <div >  
      	<div>
	        <div>
	        <hr/>
	        <h1>Rocketvault</h1>
	         <img src={rocketvault}/>
	        </div>
	        <p>
	        Cryptocurrency portfolio and investment platform that I am building for a part-time job, using React, Redux, and Firebase.<br/>
	        Still a work in progress however it is coming along nicely and my proudest achievement.<br/>
	        Stay tuned for more!
	        </p>
	        <hr/>
	      </div>
	      <div>
	        <div>
		        <h1>Occupo</h1>
		        <img src={occupo}/>
	        </div>
	        <p>
	        A job finding web app for students/developers who want to find work thats the right fit for them.<br/>
	        Just plug in your GitHub, BitBucket, and/or Freelancer account names and using their APIs it looks at any work you've done,<br/>
	        finds your relevant skills, and from there allows you to search for jobs on the Freelancer market that suit you.<br/>
	        Built for the Freelancer API Hackathon using React<br/>
	        </p>
	        <hr/>
	      </div>
	      <div>
	        <div>
	        	<h1>Socialising Social Work</h1>
	        	<img src={socialising}/>
	        </div>
	        <p>
	        A rough protototype of a virtual reality game for disability support workers built using React VR.<br/>
	        Has the basis for multiple levels and a scoring system. <br/>
	        Won third place at the Immersive Technology Hackathon for Disability Support by House with No Steps.<br/>
	        Try it out for yourself <a href="http://www.agile-emu.surge.sh">here</a>.
	        </p>
	        <hr/>
	      </div>
	      <div>
	        <h1>raiyanzubair.com</h1>
	        <p>This site! My personal website, portfolio, and blog created using Gatsby and React JavaScript frameworks and GraphQL.</p>
	        <hr/>
	      </div>
      </div>
	  </div>  
  </div>
)

export default IndexPage


     //    <div style={{display: "inline-flex", padding: '0 2rem 0 0'}}>
     //      	<p>Rocketvault</p>
     //    </div>
     //    <div style={{display: "inline-flex", padding: '0 2rem 0 0'}}>
     //      	Occupo
     //    </div>
     //    <div style={{display: "inline-flex", padding: '0 2rem 0 0 '}}>
					// Disability Support VR Game
     //    </div>
     //    <div style={{display: "inline-flex", padding: '0 2rem 0 0 '}}>
     //      raiyanzubair.com
     //    </div>