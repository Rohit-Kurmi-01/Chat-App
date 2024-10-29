import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword  , updateProfile} from "firebase/auth";
import { auth ,storage } from "../Firebase";
import React from 'react'
import Add from '../Img/addAvtar.png'

function Register() {
    const [error, setError] = React.useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

    try{
     
    const responce = await createUserWithEmailAndPassword(auth, email, password) ;

const storage = getStorage();
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  (error) => {
    // Handle unsuccessful uploads
    setError(true);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
      await updateProfile(responce.user, {updateProfile: displayName, photoURL: downloadURL});
    });
  }
);
    }catch(err){
        setError(true);
    }
}
    return (
       <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> Bussiness Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{display : 'none'}} type="file" id='file' />
                <label htmlFor="file" >
                   <img src={Add} alt="Logo" className='Avtar' />
                   <span>Add a Avtar</span>
                </label>
                <button>SignUp</button>
                {error && <span className='error'>Something went wrong</span>}
                
            </form>
            <p>you do have an account ? Login</p>
        </div>
       </div>
    )
}

export default Register
