import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoutes = () => {
    const [auth, setAuth] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const url = "http://localhost:8080/checkAuth";
        console.log("Fetch steht bevor (Private Route)");
        fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({ token }) // Token im Body senden
        })
        .then(response => response.json())  
        .then(isValid => {
            if (isValid) {
                console.log("Token ist gültig");
                setAuth(true);
            } else {
                console.log("Token ist ungültig");
                setAuth(false);
            }
        })
        .catch(error => {
            console.log("JSON parse ist gescheitert (Private route)");
            console.error("Fehler:", error);
            setAuth(false);
        })
        .finally(() => {
            setIsPending(false);
        });
    }, []);

    if (isPending) {
        return <div>Loading...</div>;
    }

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
