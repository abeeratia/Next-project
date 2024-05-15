"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Web() {

const searchparams =  useSearchParams();
console.log('abeer' ,searchparams.size );
searchparams.get('abeer')
  
  return <div className="loaderr text-danger">
    
    <Link href='/project/product#abeer'  replace={true}>
    <h2>hiiiiiiiii</h2>
    
    </Link >
   

  </div>;
}

export default Web;
