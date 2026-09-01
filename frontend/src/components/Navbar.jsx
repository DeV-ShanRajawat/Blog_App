import React from 'react'
import {Link} from 'react-router-dom'
import {BookIcon,User} from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-black bg-black px-6 py-4 text-white">
      <h2 className="text-2xl font-bold">Blogo</h2>
   
     <ul className="flex items-center gap-6">
        <li><Link className="flex items-center gap-2 hover:underline" to = {"/"}><span>Feed</span><BookIcon size={18}/></Link></li>
        <li><Link className="flex items-center gap-2 hover:underline" to={"/admin"}><span>Blog Admin</span><User size={18}/></Link></li>
     </ul>

    </nav>
  )
}
