import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux'
import * as actionCreators from '../actions/actionCreator'
import Main from './Main'

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
