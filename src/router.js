import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({
    routes: {
        '': 'public', //Root directory
        'repos': 'repos'
    },
    
    public () {
        React.render(<PublicPage/>, document.body)
    },
    
    repos () {
        React.render(<ReposPage/>, document.body)
    }
})