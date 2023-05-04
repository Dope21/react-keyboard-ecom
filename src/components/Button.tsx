type BtnTextProps = {
  text: string
}

export const BigInputBtn = ({ text }: BtnTextProps) => {
  return (
    <div>
      <input
        type="submit"
        value={text}
        className="w-full py-3 px-5 text-center bg-black text-white font-bold cursor-pointer"
      />
    </div>
  )
}

export const BlackBtn = ({ text }: BtnTextProps) => {
  return (
    <input
      className="font-semibold bg-black text-white px-6 py-4 rounded-md"
      value={text}
      type="submit"
    />
  )
}
