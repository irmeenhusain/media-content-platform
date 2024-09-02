import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast} from 'react-toastify';
import {auth,provider} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';



function AdminLogin(){
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [confirmPassword,setConfirmPassword] =useState("");
  const [loading, setLoading] = useState(false);
//  const [loginForm, setLoginForm]= useState(false);
  const navigate= useNavigate();

  // function signupWithEmail(){
  //   setLoading(true);
  // //Authenticate the user i.e. create a new account using email
  //   if(name!="" && email!="" && password!="" && confirmPassword!=""){
  //     if(password===confirmPassword){
  //       createUserWithEmailAndPassword(auth, email, password)
  //      .then((userCredential) => {
  //         // Signed up 
  //         const user = userCredential.user;
  //         console.log("User>>", user);
  //         toast.success("User Created!")
  //         // ...
  //         setLoading(false);
  //         setName("");
  //         setEmail("");
  //         setPassword("");
  //         setConfirmPassword("");
  //       createDoc(user);
  //         navigate("/admin/dashboard");
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         toast.error(errorMessage);
  //         // ..
  //         setLoading(false);
  //       });
  //     }
  //     else{
  //       toast.error("Password and Confirm Password don't match");
  //       setLoading(false);
  //     }
  //   }  
  //   else{
  //     toast.error("All fields are mandatory!");
  //     setLoading(false);
  //  }

  // }

  function loginUsingEmail(){
    setLoading(true);
    if(email!="" && password!=""){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user>>", user);
        toast.success("User Logged In!");
        setLoading(false);
        navigate("/admin/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        toast.error(errorMessage);
      });
    } else {
      toast.error("All fields are mandatory!");
      setLoading(false);
   }
   

  }

// async function createDoc(user){
//   setLoading(true);  
   
//     try{
//       await axios.post('http://localhost:5000/api/user/add', {
//         id: user.uid,
//         username: name || "",
//         password: user.reloadUserInfo.passwordHash,
//         email: user.email,
//         role: 'admin',
//         photoURL: user.photoURL || "",

//       });
//       setLoading(false);
//     }
//     catch(error){
//       toast.error("Failed to create user in MySQL");
//       setLoading(false);
//     }
//   }


  //login/signup using google
  // function googleAuth(){
  //   setLoading(true);
  //   try{
  //     signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       setLoading(false);
  //      // createDoc(user);
  //       navigate("/admin/dashboard");
  //       toast.success("User Authenticated!");
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     }).catch((error) => {
  //       setLoading(false);
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       toast.error(errorMessage);
  
  //     });
  
  //   }catch(e){
  //     toast.error(e);
  //   }
  // }
  return (
    <> 
    {/* conditionally display the signup page or the login page */}
    
      <div className='w-3/4 max-w-md h-auto shadow-lg rounded-lg p-4'>
      <h2 className='text-xl font-medium text-center pb-7'>
        Login on<span className='text-theme'> Media Content Platform</span>
      </h2>
      <form>
        <Input         
         label={"Email"}  
         state={email} 
         setState={setEmail} 
         placeholder={"JohnDoe@gmail.com"} 
       />
        <Input 
         type="password"
         label={"Password"}  
         state={password} 
         setState={setPassword} 
         placeholder={"example@123"} 
       />
        <Button 
          disabled={loading}
          text={ loading ? "Loading..." : "Login as Admin"} 
          onClick={loginUsingEmail}
        />
        {/*<p  className='m-0 text-sm text-center font-light' > or </p>
         <Button 
          disabled={loading}
          text={ loading ? "Loading..." : "Login using google"} 
          blue={true} 
          onClick={googleAuth} 
        />
        <p  className='m-0 text-sm text-center font-light cursor-pointer' onClick={() => setLoginForm(!loginForm) } > Don't Have An Account? Click Here </p>
     */}
      </form>
      </div> {/*
      <div className='w-3/4 max-w-md h-auto shadow-lg rounded-lg p-4'>
      <h2 className='text-xl font-medium text-center pb-7'>
        Sing Up on<span className='text-theme'> Media Content Platform</span>
      </h2>
      <form>
        <Input 
         label={"Full Name"}  
         state={name} 
         setState={setName} 
         placeholder={"John Doe"} 
       />
        <Input         
         label={"Email"}  
         state={email} 
         setState={setEmail} 
         placeholder={"JohnDoe@gmail.com"} 
       />
        <Input 
         type="password"
         label={"Password"}  
         state={password} 
         setState={setPassword} 
         placeholder={"example@123"} 
       />
        <Input 
         type="password"                     
         label={"Confirm Password"}  
         state={confirmPassword} 
         setState={setConfirmPassword} 
         placeholder={"example@123"} 
       />
        <Button 
          disabled={loading}
          text={ loading ? "Loading..." : "Signup using and Email and Password"} 
          onClick={signupWithEmail}
        />
        <p className='m-0 text-sm text-center font-light' > or </p>
        <Button 
          disabled={loading}
          text={ loading ? "Loading..." : "Signup using google"} 
          blue={true} 
          onClick={googleAuth} 
        />
        <p className='m-0 text-sm text-center font-light cursor-pointer ' onClick={() => setLoginForm(!loginForm) } > Already Have An Account ? Click Here </p>

     
      </form>
      </div>)  */}
    
    
    </> 
  )
}

export default AdminLogin