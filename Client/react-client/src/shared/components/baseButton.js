import React from 'react'

export default function BaseButton({ text,onClick }) {
    return (
        <><button type="submit" className="block w-full min-w-[120px] bg-[#232323] mt-4 py-2 rounded-xl text-white font-semibold mb-2">{text}</button></>
    )
}
