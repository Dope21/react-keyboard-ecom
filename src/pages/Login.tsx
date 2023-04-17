import { BigInputBtn } from '../components/Button'
import { BigInput } from '../components/Input'
import Form from '../components/Form'
import { BigTitle } from '../components/Title'

const Login = () => {
  return (
    <Form>
      <BigTitle text="Login" />
      <BigInput type="email" name="email" />
      <BigInput type="password" name="password" />
      <BigInputBtn text="Sign In" />
      <div className="flex justify-between">
        <a href="/register">Create account</a>
        <a href="/">Forgot password?</a>
      </div>
    </Form>
  )
}

export default Login
