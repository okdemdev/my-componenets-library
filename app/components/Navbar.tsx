import Link from 'next/link'
import Buttons from './Buttons'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Link href="/home">
        <Logo />
      </Link>
      <Buttons />
    </nav>
  )
}

export default Navbar
