import {Children, ReactNode, forwardRef} from 'react'
import { Button } from './Button'

interface ModalProps {
  toggleModal: () => void,
  children: ReactNode
}

type Ref = HTMLDialogElement

export const Modal = forwardRef<Ref, ModalProps>((props, ref) => {
  return (
    <dialog ref={ref} className='open:flex flex-col w-64 h-48 p-3 rounded 
      backdrop:bg-black/50'
    >
      <section aria-label='modal content' className='flex-1'>
        {props.children}
      </section>
      <Button onClick={props.toggleModal}>Close</Button>
    </dialog> 
  )
})