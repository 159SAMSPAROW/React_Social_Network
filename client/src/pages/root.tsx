import { useState } from "react";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
import Logo from "../../src/assets/img/icon-left-font-monochrome-white.svg";

/** Détermine si le formulaire d'inscription ou de connexion doit être affiché.
 *  Les deux variables sont initialisées à false. */
const Root = () => {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const [displaySignIn, setDisplaySignIn] = useState(false);

  /** handleSignInClick est appelée lorsqu'un utilisateur clique sur le bouton "Connexion",
   *  elle modifie la variable d'état displaySignUp à false et la variable d'état displaySignIn
   *  à true pour afficher le formulaire de connexion. */
  const handleSignInClick = () => {
    setDisplaySignUp(false);
    setDisplaySignIn(true);
  };

  /** handleSignUpClick est appelée lorsqu'un utilisateur clique sur le bouton "Inscription",
   *  elle modifie la variable d'état displaySignUp à true et la variable d'état displaySignIn
   *  à false pour afficher le formulaire d'inscription. */
  const handleSignUpClick = () => {
    setDisplaySignUp(true);
    setDisplaySignIn(false);
  };

  return (
    <main className="root">
      <img src={Logo} alt="Logo groupomania" />
      <div className="connection_form_btn">
        <button id="signin" onClick={handleSignInClick}>
          Connexion
        </button>
        <br />
        <button id="signup" onClick={handleSignUpClick}>
          Inscription
        </button>
      </div>

      {/** Affichage conditionnel :
       * Affiche les formulaires de connexion ou d'inscription en fonction de l'état des variables d'état.
       *  Si displaySignUp est true, le formulaire d'inscription est affiché, et si displaySignIn est true,
       *  le formulaire de connexion est affiché. Sinon, les formulaires ne sont pas affichés. */}
      {displaySignUp && <SignUp />}
      {displaySignIn && <SignIn />}
    </main>
  );
};

export default Root;
