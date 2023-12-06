"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "https://www.albumify.xyz/" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 bg-black p-10">
      <div className="text-2xl">
        <h1>What if... you had the power to <span className="hover:text-indigo-700">remix albums</span> based on your taste in less than a minute ?</h1>
        <h2>Join the rabbit hole, connect your Spotify and pick your <span className="hover:text-indigo-700">favorite artist</span></h2>
      </div>
      
      <div className="hover:animate-bounce">
      <button
        className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
        onClick={handleLogin}>
        Login with</button>
      <Image className="hover:cursor-pointer" src="/images/spotify_logo.png" alt="Spotify Logo" width={180} height={48} onClick={handleLogin}/>
      </div>
      <h3 className="text-xl">We will generate a tailor made album based on songs you REALLY like</h3>
      <div className="absolute bottom-5">pet project by <a className="hover:text-indigo-700" href="https://leo5imon.com/">leo simon</a></div>
    </div>
  );
}