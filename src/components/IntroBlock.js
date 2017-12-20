import React from 'react' 

const titleFont = {
	color: "white",
	fontSize: "4rem",
  fontWeight: 400,
  textTransform: "none",
}

const contentFont = {
	color: "white",
	maxWidth: "600px",
	fontSize: "24px",
}

const IntroBlock = ({title, content, color}) => (
	<div style={{backgroundColor: color, padding: "3rem"}}>
		<div style={{
        margin: 'auto auto',
        maxWidth: 1000,
        padding: '3rem 1rem',
      }}>
			<h1 style={titleFont}>{title}</h1>
			<p style={contentFont}>{content}</p>
		</div>			
	</div>
)

export default IntroBlock