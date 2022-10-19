import React from 'react';
import Image from 'next/image';
import Avatars from './avatars';
import AddImage from './addImage';
import AddName from './addName';
const Register = () => {
    return (
      <div className="text-center m-2 ">
        <p className="text-4xl text-black">Welcome</p>
        <p className="text-slate-500">Join the new way of communication</p>
        <div className=" text-black m-2 border border-b-slate-500">
          <p>Choose your Avatar</p>
          <Avatars />
        </div>
        <p className="text-black text-lg">Connect with wallet</p>
        <div className="flex justify-center w-full">
          <AddImage />
          <AddName />
        </div>
        <div className="mx-48 my-8 ">
          <button className="bg-gradient-to-r  from-indigo-300 via-purple-300 to-pink-300  text-2xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  px-4 py-2 w-96 h-16 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Join
          </button>
        </div>
        <div className="border  border-b-slate-500 text-black">OR</div>
        <button className="bg-lime-600 rounded-lg mx-1 px-4 py-2 w-96 h-16 text-2xl my-2">
        
        <span><Image src='/lens.png'  alt="lens protocol icon" width={50} height={50}/>With Lens Profile</span>
        </button>
      </div>
    );
}

export default Register;
