type InputBtnProps = {
  text: string
}

export const InputBtn = ({ text }: InputBtnProps) => {
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
