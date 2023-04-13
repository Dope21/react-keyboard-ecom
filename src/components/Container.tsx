import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <main className="mt-24 md:mt-36">
      <div className="px-4 md:px-10 mx-auto max-w-7xl">{children}</div>
    </main>
  )
}

export default Container
