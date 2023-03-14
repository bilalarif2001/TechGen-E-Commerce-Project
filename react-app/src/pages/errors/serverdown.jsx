import React from 'react'
import Button from '../../components/button'
import {useNavigate } from 'react-router-dom'
function ServerDown() {
    const navigate=useNavigate();
  return (
    <div className="flex items-center h-full p-16"> 
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-700">
				<span>503</span>
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Service Unavailable.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">This could be due to temporarily overloading the server or maintenance of the server</p>
			<Button varient="cart" onClick={()=>{navigate('/home')}}>Back to homepage</Button>
		</div>
	</div>
</div>
  )
}

export default ServerDown