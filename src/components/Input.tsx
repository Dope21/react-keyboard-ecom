type BigProps = {
  type: string
  name: string
}

type NoLabelProps = {
  type: string
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

type OptionProps = {
  name: string
  placeholder: string
  options?: {
    option: string | number
    value: string | number
  }
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

type CheckBoxProps = {
  label: string
}

export const BigInput = ({ type, name }: BigProps) => {
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

export const NoLabelInput = ({
  type,
  name,
  placeholder,
  onChange,
  value
}: NoLabelProps) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="hidden">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-slate-200 p-4 w-full rounded-lg"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export const OptionInput = ({
  name,
  options,
  placeholder,
  value,
  onChange
}: OptionProps) => {
  return (
    <div className="mb-2">
      <select
        name={name}
        id={name}
        className="visible border border-slate-200 p-4 w-full rounded-lg"
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        <option value="1">aslskdf1</option>
        <option value="2">aslskdf2</option>
        <option value="3">aslskdf3</option>
      </select>
    </div>
  )
}

export const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-blue-100 border-blue-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600"
        />
        <label htmlFor="default-checkbox" className="ml-2">
          {label}
        </label>
      </div>
    </div>
  )
}
