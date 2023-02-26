import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkButton({text,href}) {
    return (
        <>
            <Link to={href} className="bg-transparent hover:bg-gray-900 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded bg-white rounded-xl font-semibold">
                {text}
            </Link>
        </>
    )
}
