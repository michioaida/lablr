import Model from 'ampersand-model'
import Repos from './repos'
import githubMixin from '../helpers/github-api-mixin'


export default Model.extend(githubMixin, {
    url: 'https://api.github.com/user',
    
    collections: {
        repos: Repos
    },

    initialize () {
        const token = window.localStorage.token
        
        if (token) {
            this.token = token
        }
        
        this.on('change:token', () => {
            window.localStorage.token = this.token
        })
        
        this.on('change:isLoggedIn', this.fetchAll)
    },

    props: {
        token: 'string',
        login: 'string'
    },
    
    derived: { // missing backbone
        isLoggedIn: { //getter on an object
            deps: ['token'], 
            fn () {
                return !!this.token
            }
        }
    },
    
    fetchAll () {
        if (this.isLoggedIn) {        
            this.fetch();
            this.repos.fetch();
        }
    },
    
})