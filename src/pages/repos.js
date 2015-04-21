import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandReactMixin],

  render () {
    const {repos} = this.props; //Ampersand collection
  
    return (
      <div className='container'>
        <h1>Repos</h1>
        <ul>
            {repos.map((repo) =>   //mapping repos elements in an array
                <li key={repo.id}>
                    <a href={'/repos/' + repo.full_name}>{repo.full_name}</a>  
                </li>
            )}
        </ul>
      </div>
    )
  }
})