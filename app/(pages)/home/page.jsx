 

//  SSR ===== Server Side Rendering
// CSR  ===== CLient Side Rendering

// SSG ===== Static Site Generation
// ISR ====== Incremental Site Regenerate
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function Home() {


  async function getprouduct() {
     
 const res = await fetch("https://ecommerce.routemisr.com/api/v1/products",{
    next:{
      revalidate: 10
    }
 }
);

 const allproud=await res.json()
 console.log("allproud", allproud.data);

    return allproud.data;
   }

 const allData= await getprouduct()


  return (
    <div>
      <div className="container">
        <div className="row">
          {allData.map((pro)=>{   return (
            <div className="col-md-3">
              <Link href={`/productdetails/${pro.id}`}>
                <Image
                  width={300}
                  className="w-100"
                  height={400}
                  src={pro.imageCover}
                  alt=""
                />

                {/* <img src={pro.imageCover} className="w-100" alt={pro.title} /> */}

                <h2>{pro.title}</h2>
              </Link>
            </div>
          );

          })}
        </div>
      </div>
    </div>
  );
}

export default Home