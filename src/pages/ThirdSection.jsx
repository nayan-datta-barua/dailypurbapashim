import React from 'react'
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CatDataContext } from '../CatDatafecth';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  const [item, setItem] = useState(null);
  const [value, onChange] = useState(new Date());
  const { catdata } = useContext(CatDataContext);

  // useEffect(() => {
  //   setItem(catdata[3]);
  // }, [catdata]);
  useEffect(() => {
    // Filter the news items for category with id 3
    if (catdata) {
      const category1News = catdata.filter(newsItem => newsItem.category.id === 1);
      setItem(category1News); // Set the filtered news data
      console.log("Filtered news for category 3:", category1News);
    }
  }, [catdata]);
  return (
    <>
      <div>
        <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>রাজধানী</h1>
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
      </div>

      <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
        <div className='lg:col-span-2'>
          {item ? (
            <div className='lg:flex gap-4 mt-3'>
              <div className='lg:w-1/3'>
                {item.slice(0, 3).map((data) => (
                  <div key={data.id} className='flex flex-row lg:flex-col m-2'>
                    <img src={`${data.image}`} className='w-1/2 lg:w-full' alt="" />
                    <div className='m-2 lg:w-full'>
                      <Link to={`/news/${data.id}`}>
                        <h2>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono lg:text-xl font-medium">
                            {data.title.slice(0, 50)}
                          </span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className='lg:w-1/2'>
                {item.slice(0, 1).map((data) => (
                  <div key={data.id}>
                    <img src={`${data.image}`} className='max-h-fit w-full' alt="" />
                    <div className='m-2'>
                      <Link to={`/news/${data.id}`}>
                        <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center text-2xl font-semibold">
                          {data.title.slice(0, 50)}
                        </span>
                      </Link>
                      <Link to={`/news/${data.id}`}>
                        <h2>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white">
                            {data.description.slice(0, 150)}
                          </span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className='lg:w-1/3'>
                {item.slice(0, 3).map((data) => (
                  <div key={data.id} className='flex flex-row lg:flex-col m-2'>
                    <div className='w-1/2 lg:w-full'>
                      <img src={`${data.image}`} className='w-full h-full' alt="" />
                    </div>
                    <div className='m-1 w-2/3 lg:w-full'>
                      <Link to={`/news/${data.id}`}>
                        <h2>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono lg:text-xl font-medium">
                            {data.title.slice(0, 50)}
                          </span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h1>not found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;

// const ThirdSection = () => {
//     const [item, setItem] = useState(null)


//     const [value, onChange] = useState(new Date());
//     const { catdata, loading, error } = useContext(CatDataContext);
    
    
//     useEffect(()=>{
//     setItem(catdata[3])
   
//     })
  

//   return (
//     <>
  
//   <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>রাজধানী</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
//   <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
  
//   <div className=' lg:col-span-2'>
 
//   {item ? (
//           <div className='lg:flex gap-4 mt-3'>
//             <div className='lg:w-1/3'>
//             {item.slice(0,3).map((data) => {
//                                             return (
//                                               <>




// <div className='flex flex-row lg:flex-col m-2'>
// <img src={`http://127.0.0.1:8000/${data.image}`} className='w-1/2 lg:w-full' alt="" />
               
              
//                     <div className='m-2 lg:w-full'>
//                     <Link to={`/news/${data.id}`}><h2><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono lg:text-xl font-medium">{data.title.slice(0,50)}</span></h2></Link>
                   
//                     </div>
                      
//                </div>


                                              
                                    
//                                               </>
//                                             )
//                                           })}
//             </div>
//             <div className='lg:w-1/2'>
//             {item.slice(0,1).map((data) => {
//                                             return (
//                                               <>
                                              
                                      
//                                         <img src={`http://127.0.0.1:8000/${data.image}`} className='max-h-fit w-full' alt="" />
                                      
//                                        <div className='m-2'>
//                                        <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center text-2xl font-semibold">{data.title.slice(0,50)}</span></Link>
//                                          <Link to={`/news/${data.id}`}><h2><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></h2></Link>
                                       
//                                        </div>
                                              
                                                
                                        
//                                               </>
//                                             )
//                                           })}
//             </div>
//             <div className='lg:w-1/3'>
//             {item.slice(0,3).map((data) => {
//                                             return (
//                                               <>

// <div className='flex flex-row lg:flex-col m-2'>

//                 <div className='w-1/2 lg:w-full'>
//                 <img src={`http://127.0.0.1:8000/${data.image}`} className='w-full h-full' alt="" />
//                 </div>
              
//                     <div className='m-1  w-2/3 lg:w-full'>
//                     <Link to={`/news/${data.id}`}><h2><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono lg:text-xl font-medium">{data.title.slice(0,50)}</span></h2></Link>
                    
//                     </div>
                      
//                </div>
                                              
                                
//                                               </>
//                                             )
//                                           })}
            
//             </div>

//           </div>
//            ) : (
//             <h1>not found</h1>
//           )}

//   </div>
//   </div>
    
//     </>
//   )
// }

// export default ThirdSection