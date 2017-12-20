import React from 'react'
import Link from 'gatsby-link'

class NavLink extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false
		}
	}

	toggleHover() {
		this.setState({hover: !this.state.hover})
	}

	render() {
		let style={
		  float: this.props.float,
		  color: 'white',
		  textDecoration: this.state.hover ? 'underline' : 'none',
		  padding: "0px 10px",
		}

		return(
			<Link style={style}to={this.props.to} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
				{this.props.text}
			</Link>		
		)	
	}
}

export default NavLink