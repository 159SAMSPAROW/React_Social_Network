import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(email, password)
        navigate('/home')
      }}
    >
      <label>
        Veuillez saisir votre email
        <input
          value={email}
          type="email"
          placeholder="example@hotmail.fr"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Choisir votre mot de passe
        <input
          value={password}
          type="password"
          placeholder="Azerty123$"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>S'inscrire</button>
    </form>
  )
}

export default SignUp
