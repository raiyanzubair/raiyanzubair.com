import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavLink from '../components/NavLink'

const Header = () => (
  <div
    style={{
      background: '#333',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '1rem 1rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <NavLink to="/" text="RAIYAN ZUBAIR"/>
        <NavLink to="/blog" float="right" text="BLOG"/>
        <NavLink to="/about" float="right" text="ABOUT"/>
      </h4>
    </div>
  </div>
)

const Footer = () => (
  <div
    style={{
      background: '#333',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '1rem 1rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <NavLink to="/" text="RAIYAN ZUBAIR"/>
        <NavLink float="right" to="/about" text="ABOUT"/>
      </h4>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Raiyan Zubair"
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
