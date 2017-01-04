import React from 'react'

import {render } from 'react-dom'

// import css
import css from './styles/style.styl'

//import components
import App from './componenets/App'
import Single from './componenets/Single'
import PhotoGrid from './componenets/PhotoGrid.js'

// import react router deps
import  { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={ store }>
    <Router history = { history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ PhotoGrid } />
        <Route path ='/view/:postId' component={ Single } />
      </Route>
    </Router>
  </Provider>
  )
render(router, document.getElementById('root'))

