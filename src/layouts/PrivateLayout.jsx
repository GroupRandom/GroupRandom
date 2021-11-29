import React from 'react';
import Sidebar  from '../components/Sidebar';

const PrivateLayout = ( {children}) => {  

    return (
        <div className = 'flex w-screen h-screen' >
            <Sidebar />
            <main> { children }</main>
        </div>


    )

}

export default PrivateLayout