type TitleText = {
  text: string
}

export const FormTitle = ({ text }: TitleText) => {
  return <h2 className="text-3xl font-bold">{text}</h2>
}
