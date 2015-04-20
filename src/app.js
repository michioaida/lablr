import styles from './styles/main.styl'
import Router from './router'

window.app = {
    init () {
        this.router = new Router();
        this.router.history.start();
    }
}

window.app.init();



/**
import React from 'react'
import styles from './styles/main.styl'




const Hello = React.createClass({
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
})

React.render(<Hello name="blahhk"/>, document.body);

/**
var React = require('react')

var Hello = React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>
    }
});

React.render(<Hello name="blahhk"/>, document.body);

**/