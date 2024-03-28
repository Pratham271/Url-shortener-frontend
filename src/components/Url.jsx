import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, handleTag, handleUrl } from '../store/atoms/atom'
import Input from './Input'
import axios from 'axios'
import Spinner from './Spinner'

const Url = () => {
    const darkMode = useRecoilValue(darkModeState)
     const [url,setUrl] = useRecoilState(handleUrl)
     const [tag, setTag] = useRecoilState(handleTag)
     const [shortUrl, setShortUrl] = useState("")
     const [loading, setLoading] = useState(false)
     const shortenUrl = async() => {
        try {
            setLoading(true)
            console.log(url)
            console.log(tag)
            const response = await axios.post("https://short-pc.onrender.com/short", {
                url: url,
                tag: tag
            })
            setShortUrl(`https://short-pc.onrender.com/${response.data.shortenUrl}`)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
     }
     const isUrlEmpty = url.trim() === '';
  return (
    <div className={`flex justify-center text-center mt-32 ${darkMode?'dark':''}`} >
        <div className={`w-[350px] md:w-[650px] lg:w-[1100px] ${darkMode?'dark':''}`}>

        <h1 className={`text-4xl font-regular ${darkMode?"text-white":"text-black   "}`}>Copy your url here</h1>
        <div>
            <div className='mt-8'>
                <Input shortenUrl={shortenUrl} isUrlEmpty={isUrlEmpty} onChange={(e)=> setUrl(e.target.value)} placeholder={"https://google.com"} label={"URL"}/> 
            </div>
            <div className='mt-8'>
                <Input shortenUrl={shortenUrl} isUrlEmpty={isUrlEmpty} onChange={(e)=> setTag(e.target.value)} placeholder={"Try to think of a unique one"} label={"Tag"}/>  
            </div>

            <button onClick={shortenUrl} disabled={isUrlEmpty}
            className={`mt-8 w-full  rounded h-10 ${darkMode?"bg-gray-500 text-white hover:bg-gray-400": "bg-gray-700 hover:bg-gray-900 text-white"}`}>Shrink URL</button>

        <h1 className={`text-4xl font-regular ${darkMode?"text-white":"text-black   "}`}>Enter your url</h1>
        <div className="lg:flex">
            <Input />  
            <button onClick={shortenUrl}
            className={`ml-2 mt-[49px] w-full lg:w-28  rounded h-10 ${darkMode?"bg-white text-gray-900 hover:bg-[#DEDEDE]": "bg-gray-700 hover:bg-gray-900 text-white"}`}>Short URL</button>

        </div>
        <div  className={`mt-6 ${darkMode?"text-white":""}`}>
        {loading?<Spinner/>:<a href={shortUrl} target='_blank'>{shortUrl}</a>}
        </div>
        </div>
    </div>
    

  )
}

export default Url
