import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Logo from '../../public/img/icon-left-font-monochrome-white.svg'


export const test = 'test'

const Root = () => {
  return (
    <main>
      <img src={Logo} alt='Logo groupomania'/>
      <SignUp />
      <SignIn />
    </main>
  )
}

export default Root
