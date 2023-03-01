import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate('/home')
      }}
      className="loginForm"
    >
      <label className="loginForm_label">Veuillez saisir votre email</label>
      <input
        value={email}
        type="email"
        placeholder="example@hotmail.fr"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="loginForm_label">Saisissez votre mot de passe</label>
      <input
        value={password}
        type="password"
        placeholder="Azerty123$"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%&*+\-.\/=?@^_~])(?=.*[a-zA-Z]).{8,}"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='loginForm_password_rules'>
      <span>
        Le mot de passe doit contenir    
      </span>
      <ul>
        <li>Minimum 8 caractères</li>
        <li> Au moins une lettre minuscule</li>
        <li>Au moins une lettre majuscule</li>
        <li>Au moins un chiffre</li>
        <li>Au moins un caractère spécial</li>
      </ul>
      </div>
      <button type="submit">
        Connection
        <FaArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </form>
  )
}

export default SignIn
