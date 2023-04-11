import { ReactNode } from 'react'

type FormProps = {
  children: ReactNode
}

const Form = ({ children }: FormProps) => {
  return (
    <div className="pt-16 px-4">
      <form className="w-full max-w-sm flex flex-col gap-8 mx-auto">
        {children}
      </form>
    </div>
  )
}

export default Form
