
import React, { createContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
const [data, setCategories] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchCategories = async () => {
    let { data, error } = await supabase
      .from('news')
      .select();

    if (error) {
      console.error('Error fetching categories:', error);
      setError(error)
    } else {
      console.log(data)
      setCategories(data);
    }
    setLoading(false);
  };

  fetchCategories();
}, []);
if (loading) return <p>Loading categories...</p>;
  return (
    <DataContext.Provider value={{data,loading,error}}>
      {children}
    </DataContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { supabase } from './supabaseClient';

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await supabase
//         .from('News')
//         .select(`id,title,description,image`)
//         .eq('id')
//         .single(); // Replace with your API endpoint
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, loading, error }}>
//       {children}
//     </DataContext.Provider>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       let { data, error } = await supabase
//         .from('news')
//         .select();

//       if (error) {
//         console.error('Error fetching categories:', error);
//       } else {
//         console.log(data)
//         setCategories(data);
//       }
//       setLoading(false);
//     };

//     fetchCategories();
//   }, []);

//   if (loading) return <p>Loading categories...</p>;

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map((category) => (
        
//   <> 
//           <li key={category.id}>{category.name}</li>
//           <div>
//             <img src={category.image} alt="" />
//           </div>
//   </>
     
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;
