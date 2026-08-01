import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-2">
      <h1>404 | Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href={'/'} className="underline">Go back home</Link>
    </div>
  )
}

export default NotFound
