import {forwardRef, ReactNode} from 'react'
import { Button } from './Button'

interface ModalProps {
  toggleModal: () => void,
  children: ReactNode
}

type Ref = HTMLDialogElement

export const Modal = forwardRef<Ref, ModalProps>((props, ref) => {
  return (
    <dialog ref={ref} className='w-80 max-h-96 open:flex flex-col rounded p-2 
      backdrop:bg-black/50'
    >
      <section aria-label="Modal content" className='flex-1'>
        {props.children}
      </section>
      <Button onClick={props.toggleModal} className='self-center w-32'>Close</Button>
    </dialog>
  )
})