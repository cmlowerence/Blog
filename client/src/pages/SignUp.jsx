import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false){
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok){
        navigate('/sign-in');
      }
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}

        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-wite">
              The
            </span>
            Unbeatables
          </Link>
          <p className="text-sm mt-5">
            Join us on Clash of Clans in a delightful journey of clashing.
            Sign-up in our blog page via email or with google
          </p>
        </div>

        {/* Right */}

        <div className="flex-1">
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your username" />
                <TextInput
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label value="Your email" />
                <TextInput
                  type="email"
                  placeholder="thanos@example.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                {
                loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className="pl-3">Loading...</span>
                  </>
                ) : "Sign Up"
              }
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sing In
              </Link>
            </div>

            {errorMessage && <Alert className="mt-5" color="failure">{errorMessage}</Alert>}
          </div>
        </div>
      </div>
    </div>
  );
}
