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
    className='loginForm'
    >
        <label className='loginForm_label'>
          <span>Veuillez saisir votre email</span>
          <input 
          value={email}
          type="email" 
          placeholder="example@hotmail.fr" 
          required 
          onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label className='loginForm_label'>
          <span>Saisissez votre mot de passe</span>
          <input 
            value={password}
            type="password" 
            placeholder="Azerty123$" 
            required 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type='submit'>Connection<FaArrowRight style={{ marginLeft: '5px' }}/></button>
      </form>
  );
}

export default SignIn;
