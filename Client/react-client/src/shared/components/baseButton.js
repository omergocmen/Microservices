import React from 'react'

export default function BaseButton({ text,onClick }) {
    return (
        <><button type="submit" onClick={()=>onClick?onClick():null} className="block w-full min-w-[120px] bg-[#232323] py-2 rounded-xl text-white font-semibold my-2">{text}</button></>
    )
}
