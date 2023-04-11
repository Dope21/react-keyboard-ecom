type InputProps = {
  type: string
  name: string
}

const Input = ({ type, name }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-bold tracking-widest uppercase text-xs mb-2"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full border px-3 py-2"
      />
    </div>
  )
}

export default Input
