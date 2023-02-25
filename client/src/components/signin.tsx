import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form  
      onSubmit={(e) => {
        e.preventDefault()   
        navigate('/home')
    }}>
        <label>
          Veuillez saisir votre email
          <input 
          value={email}
          type="email" 
          placeholder="example@hotmail.fr" 
          required 
          onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Saisissez votre mot de passe
          <input 
            value={password}
            type="password" 
            placeholder="Azerty123$" 
            required 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Se connecter</button>
      </form>
  );
}

export default SignIn;
