import { SignOutButton, UserButton } from '@clerk/nextjs'

const dashboard = () => {
  return (
    <div>
      <UserButton />
      <p>hello</p>
      <SignOutButton />
    </div>
  )
}

export default dashboard
