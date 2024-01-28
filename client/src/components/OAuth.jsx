import { Button } from "flowbite-react";
import {AiFillGoogleCircle} from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";
import { app } from "../firebase";


export default function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' }) //use to show All Google Account user have every time during signin ,it disable direct Signin with current working account 
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider) //use to show popup for Googlesignin window
            // console.log(resultsFromGoogle); //to see user infomation send by google
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
                })
            const data = await res.json()
            if (res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    } 

  return (
    <Button type='button' gradientDuoTone='purpleToPink' outline onClick={handleGoogleClick}>
   <AiFillGoogleCircle  className='w-6 h-6 mr-2'/> 
    Continue with Google
      </Button>
  )
}
