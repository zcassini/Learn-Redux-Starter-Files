import React from 'react'

import {render } from 'react-dom'

// import css
import css from './styles/style.styl'

//import components
import Main from './componenets/Main'
import Single from './componenets/Single'
import PhotoGrid from './componenets/PhotoGrid.js'

// import react router deps
import  { Router, Route, IndexRoute, browserHistory } from 'react-router'

const router = (
  <Router history = { browserHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ PhotoGrid } />
      <Route path ='/view/:postId' component={ Single } />
    </Route>
  </Router>
  )
render(router, document.getElementById('root'))

