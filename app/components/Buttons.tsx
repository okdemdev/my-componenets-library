import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

const Buttons = () => {
  const { userId } = auth()
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      {!userId ? (
        <>
          <Link href="/sign-in">
            <button className="max-sm:w-full text-sm border border-orange-500 text-white bg-orange-500 p-[8px] px-6 rounded-md">
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="max-sm:w-full text-sm border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-[8px] px-6 rounded-md">
              Sign up
            </button>
          </Link>
        </>
      ) : (
        <Link href="/dashboard">
          <button className="max-sm:w-full text-sm border border-orange-500 text-white bg-orange-500 p-[8px] px-10 rounded-md">
            Dashboard
          </button>
        </Link>
      )}
    </div>
  )
}

export default Buttons
