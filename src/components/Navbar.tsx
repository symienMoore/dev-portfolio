import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex-1">
            <Link href="/">
                <h1>Symi.</h1>
            </Link>
        </div>
    </div>
  )
}

export default Navbar