import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

/** SignIn rend un formulaire de connexion à un site web.
 *  Le formulaire de connexion a deux champs: email et mot de passe,
 *  qui sont stockés dans les états locaux email et password à l'aide de useState() */

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

/** hook useNavigate() de react-router-dom pour naviguer
 *  vers la page d'accueil du site Web lorsque
 *  l'utilisateur soumet le formulaire de connexion */
  const navigate = useNavigate()

  return (

  /** onSubmit sur le formulaire permet de gérer la validation
   *  du formulaire avant la soumission en utilisant les attributs
   *  "required" et "pattern" des champs de saisie. De cette manière,
   *  si l'utilisateur remplit le formulaire et appuie sur la touche "Entrée",
   *  l'événement sera toujours déclenché. */
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate('/home')
      }}
      className="loginForm"
    >
      <label htmlFor='email' className="loginForm_label">Veuillez saisir votre email</label>
      <input
        id='email'
        value={email}
        type="email"
        placeholder="example@hotmail.fr"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor='password' className="loginForm_label">Saisissez votre mot de passe</label>
      <input
        id='password'
        value={password}
        type="password"
        placeholder="Azerty123$"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%&*+\-.\/=?@^_~])(?=.*[a-zA-Z]).{8,}"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Connection
        <FaArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </form>
  )
}

export default SignIn
