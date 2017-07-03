import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Swagger Event</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Editor</IndexLink>
    {' · '}
    <Link to='/ui' activeClassName='page-layout__nav-item--active'>UI</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
