import { InputBtn } from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import { FormTitle } from '../components/Title'

const Login = () => {
  return (
    <Form>
      <FormTitle text="Login" />
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <InputBtn text="Sign In" />
      <div className="flex justify-between">
        <a href="/register">Create account</a>
        <a href="/">Forgot password?</a>
      </div>
    </Form>
  )
}

export default Login
