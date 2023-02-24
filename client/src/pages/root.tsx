import React from 'react'
import SignUp from '../components/signup'

export const test = 'test'

const Root = () => {
  return (
    <>
      <SignUp />
      <form>
        <label>
          Veuillez saisir votre email
          <input type="email" placeholder="example@hotmail.fr" required />
        </label>
        <label>
          Saisissez votre mot de passe
          <input type="password" placeholder="Azerty123$" required />
        </label>
        <button>Se connecter</button>
      </form>
    </>
  )
}

export default Root
