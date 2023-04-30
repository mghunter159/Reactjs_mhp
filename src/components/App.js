import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Nav />
    <div className='container' style={{marginTop: 30 + 'px'}}>
      <AddTodo />
      <br />
      <Footer />
      <br />
      <VisibleTodoList />
    </div>
  </div>
)

export default App
