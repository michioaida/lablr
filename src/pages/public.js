import React from 'react'
import InternalNav from '../components/internal-nav.js'


export default React.createClass({
    onClick (event) {
        const pathname = LocalLinks.getLocalPathname(event)
        
        if (pathname) {
            app.router.history.navigate(pathname)
        }
        
        event.preventDefault()
    },
    render() {
        return (
            <InternalNav>
                <div className='container' onClick={this.onClick}>
                  <header role='banner'>
                    <h1>Cool things</h1>
                  </header>
                  <div>
                    <p>We label stuff for you, because, we can&trade;</p>
                    <a href='/repos' className='button button-large'>
                      <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
                    </a>
                  </div>
                </div>
            </InternalNav>
        )
    }
})