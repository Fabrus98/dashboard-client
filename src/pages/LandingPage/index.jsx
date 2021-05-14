import React from 'react';
import { Button } from '@chakra-ui/react';

export function LandingPage( props ) {
    //const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
    const login = () => window.location.href = 'https://italianhubot.it:2053/api/auth/discord';
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >
            Discord Login
        </Button>
    );
}
