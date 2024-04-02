

import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'

export default function MainLayout() {
  return (
    <div className="flex mt-8 ml-[20px] mr-[30px] ">
        
        <div className="">
           <Sidebar /> 
        </div >

        <div className='pl-6'>
           <Home /> 
        </div>
  </div>
  )
}
