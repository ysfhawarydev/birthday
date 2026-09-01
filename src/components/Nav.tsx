import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const links = [['/','home'],['/story','our story'],['/memories','memories'],['/letter','love letter'],['/birthday','birthday'],['/surprise','surprise']];
export function Nav(){
 const [open,setOpen]=useState(false);
 return <header className="site-nav">
   <NavLink className="brand" to="/" onClick={()=>setOpen(false)}><span className="brand-mark"><Heart size={15} fill="currentColor"/></span><span>for my Sweetie</span></NavLink>
   <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-label="menu">{open?<X/>:<Menu/>}</button>
   <nav className={open?'nav-links open':'nav-links'}>{links.map(([to,label])=><NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>
 </header>
}
