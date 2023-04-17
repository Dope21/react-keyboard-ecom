import Form from '../components/Form'
import { BigTitle } from '../components/Title'
import { BigInput } from '../components/Input'
import { BigInputBtn } from '../components/Button'

const CreateAccount = () => {
  return (
    <Form>
      <BigTitle text="Create Account" />
      <BigInput type="text" name="firstname" />
      <BigInput type="text" name="lastname" />
      <BigInput type="email" name="email" />
      <BigInput type="password" name="password" />
      <BigInputBtn text="Create" />
    </Form>
  )
}

export default CreateAccount
