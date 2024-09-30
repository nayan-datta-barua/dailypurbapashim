
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';


const NewsDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  // const [loading, setLoading] = useState(true);


  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true); // Ensure loading state is defined
  
  useEffect(() => {
    const fetchCatNewsData = async () => {
      try {
        let { data, error } = await supabase
          .from('news')
          .select('*');
  
        if (error) {
          throw error;
        }
        setItem(data); // Update state with data
  
      } catch (error) {
        console.warn(error.message);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };
  
    fetchCatNewsData();
  }, []);

  useEffect(() => {
    const fetchnewsdata = async () => {
      console.log(id);

      try {
        let { data, error } = await supabase
        .from('news')
        .select('*').eq('id',id);
  
              if (error) {
        throw error
      }
     
      setCategory(data)
 

    } catch (error) {
      console.warn(error.message)
    } finally {
      setLoading(false)
    }
    };

    fetchnewsdata();
  }, [id]);



  if (loading) {
    return <p>Loading...</p>;
  }



  return (
    <>
      <div>
        <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-2'>
          <div className='lg:col-span-2 h-full'>
            {category.map((data) => (
              <div key={data.id}>
                <div>
                  <img
                    src={`${data.image}`}
                    className='mb-3 w-5/6 lg:w-full lg:h-4/6'
                    alt=""
                  />
                </div>
                <div className='w-5/6 lg:w-full m-1'>
                <h1 className='font-sans font-semibold text-neutral-800 text-2xl m-2'>
                  {data.title}
                </h1>
                <h2 className='font-serif text-sm text-neutral-800 lg:text-xl'>
                  {data.description}
                </h2>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-10 lg:mt-1'>
            {item ? (
              <>
                {item.slice(0,10).map((mydata) => (
                  <div key={mydata.id} className='flex gap-3  m-2'>
                    <div className='h-2/5 w-1/2 lg:w-2/3 '>
                      <img
                        src={`${mydata.image}`}
                        className='h-32 w-full'
                        alt=""
                      />
                    </div>
                    <div className='mx-2'>
                      <Link to={`/news/${mydata.id}`}>
                        <h2 className='w-3/4'>
                          <span className="text-neutral-800 hover:bg-green-950 hover:text-white font-serif w-full font-semibold">
                            {mydata.title.slice(0, 50)}
                          </span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1>not found</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;



// const NewsDetail = () => {
//   const { id } = useParams();
//   const [category, setCategory] = useState(null);

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/news/${id}/`);
//         if (response.ok) {
//           const data = await response.json();
        
//           setCategory(data);
//         } else {
//           console.error('Category not found');
//         }
//       } catch (error) {
//         console.error('Error fetching category:', error);  
//       }
//     };

//     fetchCategory();
//   }, [id]);


//   const [item, setcatdata] = useState([])

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/news/')
//       .then(response => {
//         setcatdata(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the categories!", error);
//       });
//   }, []);

//   if (!category) return <p>Loading...</p>;

//   return (


//     <>
// <div>
// <div className='lg:grid lg:grid-cols-3 gap-4 my-3 pb-2'>
//       <div className='lg:col-span-2  h-full'>
  
     
//    {category.map((data)=>(
//       <>
                     
                      
                  
                        
//                       <div className=''>
//                       <img  src={`http://127.0.0.1:8000/${data.image}`} className='mb-3 w-full' alt="" />
//                       </div>
                      
//                       <h1 className=' font-sans font-semibold  text-neutral-800 text-2xl m-2' >{data.title}</h1>
//                       <h2 className=' font-sans font-semibold text-sm text-neutral-800'>{data.description}</h2>
                      
                      
//                     </>
//     )
//    )}
//     {/* </div> */}
//      </div> 
//      <div className=''>
//      {item ? (
//             <>
//               {item.slice(1, 20).map((data) => {
//                 return (
//                   <div key={data.id} className='flex gap-3 lg:w-full m-2'>
//                     <div className='h-2/5 w-2/3 lg:w-2/3'>
//                       <img src={`http://127.0.0.1:8000/${data.image}`} className='h-32' alt="" />
//                     </div>
//                     <div className='mx-2 w-4/5'>
//                       <Link to={`/news/${data.id}`}>
//                         <h2>
//                           <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">
//                             {data.title.slice(0, 50)}
//                           </span>
//                         </h2>
//                       </Link>
//                     </div>
//                   </div>
//                 )
//               })}
//             </>
//           ) : (
//             <h1>not found</h1>
//           )}

//      </div>
//      </div> 
// </div>
   
    
    
//     </>
//   );
// };

// export default NewsDetail;
