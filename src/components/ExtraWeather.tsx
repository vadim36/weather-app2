import {FC, ReactNode, Ref, Fragment} from 'react'
import { Modal } from './UI/Modal'

interface ExtraWeatherProps {
  toggleModal: () => void,
  weatherData: IExtraWeather,
  modalRef: Ref<HTMLDialogElement>
}

export const ExtraWeather:FC<ExtraWeatherProps> = (props) => {
  return (
    <>
      <Modal toggleModal={props.toggleModal} ref={props.modalRef}>
        <dl>
          {Object.values(props.weatherData).map((weatherData: IExtraWeatherValue):ReactNode => {
            return <Fragment key={weatherData.title}>
              <dt>{weatherData.title}</dt>
              <dd>{weatherData.value}</dd>
            </Fragment>
          })}
        </dl>
      </Modal>
    </>
  )
}