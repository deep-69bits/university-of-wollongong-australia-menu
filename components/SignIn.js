import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {app} from './Firebase'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
  
  
  const auth = getAuth(app);
  const router = useRouter()
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [load,setLoad]=useState(true)

  const signin=()=>{
    router.push('/Dashboard')
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast("Signed In");
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast("Incorrect Email or Password");
    });
  }

  const changeemail=(e)=>{
    setEmail(e.target.value)
   
    setLoad(!load)
  }
  const changepassword=(e)=>{
   setPassword(e.target.value)
   setLoad(!load)
 }
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.email)
      if(user.email==="admin@gmail.com"){
      router.push('/adminconsole')
      }
      else{
        router.push('/Dashboard')
      }
    } else {
    }
  });
 },[])

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    
        <div
          className="w-full m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
        <ToastContainer />
        <div className="flex-1  text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-logo"
        ></div>
      </div>
          <div className="lg:w-1/2 dm:w-full sm:p-12">
            <div>
              <img src="https://uowplaybook.s3-ap-southeast-2.amazonaws.com/logo/logo-secondary.png" className="w-96 mx-auto"/>
            </div>
            <div className="  flex flex-col items-center">

              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <h1 className='text-3xl mb-10  text-[#0e0a40]'>Sign In</h1>
                </div>

                <div className="mx-auto px-4 lg:w-2/3 sm:w-5/6">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={changeemail}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={changepassword}
                  />
                  <button onClick={signin}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-[200px] m-auto py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3" >
                      Sign In
                    </span>
                  </button>
                  <div className="my-12 border-b text-center">
                    <div
                      className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                    >
                      Don't have an account??  <Link className='text-[#0e0a40] font-bold' href={'/signup'}> Sign Up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
    </div>
  )
}

export default SignIn