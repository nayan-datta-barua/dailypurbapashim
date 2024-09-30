import React, { useEffect, useState } from 'react';
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CategoryDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   // Filter the news items for category with id 3
  //   if (catdata) {
  //     console.log(id);
  //     const categoryNewsall = catdata.filter(newsItem => newsItem.category.id === id);
  //     setCategory(categoryNewsall); // Set the filtered news data
  //     console.log("Filtered news for category 3:", categoryNewsall);
  //   }
  // }, [catdata]);

  useEffect(() => {
    const fetchCategorydata = async () => {
      console.log(id);
      try {
        let { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('category', id);
        // .from('news')
        // .select('*, category(id)')
        // .eq('category.id', id); 


        console.log(data);
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

    fetchCategorydata();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='lg:w-2/5 mt-3 mb-12 lg:flex gap-4 p-2'>
        {category.map((data) => {
          return (
            <div key={data.id} className='mb-4 w-5/6 lg:w-full'>
              <img
                src={`${data.image}`}
                className='w-full h-56 mb-3'
                alt=""
              />
              <Link to={`/news/${data.id}`}>
                <span className="text-neutral-800 hover:bg-green-950 hover:text-white m-1 font-serif text-center text-xl  font-semibold">
                  {data.title.slice(0, 50)}
                  {data.id}
                </span>
              </Link>
              <Link to={`/news/${data.id}`}>
                <h1><span className="text-neutral-800 font-serif hover:bg-green-950 hover:text-white">
                  {data.description.slice(0, 150)}
                </span></h1>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryDetail;











// const CategoryDetail = () => {
//   const { id } = useParams();
//   const [category, setCategory] = useState(null);



//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/category/${id}/`);
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

//   if (!category) return <p>Loading...</p>;

//   return (
   

//     <>
    
//      <div className='lg:w-2/5 mt-3 mb-12 lg:flex gap-4 p-2'>
     
//    {category.map((data,id)=>{
//     return(
//       <>
//                       <div className='mb-4'>
                     
//                       <img src={`http://127.0.0.1:8000/${data.image}`} className='w-full h-56 mb-3' alt="" />
//                       <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white m-1 font-mono text-center size-7 font-semibold">{data.title.slice(0,50)}</span></Link>
//                       <Link to={`/news/${data.id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{data.description.slice(0,150)}</span></Link>
                      
//                       </div>
//                     </>
//     )
//    })}
//     </div>
   
    
    
//     </>
//   );
// };

// export default CategoryDetail;
