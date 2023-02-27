import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
        id="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="loginForm_label">Choisir votre mot de passe</label>
      <input
        value={password}
        type="password"
        placeholder="Azerty123$"
        id="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="loginForm_label">Confirmer le mot de passe :</label>
      <input
        value={confirmPassword}
        type="password"
        placeholder="Azerty123$"
        id="confirmPassword"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit">
        S'inscrire
        <FaArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </form>
  )
}

export default SignUp
