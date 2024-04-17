
import React from "react";

async function  ProductId({ params }) {
  // useRouter
  console.log(params.productid);

 async  function getprodbyid() {
    const res = await fetch(
      ` https://ecommerce.routemisr.com/api/v1/products/${params.productid}`
    );
    const allDetails = await res.json();
    console.log('res',res);
    return allDetails.data 
  }

  const result = await getprodbyid()

  console.log('result',result);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={result.imageCover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductId;
