import Form from '../components/Form'
import { FormTitle } from '../components/Title'
import Input from '../components/Input'
import { InputBtn } from '../components/Button'

const CreateAccount = () => {
  return (
    <Form>
      <FormTitle text="Create Account" />
      <Input type="text" name="firstname" />
      <Input type="text" name="lastname" />
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <InputBtn text="Create" />
    </Form>
  )
}

export default CreateAccount
