import React  from 'react'
import { useContext,useState ,useEffect} from "react"

// import { ColorContext } from '../Fatchdata'
// import { FetchdataContext } from '../Fatchdata'
// import { dataContext } from '../Fatchdata'
// import { CatDataProvider } from '../CatDatafecth'
// import { CatDataContext } from '../CatDatafecth'
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const FirstSection = () => {

  const [item, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('category', 2); // Fetch where category_id is 2

        if (error) {
          console.error('Error fetching news:', error);
        } else {
          setNews(data);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
// const [item, setFirst] = useState([]);
// // const [data, setCategories] = useState([]);
// const [loading, setLoading] = useState(true);
// // const [error, setError] = useState(null);

//   useEffect(() => {
//     const getFirstSectionData=async()=>{
//       let {data,error} =await supabase.form('news').select("*").eq('category',2);
//       if (error) {
//         console.error('Error fetching categories:', error);
//         setError(error)
//       } else {
//         console.log(data)
//         console.log("getfirse");
//         setFirst(data);
//       }
//       setLoading(false);
     

//     }
//     getFirstSectionData();
//   }, []);

  //  function getCountries() {
  //   const { data } = supabase.from("news").select();
  //   setCountries(data);
  // }
  // const [item, setcatdata] = useState([])

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/news/')
  //     .then(response => {
  //       setcatdata(response.data);
  //     })
  //     .catch(error => {
  //       console.error("There was an error fetching the categories!", error);
  //     });
  // }, []);

  return (
    <>
      <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
        <div className='lg:col-span-2'>
          {item ? (
            <div className='lg:flex gap-4'>
              <div className='lg:w-4/5 mb-3'>
                {item.slice(0,1).map((data) => {
                  return (
                    <div key={data.id}>
                      <img src={`${data.image}`} className='w-full lg:w-full lg:max-h-fit' alt="" />
                      <div className='m-2'>
                        <Link to={`/news/${data.id}`}>
                          <span className="justify-center items-center m-2 text-neutral-800 text-2xl hover:bg-green-950 hover:text-white font-mono font-semibold">
                            {data.title.slice(0, 50)}
                          </span>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className='lg:w-4/6 gap-2'>
                {item.slice(0,3).map((data) => {
                  return (
                    <div key={data.id} className='flex gap-2 m-2'>
                      <div className='h-2/5 w-2/3 lg:w-2/3 bg-red-500'>
                        <img src={`${data.image}`} className='h-32' alt="" />
                      </div>
                      <div className='mx-2 w-4/5'>
                        <Link to={`/news/${data.id}`}>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
                            {data.title.slice(0, 50)}
                          </span>
                        </Link>
                        <Link to={`/news/${data.id}`}>
                          <h2>
                            <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center">
                              {data.description.slice(0, 80)}
                            </span>
                          </h2>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <h1>not found</h1>
          )}
        </div>

        <div className='lg:w-5/6'>
          <div>
            <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>আলোচিত
            </h1>
            <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
            <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
            <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700" />
          </div>

          {item ? (
            <>
              {item.slice(0,5).map((data) => {
                return (
                  <div key={data.id} className='flex gap-3 lg:w-full m-2'>
                    <div className='h-2/5 w-2/3 lg:w-2/3'>
                      <img src={`${data.image}`} className='h-32' alt="" />
                    </div>
                    <div className='mx-2 w-4/5'>
                      <Link to={`/news/${data.id}`}>
                        <h2>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
                            {data.title.slice(0, 50)}
                          </span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <h1>not found</h1>
          )}
        </div>
      </div>
    </>
  )
}

export default FirstSection;




// const FirstSection = () => {
//   const [item, setcatdata] = useState([])


//       useEffect(() => {
     
//         axios.get('http://127.0.0.1:8000/news/')
//             .then(response => {
            
           
//               setcatdata(response.data);
  
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the categories!", error);
//             });
//     }, []);

//   return (
//     <>
//     <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-3'>
//     <div className=' lg:col-span-2'> 

//     { item? (
//    <div className='lg:flex gap-4'>
//     <div className='lg:w-4/5 mb-3'>
//     {item.slice(0,1).map((data) => {
//                   return (
//                     <>
//                      <div >
//                      <img key={data.id} src={`http://127.0.0.1:8000/${data.image}`} className='w-full lg:w-full lg:max-h-fit'  alt="" />
//                    <div className='m-2'>
//                    <Link to={`/news/${data.id}`}><span key={data.id} className="justify-center items-center m-2 text-neutral-800 text-2xl hover:bg-green-950 hover:text-white font-mono font-semibold">{data.title.slice(0,50)}</span></Link>
//                    </div>
//                      </div>
                  
//                     </>
//                   )
//                 })}
    
//     </div>
//     <div className='lg:w-4/6 gap-2'>
//                    {item.slice(1,4).map((data) => {
//                   return (
//                     <>
//                <div className='flex gap-2 m-2'>
//                 <div className='h-2/5 w-2/3 lg:w-2/3 bg-red-500'>
//                 <img key={data.id} src={`http://127.0.0.1:8000/${data.image}`} className='h-32' alt="" />
//                 </div>
              
//                     <div className='mx-2 w-4/5'>
//                     <Link to={`/news/${data.id}`}><span key={data.id} className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
//                     <Link to={`/news/${data.id}`}><h2><span key={data.id} className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center">{data.description.slice(0,80)}</span></h2></Link>
                    
//                     </div>
                      
//                </div>
//                     </>
//                   )
//                 })}
    
    
//     </div>
        
 
//         </div>
//           ) : (
//             <h1>not found</h1>
//           )}

//     </div>

//     <div className='lg:w-5/6'>
//     <div>
//     <h1 className='font-sans text-2xl m-1 text-neutral-950 rounded dark:bg-gray-700'>Nayan</h1>
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
//   <hr className="w-5/6 lg:w-2/3 h-[1px] m-1 bg-black opacity-60 border-0 rounded dark:bg-gray-700"/> 
    
//   </div>
  
//      {item? (
//     <>
   
//     {item.slice(1,5).map((data) => {
//                   return (
//                     <>
//                <div className='flex gap-3 lg:w-full m-2'>
//                 <div className='h-2/5 w-2/3 lg:w-2/3'>
//                 <img key={data.id} src={`http://127.0.0.1:8000/${data.image}`} className='h-32' alt="" />
//                 </div>
              
//                     <div className='mx-2 w-4/5'>
//                     <Link to={`/news/${data.id}`}><h2><span key={data.id} className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></h2></Link>
//                     </div>
                      
//                </div>
//                     </>
//                   )
//                 })}


    
//     </>
//         ) : (
//           <h1>not found</h1>
//         )}

   

//     </div>
//     </div>
//     </>
//   )
// }

// export default FirstSection
