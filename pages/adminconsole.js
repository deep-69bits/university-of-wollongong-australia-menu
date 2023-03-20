import React,{useEffect} from 'react'
import {app} from '../components/Firebase'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router'
const adminconsole = () => {
    const auth = getAuth(app);
    const router = useRouter()
   
    const signout = () => {
        signOut(auth);
        router.push('/')
      };
useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            if(user.email==="admin@gmail.com"){
              router.push('/adminconsole')
              }
            else{
                router.push('/home')
            }
             } else {
              router.push('/')
          }
        });
  },[])
  return (
    <div>
    mkmwekf
      <br />

      <button onClick={signout}>signout</button>
    </div>
  )
}

export default adminconsole
