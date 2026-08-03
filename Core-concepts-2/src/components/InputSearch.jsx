'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const InputSearch = () => {
const router = useRouter();
const params = useSearchParams();

const handleSubmit = (e) => {
  e.preventDefault();
  const searchValue = e.target.search.value;
  const newParams = new URLSearchParams(params.toString());
  newParams.set('search', searchValue);
    router.push(`?${newParams.toString()}`)
}

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input name="search" type="text"
        className='px-1 py-3 border-2 w-3xs md:w-lg lg:w-2xl' 
        placeholder="Enter Food Name" />
        <button type="submit" className='bg-blue-500 text-white px-1 py-3 rounded'>Search</button>
      </form>
    </div>
  )
}

export default InputSearch
