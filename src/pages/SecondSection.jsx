import React from 'react'

import { useEffect, useState } from "react"
import { useContext } from "react"
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CatDataContext } from '../CatDatafecth';
const SecondSection = () => {
  const [item, setcatdata] = useState(null);
  const [value, onChange] = useState(new Date());
  const { catdata } = useContext(CatDataContext);
  useEffect(() => {
    // Filter the news items for category with id 3
    if (catdata) {
      const category3News = catdata.filter(newsItem => newsItem.category.id === 3);
      setcatdata(category3News); // Set the filtered news data
      console.log("Filtered news for category 3:", category3News);
    }
  }, [catdata]); // Effect runs when catdata changes

  // useEffect(() => {
  //   // Check if catdata is available and contains at least 3 items (index 2 is the third item)
  //   if (catdata && catdata.length > 2) {
  //     setcatdata(catdata[1]); // Set the third news item
  //     console.log("Selected news item:", catdata[2]);
  //   }
  // }, [catdata]); //

  // useEffect(() => {
  //   setcatdata(catdata[2]);
  //   console.log(setcatdata(catdata));

  // }, [catdata]);

  return (
    <>
      <div>
        <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>আইন-আদালত</h1>
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
        <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
      </div>

      <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
        <div className='lg:col-span-2'>
          {item ? (
            <div className='lg:flex gap-4'>
              <div className='lg:w-4/5 mb-3 h-full'>
                {item.slice(0, 1).map((item) => (
                  <div key={item.id}>
                    <img src={`${item.image}`} className='w-full h-full' alt="" />
                    <div className='m-2'>
                      <Link to={`/news/${item.id}`}>
                        <h1>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 text-2xl font-mono font-semibold">
                            {item.title.slice(0, 50)}
                          </span>
                        </h1>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className='lg:w-5/6'>
                {item.slice(0, 4).map((data) => (
                  <div key={data.id} className='lg:ml-2 lg:flex gap-3 w-full'>
                    <div className='lg:w-2/3 m-2'>
                      <img src={`${data.image}`} className='w-full h-full' alt="" />
                    </div>
                    <div className='m-2 lg:w-4/5'>
                      <Link to={`/news/${data.id}`}>
                        <h2>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-xl font-semibold">
                            {data.title.slice(0, 50)}
                          </span>
                        </h2>
                      </Link>
                      <Link to={`/news/${data.id}`}>
                        <h2 className="text-neutral-800 hover:bg-green-950 hover:text-white">
                          {data.description.slice(0, 100)}
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

        <div className='w-5/6 justify-center catdatas-center'>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};

export default SecondSection;


// const SecondSection = () => {
//     const [ item, setcatdata] = useState(null)
//     const [value, onChange] = useState(new Date());
//     const { catdata, loading, error } = useContext(CatDataContext);
//     useEffect(()=>{
//     setcatdata(catdata[2])
  
//     })
//   return (
    
//     <>


// <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>আইন-আদালত</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
//       <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
//       <div className=' lg:col-span-2'> 


       
//       {item ? (
//      <div className='lg:flex gap-4'>
//       <div className='lg:w-4/5 mb-3 h-full'>
//       {item.slice(0,1).map((item) => {
//                     return (
//                       <>
                  
//                          <img src={`http://127.0.0.1:8000/${item.image}`} className='w-full h-full' alt="" />
                        
//                      <div className='m-2'>
//                      <Link to={`/news/${item.id}`}><h1><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 text-2xl font-mono font-semibold">{item.title.slice(0,50)}</span></h1></Link>
             
//                      </div>
//                       </>
//                     )
//                   })}
      
//       </div>
//       <div className='lg:w-5/6'>
//       {item.slice(0,4).map((data) => {
//                     return (
//                       <>
//                        <div className='lg:ml-2 lg:flex gap-3 w-full'>
//                 <div className='lg:w-2/3 m-2'>
//                 <img src={`http://127.0.0.1:8000/${data.image}`} className='w-full h-full' alt="" />
//                 </div>
              
//                     <div className='m-2 lg:w-4/5'>
//                     <Link to={`/news/${data.id}`}><h2><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-xl font-semibold">{data.title.slice(0,50)}</span></h2></Link>
//                     <Link to={`/news/${data.id}`}><h2 className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,100)}</h2></Link>
//                     </div>
                      
//                </div>
               
//                       </>
//                     )
//                   })}
      
      
//       </div>
          
   
//           </div>
//             ) : (
//               <h1>not found</h1>
//             )}
//       </div>
  
  
//       <div className='w-5/6  justify-center catdatas-center '>
//       <Calendar
//                   onChange={onChange}
//                   value={value}
//               />
      
//       </div>
      
//       </div>
//     </>
//   )
// }

// export default SecondSection