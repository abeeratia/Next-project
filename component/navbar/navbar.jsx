'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const pathname = usePathname()
  console.log('pathname',pathname);


  return (
    <div>
      Navbar........................
      <Link style={{ color: "red" ,textDecoration:'none'}} className={`link ${pathname === '/project' ? 'text-danger' : 'text-success'}`} href="/project">
        project
      </Link>
      <br/>
      <Link  className={`link ${pathname === '/home' ? 'text-danger' : 'text-success'}`}style={{ color: "red" ,textDecoration:'none' }} href="/home">
        Home
      </Link><br/>
      <Link  className={`link ${pathname === '/cart' ? 'text-danger' : 'text-success'}`}style={{ color: "red" ,textDecoration:'none' }} href="/cart">
        cart
      </Link>
      <br/>
      
    </div>
  );
}

export default Navbar;
