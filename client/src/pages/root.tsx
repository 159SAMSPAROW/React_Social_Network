import React, { useState } from 'react'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Logo from '../../src/assets/img/icon-left-font-monochrome-white.svg'

export const test = 'test'

const Root = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup)
  const [signInModal, setSignInModal] = useState(props.signin)

  //fonction pour gérer les modals
  const handleModals = (e) => {
    if (e.target.id === 'signin') {
      setSignUpModal(false)
      setSignInModal(true)
    } else if (e.target.id === 'signup') {
      setSignUpModal(true)
      setSignInModal(false)
    }
  }
  return (
    <main>
      <img src={Logo} alt="Logo groupomania" />
      <div className="connection_form_btn">
        <button
          id="signin"
          onClick={handleModals}
          className={signInModal ? 'connection_form_btn_signin' : null}
        >
          Connexion
        </button>
        <br />
        <button
          id="signup"
          onClick={handleModals}
          className={signUpModal ? 'connection_form_btn_signup' : null}
        >
          Inscription
        </button>
      </div>
      {signUpModal && <SignUp />}
      {signInModal && <SignIn />}
    </main>
  )
}

export default Root
