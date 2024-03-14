import {FC} from 'react'

interface DayInfoProps {
  info: IDayInfo
}

export const DayInfo:FC<DayInfoProps> = ({info}) => {
  return (
    <section aria-label='Day and night weather info' className='bg-blue-700 text-white
      flex-[.5] p-2 flex flex-col pt-5'>
      <h2 className='font-mono text-4xl font-semibold'>Today</h2>
      <div className='flex gap-6 mt-5'>
        <div className='bg-blue-500 flex-[.5] rounded-lg flex flex-col items-center h-32
          justify-center'
        >
          <strong className='text-2xl font-semibold'>Sunrise</strong>
          <h3 className='text-3xl font-bold'>{info.sunrise}</h3>
        </div>
        <div className='bg-blue-800 flex-[.5] rounded-lg flex flex-col items-center h-32
          justify-center'
        >
          <strong className='text-2xl font-semibold'>Sunset</strong>
          <h3 className='text-3xl font-bold'>{info.sunset}</h3>
        </div>
      </div>
    </section>
  )
}