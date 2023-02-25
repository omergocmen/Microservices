import React from 'react'

export default function BaseButtonHover({text}) {
    return (
        <>
            <button className="bg-transparent hover:bg-gray-800 text-black-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded bg-white rounded-xl font-semibold">
                {text}
            </button>
        </>
    )
}
