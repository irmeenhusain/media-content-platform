import React, { useEffect } from 'react';
import {auth} from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signOut } from "firebase/auth";
import userImg from "../assets/user.svg"

function Header() {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate("/dashboard");
    }
  }, [user,loading]);

function logoutFnc(){
  try{
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("Logged Out Successfully!");
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
      toast.error(error.message);
    });
  }catch(e){
    toast.error(e.message);
  }
  
}

  return (
    <div className='bg-theme p-4 pl-6 pr-6 sticky top-0 left-0 flex justify-between items-center z-[50]'>
      <p className='text-white font-medium text-base m-0'>Media Content Platform</p>
      
      {user &&  (
        <div className='flex items-align-center gap-5'>
          <img src={user.photoURL ? user.photoURL :  userImg} style={{ borderRadius:"50%", height:"1.5rem", width:"1.5rem" }} />
        <p className='opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300' onClick={logoutFnc}>
          Logout
        </p>
        </div>
      )}
    </div>
  )
}

export default Header;