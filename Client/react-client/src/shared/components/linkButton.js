import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkButton({text,href}) {
    return (
        <>
            <Link to={href} class="border min-w-[120px] border-[#232323] bg-transparent hover:bg-[#232323] text-[#232323] font-semibold hover:text-white py-2 px-4 block w-full  bg-white mt-4 py-2 rounded-xl font-semibold mb-2">
                {text}
            </Link>
        </>
    )
}
