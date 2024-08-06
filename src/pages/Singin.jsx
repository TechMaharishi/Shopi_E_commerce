import { SignIn } from "@clerk/clerk-react"
const Signin = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <SignIn path="/sign-in" signUpUrl="sign-up" />

    </div>
  )
}

export default Signin