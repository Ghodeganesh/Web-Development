import React from 'react'

export default function card({ username, data, desc }) {
    return (
        <div className="w-[300px] rounded-md border text-white">
            <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div class="p-4">
                <h1 className="text-lg font-semibold">{username}</h1>
                <p className="mt-3 text-sm">
                    {desc}
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-6  bg-black px-4 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    {data}
                </button>
            </div>
        </div>
    )
}

