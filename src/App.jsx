import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import React from 'react'
import './App.css'
import MainLayout from './Layoutpage/MainLayout'
import HomePage from './pages/HomePage'
import { DataProvider } from './FatchData.jsx';
import { CatDataProvider } from './CatDatafecth.jsx'
import CategoryDetail from './components/CategoryDetail.jsx'
import NewsDetail from './components/NewsDetails.jsx'
import MenuPage from './pages/MenuPage'
import ReactDOM from 'react-dom/client';
import PrivacyPolicy from './helper/PrivacyPolicy.jsx'
import TarmsandCondition from './helper/TarmsandCondition.jsx'
// import AboutPage from './pages/AboutPage'
// import SingIn from './pages/SingIn'

function App() {
const router = createBrowserRouter( 
  createRoutesFromElements( 

    <Route path='/'  element = {<MainLayout/>}> 
    <Route path="/category/:id" element={<CategoryDetail />} />
    <Route path="/news/:id" element={<NewsDetail />} />
   <Route index element={<HomePage/>}/>
   <Route exact path='/privicy' element={<PrivacyPolicy />}/> 
   <Route exact path='/menu' element={<MenuPage/>}/>  
   <Route exact path='/tarms' element={<TarmsandCondition />}/>
      
   
   

   {/* <Route exact path='/opinion' element={<OpinionPage />}/>
   <Route exact path='/contuct' element={<ContuctPage />}/>
   <Route exact path='/item' element={<ItemPage />}/>
   <Route exact path='/menu' element={<MenuPage />}/>
   <Route exact path='/about' element={<AboutPage />}/>
   <Route path='/sing-in' element={<SingIn/>}/> */}
   
   

    </Route>
    

  )
)



return (
 <CatDataProvider>
{/* <DataProvider> */}

  <RouterProvider router={router}/>
  
  {/* </DataProvider> */}
  </CatDataProvider>


 

  )
}

export default App

