import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.')
      return
    }
    navigate('/home')
  }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
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

      <label className="loginForm_label">Choisir votre mot de passe</label>
      <input
        value={password}
        type="password"
        placeholder="Azerty123$"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%&*+\-.\/=?@^_~])(?=.*[a-zA-Z]).{8,}"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="loginForm_password_rules">
        <span>Le mot de passe doit contenir</span>
        <ul>
          <li>Minimum 8 caractères</li>
          <li> Au moins une lettre minuscule</li>
          <li>Au moins une lettre majuscule</li>
          <li>Au moins un chiffre</li>
          <li>Au moins un caractère spécial</li>
        </ul>
      </div>

      <label className="loginForm_label">Confirmer le mot de passe</label>
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
        Inscription
        <FaArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </form>
  )
}

export default SignUp
