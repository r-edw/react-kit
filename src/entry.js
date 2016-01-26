import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route } from 'react-router'

//Components to render
import Main from './js/main.js'
import Component from './js/components/component.js'

main()

function main() {
    ReactDOM.render(
      <Router>
          <Route path="/" component={Main} />
          <Route path="/component" component={Component} />
      </Router>,
    document.getElementById('content'))
}
