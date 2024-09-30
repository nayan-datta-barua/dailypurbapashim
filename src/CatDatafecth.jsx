import React, { createContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export const CatDataContext = createContext();

export const CatDataProvider = ({ children }) => {
  const [catdata, setcatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news data along with category data using a join
        const { data, error } = await supabase
          .from('news')
          .select('*, category(id, name)'); // Assuming 'category' is the foreign key in 'news'

        if (error) throw error;

        setcatData(data); // Set the fetched news and category data
        console.log("Fetched news with category data:", data);
        console.log(data[2]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CatDataContext.Provider value={{ catdata, loading, error }}>
      {children}
    </CatDataContext.Provider>
  );
};
