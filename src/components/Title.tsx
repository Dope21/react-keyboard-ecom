type TitleText = {
  text: string
}

export const BigTitle = ({ text }: TitleText) => {
  return <h2 className="text-3xl font-bold">{text}</h2>
}

export const FormTitle = ({ text }: TitleText) => {
  return <h3 className="mb-5 text-lg">{text}</h3>
}
