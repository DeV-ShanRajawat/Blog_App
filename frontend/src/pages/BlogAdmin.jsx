import React, { useEffect } from "react";
import axios from "axios";
export default function BlogAdmin() {

async function handleSubmit(e)
{
  e.preventDefault();
  let data={
    title:e.target[0].value,
    description:e.target[1].value,
    image:e.target[2].value,
    user: "6a967bf63598563863fa20b3"
  }
  await axios.post("http://localhost:5500/api/blogs/create",data)
}

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-8 text-neutral-50 sm:px-6 lg:px-8">
      <div id="header" className="mx-auto mb-6 max-w-3xl rounded-lg border border-neutral-800 bg-neutral-900/70 px-6 py-5 shadow-sm">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-400">Dashboard</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white">Blog Admin Page</h2>
      </div>
      <div id="FormSection" className="mx-auto max-w-3xl rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-200">Title</p>
            <input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-800" type="text" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-200">Description</p>
            <input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-800" type="text"/>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-200">Poster</p>
            <input className="h-10 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-800" type="text"/>
          </div>
          <button className="border rounded-xl border-neutral-800 bg-neutral-950 p-2 font-medium hover:bg-white hover:text-black cursor-pointer transition-all duration-300  ease-in-out  ">Submit</button>
        </form>
      </div>
    </div>
  );
}
