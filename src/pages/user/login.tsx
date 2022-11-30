import React, { useRef, useState } from 'react'
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from 'react-hook-form'
import { auth } from '../../../firebase';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [user, setUser] = useState<any>()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [image, setImage] = useState<boolean>(false)
  const [profilePic, setProfilePic] = useState<any>()
  const a = auth
  const storage = getStorage();
  const fileRef = useRef(null)

  const login = async (data: any) => {
    console.log(data)
    setEmail(data.email)
    setPassword(data.password)
    signInWithEmailAndPassword(a, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if(user.photoURL == null) {
          setImage(true)
        }
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const setProfile = (e) => {
    const rd = new FileReader()
    rd.readAsDataURL(e.target.files[0])
    rd.onload = (readerEvent) => {
      console.log(readerEvent?.target?.result)
      setProfilePic(readerEvent?.target?.result)
    }
    console.log(profilePic)
  }

  const addProfilePic = async (e) => {
    console.log(user)
    const rd = new FileReader()
    rd.readAsDataURL(e.target.files[0])
    rd.onload = (readerEvent) => {
      // console.log(readerEvent?.target?.result)
      setProfilePic(readerEvent?.target?.result)
      console.log(profilePic)
    }
    
  }

  const addImageToProfile = async () => {
    const imageRef = ref(storage, `profile_images/${user.uid}/p`)
        console.log(imageRef, 'ref')
        await uploadString(imageRef, profilePic, 'data_url').then(async () => {
        const downloadurl = await getDownloadURL(imageRef)
        let userNow = auth.currentUser
        updateProfile(userNow!, {
          photoURL: downloadurl
        })
        setUser(userNow)
        console.log(user)
    });
    setProfilePic(null)
  }


  return (
    <div>
        <form onSubmit={handleSubmit(login)} className='flex flex-col w-50'>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder='email' {...register("email")}/>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='******' {...register("password")}/>
            <button type="submit">Login</button>
        </form>
        {image &&
        <div>
          <h1>Add a profile image</h1>
          <form onSubmit={handleSubmit(addImageToProfile)}>
            <input type="file" id="" ref={fileRef} onChange={setProfile}/>
            <button type='submit'>upload</button>
          </form>
        </div>
        }
    </div>
  )
}

export default Login