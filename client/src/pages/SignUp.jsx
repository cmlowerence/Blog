import { Link } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}

        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-wite">
              The
            </span>
            Unbeatables
          </Link>
          <p className="text-sm mt-5">
            Join us on Clash of Clans in a delightful journey of clashing. Sign-up in our blog page via email or with google
          </p>
        </div>

        {/* Right */}

        <div className="flex-1">
          <div className="">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput
                type="text"
                placeholder="Username"
                id="username" />
              </div>
              
              <div>
                <Label value="Your email" />
                <TextInput
                type="text"
                placeholder="thanos@example.com"
                id="email" />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                type="text"
                placeholder="Password"
                id="password" />
              </div>

              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sing In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
