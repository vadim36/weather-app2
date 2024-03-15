import {FC} from 'react'

export const Logo:FC = () => {
  return (
    <figure className='flex items-center'>
      <img src="../../public/weather.svg" alt="weather app icon" className='size-16' />
      <figcaption className='text-3xl font-mono font-semibold'>Weather</figcaption>
    </figure>
  )
}
