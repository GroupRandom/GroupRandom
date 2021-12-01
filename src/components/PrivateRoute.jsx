import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div>
        
        
        
        </div>


    )



}

export default PrivateRoute