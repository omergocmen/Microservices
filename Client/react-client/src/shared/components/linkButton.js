import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkButton({text,href}) {
    return (
        <>
            <Link to={href} className="block w-full min-w-[120px] bg-[#232323] py-2 rounded-xl text-white font-semibold mb-2">
                {text}
            </Link>
        </>
    )
}
