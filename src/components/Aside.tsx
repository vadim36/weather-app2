import {FC} from 'react'

interface AsideProps {
  isShow: boolean
}

export const Aside:FC<AsideProps> = ({isShow}) => {
  return (
    <aside className='aria-hidden:hidden' aria-hidden={!isShow}>Aside</aside>
  )
}