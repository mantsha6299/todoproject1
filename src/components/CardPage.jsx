import productsData from "./productsData";

function CardPage(){
  return (
  <> 
  {/* <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Simple card</h1> */}

    {/* //products */}
    <div className=" text-pink-400 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
     {productsData.map((item) =>{
      return(
        <div key={item.id} className="border bg-blue-400 p-4 rounded shadow">
        <img 
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded"/>
        <h2 className="font-bold">{item.name}</h2>
        <p>Price:₹{item.price}</p>
        <p>Size:₹{item.size}</p>
      </div>
      )
     })}
    </div>  
     <button className="border bg-pink-900  text-2xl text-black p-2 px-12 py-6 rounded-full ">me</button>
  </>)
}
export default CardPage;


// import { useState } from "react";
// function CardPage() {
//   // console.log("manan",manan)
//   // console.log("sanu",sanu)
//   const [count,setCount] = useState(0)


//   const handleClickButton = () =>{
//     // setCount(prev (...prev,count+1))
//     setCount(count+1)
//   }

//   return <>
//   <div>
//     <h1>hello</h1>
//     <button className="bg-black border-4 hover:border-rose-900 rounded-full text-white py-0.5 px-96" onClick={handleClickButton}>clickme = {count}</button>
//   </div>
//   </>;
// }

// export default CardPage;
