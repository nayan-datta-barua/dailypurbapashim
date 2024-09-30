import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from "react"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CatDataContext } from '../CatDatafecth';
import { supabase } from '../supabaseClient';
const MenuButton = () => {

  const [item, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchcategorydata=async()=>{
      try{
        const { data, error}= await supabase.from('category').select('*');
        if(error){
          console.error('Error fetching news:', error);
        }else{
          setCategories(data);
        }
      }catch(err){
        console.error('Error:', err);
      }finally{
setLoading(false);
      }
    };
    fetchcategorydata();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <> 
      <div className="overflow-x-auto whitespace-nowrap">
        <nav className="flex space-x-2 p-2 inset-0 pb-2 border-b-2 border-green-900">
          <Link to={`/`}>
            <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white">
              <button className='font-serif font-medium text-xl' type="button">সারাদেশ</button>
            </span>
          </Link>

          <span className="mx-2 text-[1rem] text-neutral-800">||</span>

          {item.map((categoryItems) => (
            <React.Fragment key={categoryItems.id}>
              <button className='font-serif font-medium text-xl'>
                <Link to={`/category/${categoryItems.id}`}>
                  <span className="text-neutral-800 hover:bg-green-950 hover:text-white">{categoryItems.name}</span>
                </Link>
              </button>

        
              {categoryItems.id !== item[item.length - 1].id && (
                <span className="mx-2 text-[1rem] text-neutral-800">||</span>
              )}
            </React.Fragment>
          ))}

        </nav>
      </div>
    </>
  );
}

export default MenuButton;


















// const MenuButton = () => {


//   const [item, setCategories] = useState([]);

//   useEffect(() => {
     
//       axios.get('http://127.0.0.1:8000/categoryname/')
//           .then(response => {
//             setCategories(response.data);

//           })
//           .catch(error => {
//               console.error("There was an error fetching the categories!", error);
//           });
//   }, []);
//   return (
//     <> 
//       <div className="overflow-x-auto whitespace-nowrap">
//             <nav className="flex space-x-2 p-2 inset-0 pb-2 border-b-2 border-green-900">
//               <Link to={`/`}><span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">সারাদেশ</button></span></Link>
            
//             <span className="mx-2 text-[1rem] text-neutral-800">||</span>
//               {item.map((categoryItems, slug) => (
//               <>
              
//                <React.Fragment key={slug}>
//                   <button className='font-serif font-medium text-xl' > 
//                 <Link to={`/category/${slug}`}><span key={categoryItems.id} className="text-neutral-800  hover:bg-green-950 hover:text-white">{categoryItems.name}</span></Link>
//             </button>
//                   {slug < item.length - 1 && (
//                       <span className="mx-2 text-[1rem] text-neutral-800">||</span>
//                   )}
//               </React.Fragment>
//               </>
//             ))}

                
   
//             </nav>
//         </div>
   

    
//     </>
//   )
// }

// export default MenuButton


//  <ul>
//                 {categories.map(category => (
//                     <li key={category.id}>
//                         <Link to={`/categories/${category.id}`}>{category.name}</Link>
//                     </li>
//                 ))}
//             </ul> 



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('/api/categories/');  // Assuming you have an endpoint to list all categories
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Category List</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>
//             <Link to={`/category/${category.id}`}>{category.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryList;




 {/* <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">সারাদেশ</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">জাতীয়</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">রাজনীতি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">আইনআদালত</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">রাজধানী</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">অর্থ-ও-বাণিজ্য</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">আন্তর্জাতিক</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">খেলা</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">বিনোদন</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">বিনোদন</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ভিডিও</button></span> */}




     {/* <div className='flex start-0 overflow-x-auto space-x-2 my-2 mb-2 inset-0 pb-2 border-b-2 border-green-900 relative items-center justify-center'> */}
    {/* <div className='flex container'> */}
    
              {/* <Link to={`/category/${id}`}>{categoryItems[0].category.name}</Link> */}
                {/* {categories.map((categoryItems, id) => (
                <button key={id} className='font-serif font-medium text-xl'> 
                  
    
                    <Link to={`/category/${id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{categoryItems[0].category.name}</span></Link>
                    
                </button>
            ))}   */}

{/* {categories.map((categoryItems, id) => (
                <React.Fragment key={id}>
                    <button className='font-serif font-medium text-xl'> 
                  <Link to={`/category/${id}`}><span className="text-neutral-800  hover:bg-green-950 hover:text-white">{categoryItems[0].category.name}</span></Link>
              </button>
                    {id < categories.length - 1 && (
                        <span className="mx-2 text-[1rem] text-neutral-800">||</span>
                    )}
                </React.Fragment>
            ))} */}
            
    {/* <span className="text-neutral-800  hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">প্রচ্ছদ</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">সারাদেশ</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">জাতীয়</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">রাজনীতি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">আইনআদালত</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">রাজধানী</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">অর্থ-ও-বাণিজ্য</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">আন্তর্জাতিক</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">খেলা</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">বিনোদন</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ভিডিও</button></span>
       
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">বিনোদন</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ফটো গ্যালারি</button></span>
    <span className="mx-2 text-[1rem] text-neutral-800">||</span>
    <span className="text-[1rem] text-neutral-800 hover:bg-green-950 hover:text-white"><button className='font-serif font-medium text-xl' type="button">ভিডিও</button></span>
       


    </div>
 */}