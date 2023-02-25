import React from 'react'

export default function BaseButton({ text }) {
    return (
        <><button type="submit" className="block w-full bg-[#232323] mt-4 py-2 rounded-xl text-white font-semibold mb-2">{text}</button></>
    )
}
