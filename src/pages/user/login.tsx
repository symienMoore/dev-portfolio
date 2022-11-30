import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form'
import { auth } from '../../../firebase';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [user, setUser] = useState<object>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState<string>("")
  const a = auth

  const login = (data) => {
    console.log(data)
    setEmail(data.email)
    setPassword(data.password)
    signInWithEmailAndPassword(a, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        console.log(user.photoURL)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
        <form onSubmit={handleSubmit(login)} className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder='email' {...register("email")}/>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='******' {...register("password")}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login