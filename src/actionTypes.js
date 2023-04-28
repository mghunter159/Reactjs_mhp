import {ADD_TODO, REMOVE_TODO} from '../actionTypes'
  

//////// ACTION
  const ADD_TODO = 'ADD_TODO'
  {
    type: ADD_TODO,
    text: 'Meow Meow Meow'
  }

  {
    type: TOOGLE_TODO,
    index: 5
  }

  {
    type:SET_VISIBILY_FILTER,
    filter: SHOW_COMPLETED
  }
  //////// ACTION CREATE

boundAddTodo(text)

//Типы экшенов
export const ADD_TODO = 'ADD_TODO'
export const TOOGLE_TODO = 'TOOGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


// Другие константы
export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Генераторы экшенов

export function addTodo(text) {
    return{type: ADD_TODO, text}
}

export function addTodo(text) {
    return{type: TOOGLE_TODO, index}
}

export function addTodo(text) {
    return{type: SET_VISIBILITY_FILTER, filter}
}