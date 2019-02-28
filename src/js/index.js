import {render} from 'react-dom'
import React from 'react'
//Components to render
import Main from './main.js'
import Component from './components/component.js'

render(
  <Main>
    <Component />
  </Main>,
  document.getElementById('content')
)
