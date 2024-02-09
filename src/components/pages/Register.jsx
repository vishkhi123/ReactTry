import { useState } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../connection/user.services";

export default function Register() {

  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    age:"",
    city:"",
    pincode:""

  })

  const handelChange=(event,property)=>{
    setData({
      ...data,
      [property]:event.target.value
    })
  }

  const submitForm=(event)=>{
    event.preventDefault()
    console.log(data)
    userRegister(data)
    .then((userData)=>{
      console.log(userData)
      console.log("User Registered Successfully!!!")
    }).catch((error)=>{
      console.log(error)
    })

  }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="text-center text-3xl mt-0">Register here</div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6 order border-solid border-gray-500" 
            onSubmit={submitForm}
            >
            {/* User Name */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Enter Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   value={data.name}
                   onChange={(event)=>handelChange(event,'name')}

                  />
                </div>
              </div>

             {/* User Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Enter Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.email}
                   onChange={(event)=>handelChange(event,'email')}


                  />
                </div>
              </div>
                {/* User Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.password}
                   onChange={(event)=>handelChange(event,'password')}


                  />
                </div>
              </div>

              {/* User age */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Age
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="number"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.age}
                   onChange={(event)=>handelChange(event,'age')}


                  />
                </div>
              </div>

              {/* User City */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Enter City
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.city}
                   onChange={(event)=>handelChange(event,'city')}

                  />
                </div>
              </div>
              {/* User Pincode */}
            <div>
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Pincode
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="number"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data.pincode}
                   onChange={(event)=>handelChange(event,'pincode')}


                  />
                </div>
              </div>

              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already Register?{' '}
              <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               Login here
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  