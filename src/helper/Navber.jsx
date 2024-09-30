import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import logo1 from '..//assets/logo.png'
import axios from 'axios';
import { useContext } from "react"
import { Link } from 'react-router-dom';

import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { supabase } from '../supabaseClient';

const Navber = () => {

  const [showHeader, setShowHeader] = useState(true);
    const [scrollHeight, setScrollHeight] = useState(0);

   const [nav, setNav] = useState(0);
  

   const handleNav = () => {
    setNav(!nav);
  };

  const [item, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

        const fetchCategories = async () => {
      let { data, error } = await supabase
        .from('category')
        .select();

      if (error) {
        console.error('Error fetching categories:', error);
      } else {
        console.log("nayan");
        console.log(data)
        setCategories(data);
      }
      setLoading(false);
    };

    fetchCategories();
    // axios.get('http://127.0.0.1:8000/categoryname/')
    //   .then(response => {
    //     setCategories(response.data);
    //   })
    //   .catch(error => {
    //     console.error("There was an error fetching the categories!", error);
    //   });
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



 

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setShowHeader(visible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <>
    <div className={`${scrollHeight > 22 ? 'h-20 bg-white fixed' : 'h-20 bg-white pt-4 lg:pt-4'} mt-2 inset-0 border-b-2 border-green-800 container sticky items-center justify-between lg:flex-wrap lg:justify-start lg:py-2`}>
    <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div onClick={handleNav} className="cursor-pointer  justify-between  ">
         <FaBars size={28} className='text-neutral-700' />
        </div>
        
     <div
      className={
        nav
          ? "fixed right-100 top-0 w-60 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
          : "fixed left-[100%] top-0 w-58 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
      }
    >
          <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="cursor-pointer">
          <AiOutlineClose size={25} />
        </div>
      </div>
      <ul className="flex-col gap-9 mt-10">
      <li className="text-black font-serif"> 
      <Link to={`/`}>
            <span className="text-[1rem] m-2 text-neutral-800 hover:bg-green-950 hover:text-white">
              <button className='font-serif font-medium text-xl' type="button">সারাদেশ</button>
            </span>
          </Link>
          
                      </li>

                      {item.map((categoryItems) => (
            <React.Fragment key={categoryItems.id}>
              <button className='font-serif font-medium text-xl m-2'>
                <Link to={`/category/${categoryItems.id}`}>
                  <span className="text-neutral-800 hover:bg-green-950 hover:text-white">{categoryItems.name}</span>
                </Link>
              </button>

              {/* Display the separator "||" except for the last item */}
              {/* {categoryItems.id !== item[item.length - 1].id && (
                <span className="mx-2 text-[1rem] text-neutral-800">||</span>
              )} */}
            </React.Fragment>
          ))}

                      {/* <li className="text-black font-serif">
                          <NavLink  className=" " to= "/item">পছন্দ</NavLink></li>
                      <li className="text-black font-serif">
                          <NavLink  className=" " to= "/about">প্রক্রিয়া</NavLink></li>

                      <li className="text-black font-serif">
                          <NavLink  className=" " to= "/opinion">মন্তব্য
                          </NavLink></li>
                      <li className="text-black font-serif">
                          <NavLink className=" " to="/contuct">যোগাযোগ</NavLink></li> */}
                  
                  </ul>
                  <div className='lg:flex items-center justify-center gap-2'> 
       
      
       
   
    
    
            
            </div>
            </div>

        <a className="items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
  href="#">
 <img src={logo1} className="h-10" alt=" Logo"
      loading="lazy" />
</a>
   


 <div className='flex'>

     <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <FaFacebookF className='m-2 size-6 h-[20px] text-neutral-800' />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <IoLogoYoutube className='m-2 size-6 h-[20px] text-neutral-800' />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <FaLinkedin className='m-2 size-6 h-[20px] text-neutral-800' />
      </a>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <FaInstagramSquare className='m-2 size-6 h-[20px] text-neutral-800' />
      </a>
    
     <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      
      >
        <FaTwitter className='m-2 size-6 h-[20px] text-neutral-800' />
      </a>
 </div>

   </div>

    <div className='' >
<span className="text-[1rem] text-neutral-500 ">{currentDate}</span>
       <span className="mx-2 text-[1rem] text-neutral-500">|</span>
       <span className='text-[1rem] text-neutral-500'>{currentTime}</span>
</div>
  
  </div>
  
     
    
    </>
  )
}

export default Navber

// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import logo from '../assets/logo.png'

// import { FaBars } from "react-icons/fa";
// import {
//   AiOutlineClose,
//   AiOutlineInstagram,
//   AiOutlineFacebook,
//   AiOutlineTwitter,
// } from "react-icons/ai";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FaTwitter } from "react-icons/fa";
// import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


// const Navber = () => {

//   const [scrollHeight, setScrollHeight] = useState(0);

//    const [nav, setNav] = useState(0);
  

//    const handleNav = () => {
//     setNav(!nav);
//   };


//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollHeight(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>

// <div className={`${scrollHeight > 20 ? 'h-12 bg-orange-100 pt-2 ' : 'h-20  pt-4 lg:pt-8'}  top-0 left-0 w-full z-50 container mx-auto sticky  gap-2`}>

//   <div className='grid grid-cols-3 lg:justify-center justify-between items-center'> 
//   <img src={logo} className='h-[40px] w-[40px]' alt="" />
//   <div className='hidden lg:flex items-center justify-center'> 
//   <ul className=" flex lg:gap-4 mb-2 mb-lg-0 bg-while items-center">
                      
//   <li className="text-black font-serif"> 
//                           <NavLink  className=" " to="/">হোম</NavLink>
//                       </li>
//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/item">পছন্দ</NavLink></li>
//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/about">প্রক্রিয়া</NavLink></li>

//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/opinion">মন্তব্য
//                           </NavLink></li>
//                       <li className="text-black font-serif">
//                           <NavLink className=" " to="/contuct">যোগাযোগ</NavLink></li>
            
                  
//                   </ul>

//   </div>
  
//         <div onClick={handleNav} className="sm:hidden  cursor-pointer  justify-between  pl-[140%] ">
//          <FaBars size={25} />
//        </div>
      

//   </div>

//      <div
//       className={
//         nav
//           ? "fixed right-100 top-0 w-60 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
//           : "fixed left-[100%] top-0 w-58 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
//       }
//     >
//           <div className="flex w-full items-center justify-end">
//         <div onClick={handleNav} className="cursor-pointer">
//           <AiOutlineClose size={25} />
//         </div>
//       </div>
//       <ul className=" flex flex-col gap-9 mt-10">
//       <li className="text-black font-serif"> 
//                           <NavLink  className=" " to="/">হোম</NavLink>
//                       </li>
//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/item">পছন্দ</NavLink></li>
//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/about">প্রক্রিয়া</NavLink></li>

//                       <li className="text-black font-serif">
//                           <NavLink  className=" " to= "/opinion">মন্তব্য
//                           </NavLink></li>
//                       <li className="text-black font-serif">
//                           <NavLink className=" " to="/contuct">যোগাযোগ</NavLink></li>
                  
//                   </ul>
//                   <div className='lg:flex items-center justify-center gap-2'> 
       
      
       
   
    
    
            
//             </div>
   
// </div>



    



    
//     </div>

       
//     </>
       
       
//   )
// }

// export default Navber



{/* <div className='lg:flex justify-between p-2 mt-2 items-center bg-green-800'>
<div><img src={logo} className='h-[40px] w-[40px]' alt="" /></div>
<div className='hidden lg:flex items-center justify-center'> 
<ul className=" flex lg:gap-4 mb-2 mb-lg-0 bg-while items-center">
                  
<li className='text-white font-sans font-semibold hover:text-red-600'> <NavLink>Home</NavLink></li>
<li className='text-black font-sans font-semibold hover:text-green-950'> <NavLink>Home</NavLink></li>
<li className='text-black font-sans font-semibold hover:text-green-950'> <NavLink>Home</NavLink></li>
<li className='text-black font-sans font-semibold hover:text-green-950'> <NavLink>Home</NavLink></li>
        
              
              </ul>

</div>
<div className='flex items-center'>

<div className='bg-slate-100 items-center rounded-full lg:m-2'><FontAwesomeIcon className='sm:h-[10px] lg:h-[20px] p-2 '  icon={faUserSecret} /></div>
<div className='bg-black items-center rounded-full lg: m-2'><FontAwesomeIcon className='sm:h-[10px] lg:h-[20px] p-2' icon={faFacebook} /></div>
<div className='bg-black items-center rounded-full lg: m-2'><FontAwesomeIcon className='sm:h-[10px] lg:h-[20px] p-2' icon={faYoutube} /></div>
<div className='bg-black items-center rounded-full lg: m-2'><FontAwesomeIcon className='sm:h-[10px] lg:h-[20px] p-2' icon={faTwitter} /></div>
<div className='bg-black items-center rounded-full lg: m-2'><FontAwesomeIcon className='sm:h-[10px] lg:h-[20px] p-2' icon={faInstagram} /></div>
<FaTwitter className='m-2 size-6 h-[20px] text-neutral-800'/>





</div>

</div> */}


// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import logo from '../assets/logo.png'
// import { Button } from "@material-tailwind/react";
// import { auth } from '../firebase/setup'
// import { signOut }  from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import { FaBars } from "react-icons/fa";
// import {
//  AiOutlineClose,
//  AiOutlineInstagram,
//  AiOutlineFacebook,
//  AiOutlineTwitter,
// } from "react-icons/ai";




// const Navbar = () => {
//      const [scrollHeight, setScrollHeight] = useState(0);

// const [nav, setNav] = useState(0);
//     const navigate  = useNavigate()

//   const logout =async()=>{
//         try{
//           await signOut(auth)
//           navigate('/')

//       }catch(err){
//           console.error(err)

//       }
//   }

//   const handleNav = () => {
//          setNav(!nav);

//       };
  

//    useEffect(() => {
//          const handleScroll = () => {
//            setScrollHeight(window.scrollY);

//         };
  
//    window.addEventListener('scroll', handleScroll);
  
//        return () => {
//                window.removeEventListener('scroll', handleScroll);

//             };
//          }, []);
//         return (
// <>

// <div className={`${scrollHeight > 20 ? 'h-12 bg-orange-100 pt-2 ' : 'h-20  pt-4 lg:pt-8'}  top-0 left-0 w-full z-50 container mx-auto sticky  gap-2`}>

// <div className='grid grid-cols-3 lg:justify-center justify-between items-center'> 
//   <img src={logo} className='h-[40px] w-[40px]' alt="" />
//   <div className='hidden lg:flex items-center justify-center'> 
//   <ul className=" flex lg:gap-4 mb-2 mb-lg-0 bg-while items-center">
                      
//                        <li className="text-black font-serif"> 
//                                                  <NavLink  className=" " to="/">হোম</NavLink>
//                                             </li>
//                                             <li className="text-black font-serif">
//                                                  <NavLink  className=" " to= "/item">পছন্দ</NavLink></li>
//                                             <li className="text-black font-serif">
//                                                  <NavLink  className=" " to= "/about">প্রক্রিয়া</NavLink></li>

//                      <li className="text-black font-serif">
//                                                <NavLink  className=" " to= "/opinion">মন্তব্য
//                                               </NavLink></li>
//                                           <li className="text-black font-serif">
//                                                <NavLink className=" " to="/contuct">যোগাযোগ</NavLink></li>
            
                  
//                                    </ul>

//  </div>
//   <div className='hidden lg:flex items-center justify-center gap-2'> 
//    { auth.currentUser?(<button
//           type="button"
//           className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//         >
//            {auth.currentUser.email}
//            {/* {auth.currentUser.displayName} */}
//          </button>) : 
        
//         ( "")
//                      }
   
// {auth.currentUser? <button onClick={logout}
//          type="button"
//          className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//        >
//            Logout
//          </button> :
  
//   <NavLink to='/sing-in'>
//      <button
//             type="button"
//             className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//           >
//              SingUp
//           </button>
// </NavLink>}

//        </div> 
//               <div onClick={handleNav} className="sm:hidden  cursor-pointer  justify-between  pl-[140%] ">
//                 <FaBars size={25} />
//              </div>
      

//  </div>

// <div
//          className={
//              nav
//              ? "fixed right-100 top-0 w-60 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
//              : "fixed left-[100%] top-0 w-58 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"

//          }
//        >
//                <div className="flex w-full items-center justify-end">
//              <div onClick={handleNav} className="cursor-pointer">
//                <AiOutlineClose size={25} />
//            </div>
//          </div>
//          <ul className=" flex flex-col gap-9 mt-10">
//            <li className="text-black font-serif"> 
//                              <NavLink  className=" " to="/">হোম</NavLink>
//                          </li>
//                          <li className="text-black font-serif">
//                                <NavLink  className=" " to= "/item">পছন্দ</NavLink></li>
//                          <li className="text-black font-serif">
//                                <NavLink  className=" " to= "/about">প্রক্রিয়া</NavLink></li>

//                      <li className="text-black font-serif">
//                                                <NavLink  className=" " to= "/opinion">মন্তব্য
//                                               </NavLink></li>
//                                           <li className="text-black font-serif">
//                                                <NavLink className=" " to="/contuct">যোগাযোগ</NavLink></li>
                  
//                                    </ul>
//                                                     <div className='lg:flex items-center justify-center gap-2'> 
       
//              { auth.currentUser?<button
//                           type="button"
//                           className="inline-block rounded max-w-full px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//                         >
//                            {auth.currentUser.email}
//                            {/* {auth.currentUser.displayName} */}
//                          </button> : 
            
//             ""
//                                   }
       
//           {auth.currentUser? <button onClick={logout}
//                        type="button"
//                        className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//                      >
//                          Logout
//                        </button> :
      
//       <NavLink to='/sing-in'>
//                  <button
//                         type="button"
//                         className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
//                       >
//                          SingUp
//                       </button>
//               </NavLink>}
    
    
            
//                        </div>
   
// </div>



    



    
// </div>
   
// </>
   

// )
// }

// export default Navbar

   





