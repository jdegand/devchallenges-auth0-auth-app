import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const FirstLoad = () => {

    const { loginWithRedirect } = useAuth0();

    useEffect(()=> {
        loginWithRedirect()
    }, [])


    return(
        <div>Loading...</div>
    )
} 

export default FirstLoad