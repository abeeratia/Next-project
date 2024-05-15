




// import React from "react";
// const product={
//   id:1,
//  category:"knkbl"
// }
// export default function Desktop(props) {
//   return <div>Desktop


//  بنستقبلها كprops عشان تعرض بقا الداتا
//     {props.product}
//   </div>;
// }

//  Statia Site Generation
// عشان نستخدم function  static sit generation
// طبعا بنستخدمها لو بنستخدم useeffect and usestate عشان عيوبهم بيعمل render مرتين ,بيعمل loading مش كويس للصفحه لو مثلا static فعشان نحلها بنستخدم 2 function واحده ل static والتانيه ل getStaticProps, hلو الموقع دينامك
// وبعدها هينفذ الافانكشن اللى فوق عشان هيا كلينت سايدافانكشن دى هتتنفذ الاول عشان دى تبع السيرفر سايد يعني next هينفذها الاول 
  // 1=====  export function getStaticProps() {
  // بنعمل  كول لapi هنا 
  /* return {
    props :{
    product:product
      // بنبعت هنا data اللى راجعه من api props ل function اللي فوق
    },
    بنحل static عن طريق دا fsبس دا مش افضل حل عشان هيبطئ الموقع
    revalidate :1 
  }
   */
  
// }
   
//  تاني function بنستخدمه عشان لو فيه id in path

//  export function getStaticProps({params}) {
//   productId= params.productId
//   return {
//     props :{
//     productData:{
//       image:"https/",
//       name:"gfgd0",
//       id:productId
//     }
      // بنبعت هنا data اللى راجعه من api props ل function اللي فوق
   /*  },
    بنحل static عن طريق دا fsبس دا مش افضل حل عشان هيبطئ الموقع
    revalidate :1 
  }
  
  
} */
// 2=====export function getStaticPath() {

  // connect to Database to get product ids

// return {
//    fallback:false,    لازم نخليه ب false  لو عوزاه يقبل نخليه ب true عشان ميقبلش مني اي id انا بكتبه
//   paths:[
//     {
//       paths:{
//         params:{
//           productid:1
//         }
//       }
//     }
//   ]
// } 
  
// }  



// فيه function بستخدمها  عشان لما اكتب حاجه اى الباص يجيب الاى دى تبع المنتج

// function geneateStaticParams

// فيه method ل not found in next      notFound()


// if(!todo.id){
//   return notFound()

// }

// children typs in typescript is React.reactNode


//  لو عاوزه اعرض ايرور بايدي بستخدم 
// بس لازم نشيل كود jsx بنحطه قبل return
// throw new Error("Error ocurd")