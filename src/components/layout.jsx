import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Grid, Turn } from './Grid/Grid';
import '../styles/reset.css';
import '../styles/layout.scss';

const shortcodes = { Grid, Turn };

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <MDXProvider components={shortcodes}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </MDXProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
