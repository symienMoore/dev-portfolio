import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import {auth} from '../../firebase'

const Navbar = () => {
const {currentUser} = auth
if(currentUser) {
    console.log(currentUser!.auth?.photoURL)
}
const [image, setImage] = useState<any>("")
const setPic = () => {
    setImage(currentUser?.photoURL)
}
console.log(image)
  return (
    <div className='shadow-md h-11'>
        <div className="flex-1 mt-5 ml-5">
            <Link href="/">
                <h1 className='text-orange-600 text-lg'>Symi.</h1>
            </Link>
            {currentUser &&
                <Image src={image} alt="" width={100} height={100} className="rounded-full px-3"/>
            }
        </div>
    </div>
  )
}

export default Navbar