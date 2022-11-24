import React, {useEffect, useState} from "react";



const DomainContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
    name: 'Guest',
});