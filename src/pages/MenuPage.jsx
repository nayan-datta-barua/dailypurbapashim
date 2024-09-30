import React from 'react'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


 

const MenuPage = () => {

  
  const { id } = useParams()
  const [item, setItem] = useState(null)


  const [value, onChange] = useState(new Date());

  useEffect(() => {
    // fetch('https://dummyjson.com/products/search?q=phone')
    // .then(res => res.json())
    // .then(console.log);
    // fetch('https://jsonplaceholder.typicode.com/photos')
fetch('https://dummyjson.com/products/search?q=phone')
    
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.products);
        setItem(data);
      });
    
  }, [])




  return (
    <>

   <div className='mt-2'>
   <div className='lg:grid lg:grid-cols-3 gap-4'>
   <div className=' lg:col-span-2'>
   {item ? (
   <div className='lg:flex gap-4'>
    <div className='lg:w-4/5'>
    {item.products.slice(0,1).map((data) => {
                  return (
                    <>
                       <img src={data.images} className='w-full' alt="" />
                       {/* <h1 className='font-bold text-2xl text-green-800'>{data.title}</h1> */}
                       <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                       {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                    </>
                  )
                })}
    
    </div>
    <div className='lg:w-4/5 gnayan nayan ap-3'>
    {item.products.slice(1,4).map((data) => {
                  return (
                    <>
               <div className='m-2 flex gap-3'>
               <img src={data.images} className='h-36 w-full' alt="" />
                    <div className='m-2'>
                    <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                    <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link>
                    {/* <h1 className='font-semibold  text-green-800 m-2'>{data.title}</h1> */}
                    {/* <h3 className='text-green-800'>{data.description.slice(0,100)}...</h3> */}
                    </div>
                      
               </div>
                    </>
                  )
                })}
    
    
    </div>
        
 
        </div>
          ) : (
            <h1>not found</h1>
          )}


  <div className='bg-red-800 lg:flex lg:justify-between rounded-2xl w-full'>
      
        <button type="button" className='font-semibold font-serif rounded-2xl bg-green-800 text-yellow-50 font-xl px-2.5 p-3'>Nayan</button>
        
  <div className='flex'>
  <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>
  <button type="button" className='rounded-xl p-2 text-yellow-50 '>Nayan</button>
  <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>
  <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>
  

  </div>
  </div>
{item ? (
        <div className='lg:flex gap-4 mt-3'>
        
                    <div className='lg:w-4/5'>
                    
                                  {item.products.slice(0,1).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full' alt="" />
                                              <h1 className='font-semibold  text-green-800'>{data.title}</h1>
                                              <h3 className='text-green-800'>{data.description.slice(0,100)}...</h3>
                                                
                                        </div>
                                              </>
                                            )
                                          })}
                    </div>
                  <div className='lg:w-4/5'>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className=''> 
                    {item.products.slice(0,3).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full h-32' alt="" />
                                              {/* <h1 className='font-semibold  text-green-800'>{data.title}</h1> */}
                                              <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                                              {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                                              
                                                
                                        </div>
                                              </>
                                            )
                                          })}


                    </div>
                    <div className=''>
                    {item.products.slice(0,3).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full h-32' alt="" />
                                              {/* <h1 className='font-semibold  text-green-800'>{data.title}</h1> */}
                                              <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                                              {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                                              
                                                
                                        </div>
                                              </>
                                            )
                                          })}

                    </div>

                  </div>
                  
                  </div>
                  </div>
          
       
          
           ) : (
            <h1>not found</h1>
          )}



          {/* third section start here */}

          <div className='bg-red-800 lg:flex lg:justify-between rounded-2xl w-full'>
      
                <button type="button" className='font-semibold font-serif rounded-2xl bg-green-800 text-yellow-50 font-xl px-2.5 p-3'>Nayan</button>
      
                <div className='flex'>
                <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>
                <button type="button" className='rounded-xl p-2 text-yellow-50 '>Nayan</button>
                <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>
                <button type="button" className='rounded-xl p-2  text-yellow-50 '>Nayan</button>


                </div>
          </div>

          {item ? (
          <div className='lg:flex gap-4 mt-3'>
            <div className='lg:w-1/3'>
            {item.products.slice(0,3).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full h-36 lg:h-32' alt="" />
                                              {/* <h1 className='font-semibold  text-green-800'>{data.title}</h1> */}
                                              <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                                              {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                                              
                                                
                                        </div>
                                              </>
                                            )
                                          })}
            </div>
            <div className='lg:w-4/5'>
            {item.products.slice(4,5).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full' alt="" />
                                        <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                                        {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                                              {/* <h1 className='font-semibold  text-green-800'>{data.title}</h1> */}
                                              
                                                
                                        </div>
                                              </>
                                            )
                                          })}
            </div>
            <div className='lg:w-1/3'>
            {item.products.slice(0,3).map((data) => {
                                            return (
                                              <>
                                              
                                        <div className='m-2'>
                                        <img src={data.images} className='w-full h-32' alt="" />
                                        <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
                                        {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
                                              {/* <h1 className='font-semibold  text-green-800'>{data.title}</h1> */}
                                              
                                                
                                        </div>
                                              </>
                                            )
                                          })}
            
            </div>

          </div>
           ) : (
            <h1>not found</h1>
          )}



      
        


</div>
       
    
   
      <div className=''>
        <h1>right sight</h1>
      {item ? (
    <>
    <div>
    {item.products.slice(0,3).map((data) => {
        return (
          <>
         <div className='flex gap-3 p-2'>
   
    <img src={data.images} className='w-36 h-28' alt="" />
          {/* <h1 className='font-medium  text-green-800'>{data.title.slice(0,200)}</h1> */}
          <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
          {/* <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link> */}
          
            
    
    </div> 
          </>
        )
      })}

<div className='justify-center items-center w-full mt-3'>
<Calendar
                onChange={onChange}
                value={value}
            />
    </div>
    </div>
    </>
        ) : (
          <h1>not found</h1>
        )}

      </div>
    </div>

    
    <div> 

    </div> 
   </div>

    </>
  )
}
export default MenuPage


// import React, { useEffect, useState } from "react";
// import Product from "../components/sub-components/Product";
// import LoadingBox from "../components/sub-components/LoadingBox";
// import MessageBox from "../components/sub-components/MessageBox";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../actions/productActions";
// import ReactPaginate from "react-paginate";

// export default function HomeScreen() {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageCount, setpageCount] = useState(0);

//   useEffect(() => {
//     dispatch(listProducts(currentPage));
//     // dispatch(countProducts());
//   }, [dispatch, currentPage]);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected + 1);
//     // scroll to the top
//     window.scrollTo(0, 0)
//   };

//   const [ mugSelected, setMugSelected ] = useState(false);
//   const [ shirtSelected, setShirtSelected ] = useState(false);

//   const handleMugToggle = () => {
//     setMugSelected(!mugSelected);
//   };
//   const handleShirtToggle = () => {
//     setShirtSelected(!shirtSelected);
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
//           <h2 className="title">Products</h2>
//           <div className="product-type-filter">
//             <button className={mugSelected ? "clicked" : null} onClick={handleMugToggle}>Mug</button>
//             <button className={shirtSelected ? "clicked" : null} onClick={handleShirtToggle}>Shirt</button>
//           </div>
//           <div className="products">
//             <div className="row">
//               <div>
//                 {loading ? (
//                   <LoadingBox></LoadingBox>
//                 ) : error ? (
//                   <MessageBox variant="danger">{error}</MessageBox>
//                 ) : (
//                   <div className="row center">
//                     {products.map((product) => (
//                       <Product key={product.added} product={product}></Product>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <ReactPaginate
//             previousLabel={"Prev"}
//             nextLabel={"Next"}
//             pageCount={40}
//             marginPagesDisplayed={4}
//             pageRangeDisplayed={1}
//             onPageChange={handlePageClick}
//             containerClassName={"pagination justify-content-center"}
//             pageClassName={"page-item"}
//             pageLinkClassName={"page-link"}
//             previousClassName={"page-item"}
//             previousLinkClassName={"page-link"}
//             nextClassName={"page-item"}
//             nextLinkClassName={"page-link"}
//             breakClassName={"page-item"}
//             breakLinkClassName={"page-link"}
//             activeClassName={"active"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const [selectedProducts, setSelectedProducts] = useState([]);

// useEffect(()=>{
//     const filteredList = products.filter(prod=> 
//         mugSelected && prod.itemType=="mug" || 
//         shirtSelected && prod.itemType=="shirt" );
//     setSelectedProducts(filteredList);
// },[products, mugSelected, shirtSelected])


// <div className="row center">
//     {selectedProducts.map((product) => (
//         <Product key={product.added} product={product}/>
//     ))}
// </div>