import { BlackBtn } from '../components/Button'
import Form from '../components/Form'

const Profile = () => {
  const token = localStorage.getItem('email')
  if (!token) {
    window.location.replace('/login')
  }
  console.log(token)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.removeItem('email')
    window.location.replace('/login')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="absolute inset-0 flex justify-center items-center">
        <BlackBtn text="Logout" />
      </div>
    </Form>
  )
}

export default Profile
