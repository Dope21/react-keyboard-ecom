import { BigInputBtn } from '../components/Button'
import { BigInput } from '../components/Input'
import Form from '../components/Form'
import { BigTitle } from '../components/Title'
import { useState, useCallback } from 'react'
import axios from 'axios'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const handleOnchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist()
      setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }))
    },
    []
  )
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/customer/sign_in/',
        data: inputs
      })
        .then(response => {
          if (response.status === 200) {
            const email = response.data.data
            localStorage.setItem('email', email)
            window.location.replace('/')
          }
        })
        .catch(error => {
          console.log(error.response.data.detail)
          alert(error.response.data.detail)
        })
    },
    [inputs]
  )
  return (
    <Form onSubmit={handleSubmit}>
      <BigTitle text="Login" />
      <BigInput
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleOnchange}
      />
      <BigInput
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleOnchange}
      />
      <BigInputBtn text="Sign In" />
      <div className="flex justify-between">
        <a href="/register">Create account</a>
        <a href="/">Forgot password?</a>
      </div>
    </Form>
  )
}

export default Login
