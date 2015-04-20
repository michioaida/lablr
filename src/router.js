import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({
    renderPage (Page, opts) {
        const Main = (
            <Layout>
                <Page/>
            </Layout>
        )
        
        React.render(Main, document.body);
    },
    
    routes: {
        '': 'public', //Root directory
        'repos': 'repos'
    },
    
    public () {
        this.renderPage(PublicPage)
    },
    
    repos () {
        this.renderPage(ReposPage)
    }
})