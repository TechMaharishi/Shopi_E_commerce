import { SignUp } from "@clerk/clerk-react"

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  )
}

export default Signup