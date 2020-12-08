import React from 'react';
import { Button } from '@chakra-ui/react';

export function LandingPage( props ) {
    //const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    const login = () => window.location.href = 'https://italianhubot-dashboard-backend.herokuapp.com:3001/api/auth/discord';
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >
            Discord Login
        </Button>
    );
}
