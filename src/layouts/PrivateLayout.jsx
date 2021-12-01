import React, { useEffect} from 'react';
import Sidebar  from '../components/Sidebar';


const PrivateLayout = ( {children}) => {  



    return (
        <div className = 'flex w-screen h-screen' >
            <Sidebar />
            <div className="container"> { children }
            </div>
        </div>


    )

}

export default PrivateLayout