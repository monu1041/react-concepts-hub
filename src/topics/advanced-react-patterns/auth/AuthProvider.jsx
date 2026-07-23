import {
    useMemo,
    useState,
} from "react";

import AuthContext from "./AuthContext";

function AuthProvider({

    children,

}) {

    const [
        user,
        setUser,
    ] = useState(null);

    const [
        loading,
        setLoading,
    ] = useState(false);



    async function login(

        email,
        password,

    ) {

        setLoading(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 1000)
        );

        const fakeUser = {

            id: 1,

            name: "John Doe",

            email,

            role: "admin",

        };

        setUser(fakeUser);

        setLoading(false);

        return fakeUser;

    }



    function logout() {

        setUser(null);

    }



    const value = useMemo(() => ({

        user,

        loading,

        login,

        logout,

    }), [

        user,

        loading,

    ]);



    return (

        <AuthContext.Provider

            value={value}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;