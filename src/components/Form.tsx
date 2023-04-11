import { ReactNode } from 'react'

type FormProps = {
  children: ReactNode
}

const Form = ({ children }: FormProps) => {
  return (
    <div className="grid justify-center pt-16">
      <form className="w-96 flex flex-col gap-8">{children}</form>
    </div>
  )
}

export default Form
