"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import TextField from "./TextField"
import { Link, useNavigate } from "react-router-dom"
import api from "../api/api"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"

const RegisterPage = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  })

  const registerHandler = async (data) => {
    setLoader(true)
    try {
      const { data: response } = await api.post("/api/auth/public/register", data)
      reset()
      navigate("/login")
      toast.success("Registration Successful!")
    } catch (error) {
      console.log(error)
      toast.error("Registration Failed!")
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="bg-white w-full rounded-2xl shadow-xl shadow-blue-100/50 py-8 px-6 border border-slate-100"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Create account</h1>
            <p className="text-slate-500">Join SnapLink to start shortening URLs</p>
          </div>

          <div className="space-y-5">
            <TextField
              label="Username"
              required
              id="username"
              type="text"
              message="Username is required"
              placeholder="Choose a username"
              register={register}
              errors={errors}
            />

            <TextField
              label="Email"
              required
              id="email"
              type="email"
              message="Email is required"
              placeholder="Enter your email"
              register={register}
              errors={errors}
            />

            <TextField
              label="Password"
              required
              id="password"
              type="password"
              message="Password is required"
              placeholder="Create a password (min. 6 characters)"
              register={register}
              min={6}
              errors={errors}
            />
          </div>

          <div className="mt-6">
            <button
              disabled={loader}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loader ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </div>

          <p className="text-center text-slate-600 mt-6">
            Already have an account?
            <Link className="font-medium text-blue-600 hover:text-blue-800 ml-1" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage

