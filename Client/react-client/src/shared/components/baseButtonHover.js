import React from 'react'

export default function BaseButtonHover({text}) {
    return (
        <>
            <button class="border border-[#232323] bg-transparent hover:bg-[#232323] text-[#232323] font-semibold hover:text-white py-2 px-4 block w-full  bg-white mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                {text}
            </button>
        </>
    )
}
