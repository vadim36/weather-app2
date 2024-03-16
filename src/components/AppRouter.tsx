import {FC, ReactNode, createElement} from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../router'

export const AppRouter:FC = () => {
  return (
    <Routes>
      {routes.map(({title, element, path}: Route):ReactNode => {
        return (
          <Route 
            key={title}
            path={path}
            element={createElement(element)} 
          /> 
        )
      })}
    </Routes>
  )
}