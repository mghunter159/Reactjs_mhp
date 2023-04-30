import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Показать: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Все
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Активные
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Сделанные
    </FilterLink>
  </div>
)

export default Footer
