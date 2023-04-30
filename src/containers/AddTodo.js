import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form class="form-inline" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input class="form-control mb-2 mr-sm-2" ref={node => input = node} />
        <button type="submit" class="btn btn-primary mb-2">
          Добавить
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
