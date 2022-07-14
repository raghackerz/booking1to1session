import { useEffect, useState } from "react";
import GoogleLoginComponent from "../GoogleLogin";

const InitialSignup = ({users,setUsers}) =>{

    const [email,setEmail] = useState("");

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(users));
  }, [users]);

    const sumbitHandler = (e) => {
        e.preventDefault();
        const newUser = {
           email
        }
        console.log(email); 
        if(newUser.email !== "")
        setUsers([...users,newUser]);
       setEmail("");
    }

    return(
    <div className="w-3/4 md:w-1/2 lg:w-1/3  bg-white mt-8 border" style={{margin: `auto`,marginTop:`3vh`}}>
        <form className="flex flex-col" onSubmit={sumbitHandler}>
            <div className="text-3xl font-semibold text-center mt-11">Sign Up</div>
            <label className="mx-4 text-xl mt-12" style={{color: `#737171`}}>Email</label>
            <input className="mx-4 border border-slate-400 rounded h-12 mt-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className="h-12 rounded mx-4 mt-11 text-white text-xl" style={{background: `linear-gradient(93.44deg, #444BAB -6.8%, #3CA5C2 186.94%)`}}>Set Password</button>
            <div className="text-black text-lg text-center my-10">OR</div>
            <GoogleLoginComponent />
            <label className="h-lg my-12 md:my-24 text-center font-normal">Already have an account?</label>
        </form>
    </div>
    );
}

export default InitialSignup;