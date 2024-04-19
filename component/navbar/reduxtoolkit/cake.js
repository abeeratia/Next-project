// import { createAsyncThunk, createSlice, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
// import ordered as cakeOrder from
// import cakeAction from
//     import { useDispatch, useSelector } from "react-redux";
//  const initialState = {
// numberOfCake : 10
//  }
// export  const cakeSlice = createSlice({
// name:"cake",
// initialState,
// reducers:{
//     ordered:(state)=>{
//     state.numberOfCake--
//     },
//     reStoked:(state,action)=>{
//      state.numberOfCake += action.payload
//     }
// },
// extraReducers:{
//     ['icecream/ordered']:(state)=>{
//         state.numberOfCake--
//     }
// }
// extraReducers:(builder)=>{
   
//     builder.addCase(cakeOrder,(state)=>{
//         state.numberOfCake --
//     })
// }
// })




//   console.log("initiaState", store.getState());

// const unSubscripe = store.subscribe(()=>{
//     console.log("updatestate",console.log(store.getState));
// })

// store.dispatsh(cakeSlice.ordered())
// store.dispatsh(cakeSlice.ordered())
// store.dispatsh(cakeSlice.ordered())
// store.dispatsh(cakeSlice.reStoked(3))

// unSubscripe()

//  export default  cakeSlice.reducer
//  export const actionSlice =  cakeSlice.actions

//  Asyncthunk

// const initialStateAsync = {
//     loading:false,
//     data:[],
//     error:""
// }

//  Pending , Fulfilled  , Rejected
// export const fetchData = createAsyncThunk("user/userSlice",(()=>{
// return  axios.get().then((res)=>{
//      res.data.map((user)=> user.id)
//     })
// }))



//  const userSlice = createSlice({
//    name: "user",
//    initialStateAsync,
//    extraReducers: (builder)=>{
//         builder.addCase(fetchData.pending),(state)=>{
//           state.loading=true
//         }
//         builder.addCase(fetchData.fulfilled),(state,action)=>{
//             state.loading=false;
//           state.data=action.payload;
//           state.error = ''

//         }
//         builder.addCase(fetchData.rejected),(state,action)=>{
//             state.loading=false;
//           state.data=[];
//           state.error = action.error.message

//         }
 
//    }
//  });

//  export default  userSlice.reducer 
//  export fetchData 


//  بنربط reducers in store and download react reducer


// بنستدعيها في الكومبوننت العادي عن طريق اول حاجه بنعمل راب للابليكيشن من خلال provider

// and us 

// const cakenumder =useSelector((state)=>{
//    state.cake.numberOfCake
// })
// const dispatch = useDispatch()

// onclick(()=>{dispatch(orderd())})
// onclick(()=>{dispatch(reStoked(10))})  عشان هو مستني منى action.paylod