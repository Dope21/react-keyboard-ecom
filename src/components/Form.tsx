import { ReactNode } from 'react'

type FormProps = {
  children: ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <div className="pt-16 px-4">
      <form
        className="w-full max-w-sm flex flex-col gap-8 mx-auto"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  )
}

export default Form
