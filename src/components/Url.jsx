import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { darkModeState, handleInput } from '../store/atoms/atom'
import Input from './Input'
import axios from 'axios'

const Url = () => {
    const darkMode = useRecoilValue(darkModeState)
     const url = useRecoilValue(handleInput)
     const [shortUrl, setShortUrl] = useState("")
     const shortenUrl = async() => {
        const response = await axios.post("https://short-pc.onrender.com/short", {
            url: url
        })
        setShortUrl(`https://short-pc.onrender.com/${response.data.shortenUrl}`)
     }
  return (
    <div className={`flex justify-center text-center mt-32 ${darkMode?'dark':''}`} >
        <div className={`w-[350px] md:w-[650px] lg:w-[1100px] ${darkMode?'dark':''}`}>
        <h1 className={`text-4xl font-regular ${darkMode?"text-white":"text-black   "}`}>Enter your url</h1>
        <div className="lg:flex">
            <Input />  
            <button onClick={shortenUrl}
            className={`ml-2 mt-[49px] w-full lg:w-28  rounded h-10 ${darkMode?"bg-white text-gray-900 hover:bg-[#DEDEDE]": "bg-gray-700 hover:bg-gray-900 text-white"}`}>Short URL</button>
        </div>
        <div  className={`mt-6 ${darkMode?"text-white":""}`}>
        <a href={shortUrl} target='_blank'>{shortUrl}</a>
        </div>
        </div>
    </div>
    

  )
}

export default Url
