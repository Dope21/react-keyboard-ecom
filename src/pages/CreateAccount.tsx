import Form from '../components/Form'
import { BigTitle } from '../components/Title'
import { BigInput } from '../components/Input'
import { BigInputBtn } from '../components/Button'
import { useState, useCallback } from 'react'
import axios from 'axios'

const CreateAccount = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
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
        url: 'http://127.0.0.1:8000/customer/sign_up/',
        data: inputs
      })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data)
            window.location.replace('/login')
          }
        })
        .catch(error => {
          console.log(error.response.data.detail)
        })
    },
    [inputs]
  )
  return (
    <Form onSubmit={handleSubmit}>
      <BigTitle text="Create Account" />
      <BigInput
        type="text"
        name="firstname"
        value={inputs.firstname}
        onChange={handleOnchange}
      />
      <BigInput
        type="text"
        name="lastname"
        value={inputs.lastname}
        onChange={handleOnchange}
      />
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
      <BigInputBtn text="Create" />
    </Form>
  )
}

export default CreateAccount
