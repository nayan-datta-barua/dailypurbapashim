import React from 'react'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CatDataContext } from '../CatDatafecth';  

const SpecialMenu = () => {
  const [item, setcatdata] = useState(null);
  const [item1, setcatdata1] = useState(null);
  const [item2, setcatdata2] = useState(null);
  const [value, onChange] = useState(new Date());
  const { catdata } = useContext(CatDataContext);

  // useEffect(() => {
  //   setcatdata(catdata[4]);
  //   setcatdata1(catdata[5]);
  //   setcatdata2(catdata[6]);
  // }, [catdata]);

  useEffect(() => {
    // Filter the news items for category with id 3
    if (catdata) {
      const category4News = catdata.filter(newsItem => newsItem.category.id === 4);
      setcatdata(category4News); // Set the filtered news data
      console.log("Filtered news for category 3:", category4News);
      const category5News = catdata.filter(newsItem => newsItem.category.id === 5);
      setcatdata1(category5News); // Set the filtered news data
      console.log("Filtered news for category 3:", category5News);
      const category6News = catdata.filter(newsItem => newsItem.category.id === 6);
      setcatdata2(category6News); // Set the filtered news data
      console.log("Filtered news for category 3:", category4News);
    }
  }, [catdata]);

  return (
    <>
      <div>
        <div className='lg:grid lg:grid-cols-3 gap-4 mt-3'>
          {item ? (
            <div className='lg:w-5/6'>
              <div>
                <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>
                  অর্থ ও বাণিজ্য
                </h1>
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
              </div>
              {item.slice(0, 4).map((data) => (
                <div key={data.id} className='flex gap-2 m-2'>
                  <div className='w-1/2 lg:w-3/5'>
                    <img
                      src={`${data.image}`}
                      className=' w-full'
                      alt=""
                    />
                  </div>
                  <div className='mx-2 w-2/3'>
                    <Link to={`/news/${data.id}`}>
                      <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
                        {data.title.slice(0, 50)}
                      </span>
                    </Link>
                    <Link to={`/news/${data.id}`}>
                      <h3 className="text-neutral-800 hover:underline">
                        {data.description.slice(0, 100)}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>not found</h1>
          )}

          {item1 ? (
            <div className='lg:w-5/6'>
              <div>
                <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>
                  আন্তর্জাতিক
                </h1>
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
              </div>
              {item1.slice(0, 4).map((data) => (
                <div key={data.id} className='flex gap-2 m-2'>
                  <div className='w-1/2 lg:w-3/5'>
                    <img
                      src={`${data.image}`}
                      className='w-full'
                      alt=""
                    />
                  </div>
                  <div className='mx-2 w-2/3'>
                    <Link to={`/news/${data.id}`}>
                      <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
                        {data.title.slice(0, 50)}
                      </span>
                    </Link>
                    <Link to={`/news/${data.id}`}>
                      <h3 className="text-neutral-800 hover:underline">
                        {data.description.slice(0, 100)}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>not found</h1>
          )}

          {item2 ? (
            <div className='lg:w-5/6'>
              <div>
                <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>
                  খেলা
                </h1>
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
                <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
              </div>
              {item2.slice(0, 4).map((data) => (
                <div key={data.id} className='flex gap-2 m-2'>
                  <div className='w-1/2 lg:w-3/5'>
                    <img
                      src={`${data.image}`}
                      className=' w-full'
                      alt=""
                    />
                  </div>
                  <div className='mx-2 w-2/3'>
                    <Link to={`/news/${data.id}`}>
                      <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
                        {data.title.slice(0, 50)}
                      </span>
                    </Link>
                    <Link to={`/news/${data.id}`}>
                      <h3 className="text-neutral-800 hover:underline">
                        {data.description.slice(0, 100)}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>not found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SpecialMenu;

// const SpecialMenu = () => {



//     const [ item, setcatdata] = useState(null)
//     const [ item1, setcatdata1] = useState(null)
//     const [ item2, setcatdata2] = useState(null)
//     const [value, onChange] = useState(new Date());
//     const { catdata, loading, error } = useContext(CatDataContext);
//     useEffect(()=>{
//     setcatdata(catdata[4])
//     setcatdata1(catdata[5])
//     setcatdata2(catdata[6])





  

      
//     }, [])
  
//   return (
//     <>
//     <div>
                      
                    
//           <div className='lg:grid lg:grid-cols-3 gap-4 mt-3'>  
//            {item ? (  
//           <div className='lg:w-5/6'>
          
//           <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>অর্থ ও বাণিজ্য</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
          
//             {item.slice(0,4).map((data) => {
//                                             return (
//                                               <>
//                                          <div className='flex gap-2 m-2'>
//                 <div className='w-1/2 lg:w-3/5'>
//                 <img src={`http://127.0.0.1:8000/${data.image}`} className='h-full w-full' alt="" />
//                 </div>
              
//                     <div className='mx-2 w-2/3'>
//                     <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950  hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
//                       <Link to={`/news/${data.id}`}><h3 className="text-neutral-800 hover:underline">{data.description.slice(0,100)}</h3></Link>
                 
//                     </div>
                      
//                </div>
                                         
//                                               </>
//                                             )
//                                           })}
            
              
            
            
            
//             </div>
//              ) : (
//               <h1>not found</h1>
//             )}
//   {item1 ? (

//             <div className='lg:w-5/6'>
//             <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>আন্তর্জাতিক</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
           
//             {item1.slice(0,4).map((data) => {
//                                             return (
//                                               <>
//                                                  <div className='flex gap-2 m-2'>
//                 <div className='w-1/2 lg:w-3/5'>
//                 <img src={`http://127.0.0.1:8000/${data.image}`} className='h-full w-full' alt="" />
//                 </div>
              
//                     <div className='mx-2 w-2/3'>
//                     <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950  hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
//                       <Link to={`/news/${data.id}`}><h3 className="text-neutral-800 hover:underline">{data.description.slice(0,100)}</h3></Link>
                 
//                     </div>
                      
//                </div>
                             
//                                               </>
//                                             )
//                                           })}
            
              
            
            
            
//             </div>


//           ) : (
//                      <h1>not found</h1>
//                    )}
//   {item2 ? (

//             <div className='lg:w-5/6'>
//             <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>খেলা</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
           

// {item2.slice(0,4).map((data) => {
//                   return (
//                     <>
//                <div className='flex gap-2 m-2'>
//                 <div className='w-1/2 lg:w-3/5'>
//                 <img src={`http://127.0.0.1:8000/${data.image}`} className='h-full w-full' alt="" />
//                 </div>
              
//                     <div className='mx-2 w-2/3'>
//                     <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950  hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
//                       <Link to={`/news/${data.id}`}><h3 className="text-neutral-800 hover:underline">{data.description.slice(0,100)}</h3></Link>
                 
//                     </div>
                      
//                </div>
//                     </>
//                   )
//                 })}
            
              
            
            
            
//             </div>


//           ) : (
//                      <h1>not found</h1>
//                    )}



                     
//           </div>
                  
                  
//     </div>
//     </>
//   )
// }

// export default SpecialMenu