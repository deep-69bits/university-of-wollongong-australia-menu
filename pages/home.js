import React,{useEffect} from 'react'
import {app} from '../components/Firebase'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router'
const home = () => {
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
             } else {
              router.push('/')
          }
        });
       },[])
  return (
    <div>
       ewmf 
       <button onClick={signout}>signout</button>
    </div>
  )
}

export default home
