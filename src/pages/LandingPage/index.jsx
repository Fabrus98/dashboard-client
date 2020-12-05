import React from 'react';
import { Button } from '@chakra-ui/react';
import { domain } from '../../../../dashboard-backend/src/config.json';

export function LandingPage( props ) {
    const login = () => window.location.href = 'https://italianhubot-dashboard.herokuapp.com/api/auth/discord';
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >
            Discord Login
        </Button>
    );
}
