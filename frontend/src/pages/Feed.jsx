import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

export default function Feed() {
  let [BlogData, setBlogData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:5500/api/blogs");
      console.log(res.data);
      setBlogData(res.data);
    }
    getData();
  }, []);

  return <div className="min-h-screen bg-neutral-950 px-4 py-8 text-neutral-50 sm:px-6 lg:px-8">
    <div id="header" className="mx-auto mb-6 flex max-w-7xl items-end justify-between rounded-lg border border-neutral-800 bg-neutral-900/70 px-6 py-5 shadow-sm">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-400">Latest posts</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Feed</h1>
        </div>
    </div>
   <div id="ContainerGrid" className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {
        BlogData.map((b)=>(
            <div className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm transition hover:border-neutral-700 hover:bg-neutral-900/80">
                <img className="h-52 w-full border-b border-neutral-800 object-cover opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0" src={b.image} alt={b.title}/>
                <div id="userSection" className="flex items-center gap-3 px-5 pt-5">
                    <img className="h-9 w-9 rounded-full border border-neutral-700 object-cover grayscale" src={b.user.avatar} alt={b.user.name} />
                    <p className="rounded-xl border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-xs font-medium text-neutral-300">{b.user.name}</p>
                </div>
                <h2 className="px-5 pt-4 text-xl font-semibold leading-tight tracking-tight text-white">{b.title}</h2>
                <p className="px-5 pb-6 pt-3 text-sm leading-6 text-neutral-400">{b.description}</p>
                </div>
        ))
    }
   </div>


  </div>
}
