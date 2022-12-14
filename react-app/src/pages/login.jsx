import React from 'react'
import Input from '../components/input';
import Button from '../components/button';

function Login() {
  return (
    <div class="container py-16 mx-auto">
    <div class="max-w-lg mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">
            LOGIN
        </h2>
        <p class="text-gray-600 mb-6 text-sm">
            Login if you are a returning customer
        </p>
        <form action="">
            <div class="space-y-4">
                <div>
                    <label class="text-gray-600 mb-2 block">
                        Email Address <span class="text-rose-500">*</span>
                    </label>
                    <Input varient="login" placeholder="Enter your Email Address" />
                </div>
                <div>
                    <label class="text-gray-600 mb-2 block">Password <span class="text-rose-500">*</span></label>
                    <Input varient="login" placeholder="Enter your Password"/>
                </div>
            </div>
            <div class="mt-16">
                <Button varient="card">Login</Button>
            </div>
        </form>

        <p class="mt-4 text-gray-600 text-center">
            Don't have an account? <a href="register.html" class="text-primary hover:text-rose-500">Register Now
            </a>
        </p>
    </div>
</div>
  )
}

export default Login;