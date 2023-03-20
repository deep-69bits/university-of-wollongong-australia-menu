import React,{useState,useEffect} from 'react'
import {app2} from '../components/Firebase'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router'

const adminsignin = () => {

    const auth = getAuth(app2);
    const router = useRouter()
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [load,setLoad]=useState(true)

    const signout = () => {
        signOut(auth);
        router.push('/')
    };

    const signin=()=>{
        if(email==='admin@gmail.com' && password==='123456'){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push('/adminconsole')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
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
          router.push('/home')
        } else {
        }
      });
     },[])
   return (
    <div>
    <div>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div
        className="w-full m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
      >
        <div className="lg:w-1/2 dm:w-full sm:p-12">
          <div>
            <img src="https://uowplaybook.s3-ap-southeast-2.amazonaws.com/logo/logo-secondary.png" className="w-56 mx-auto"/>
          </div>
          <div className="  flex flex-col items-center">

            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <h1 className='text-3xl mb-10  text-[#0e0a40]'>Sign In as Admin</h1>
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
                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
                  <span className="ml-3" onClick={signin} >
                     Sign In as admin
                  </span>
                </button>
                <div className="my-12 border-b text-center">
                  <div
                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                  >
                    You can sign if admin have given you permission
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-logo"
          ></div>
        </div>
      </div>
      <div className="REMOVE-THIS-ELEMENT-IF-YOU-ARE-USING-THIS-PAGE hidden treact-popup fixed inset-0  items-center justify-center">
        <div className="max-w-lg p-8 sm:pb-4 bg-white rounded shadow-lg text-center sm:text-left">

          <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center">
            <div className="bg-green-200 p-2 rounded-full flex items-center mb-4 sm:mb-0 sm:mr-2">
              <svg className="text-green-800 inline-block w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            </div>
            Free TailwindCSS Component Kit!
          </h3>
          <p>I recently released Treact, a <span className="font-bold">free</span> TailwindCSS Component Kit built with React.</p>
          <p className="mt-2">It has 52 different UI components, 7 landing pages, and 8 inner pages prebuilt. And they are customizable!</p>
          <div className="mt-8 pt-8 sm:pt-4 border-t -mx-8 px-8 flex flex-col sm:flex-row justify-end leading-relaxed">
            <button className="close-treact-popup px-8 py-3 sm:py-2 rounded border border-gray-400 hover:bg-gray-200 transition duration-300">Close</button>
            <a className="font-bold mt-4 sm:mt-0 sm:ml-4 px-8 py-3 sm:py-2 rounded bg-purple-700 text-gray-100 hover:bg-purple-900 transition duration-300 text-center" href="https://treact.owaiskhan.me" target="_blank">See Treact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default adminsignin
