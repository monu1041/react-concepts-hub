var e=`import { useMemo, useState, } from "react";\r
import AuthContext from "./AuthContext";\r
\r
function AuthProvider({ children, }) {\r
\r
    const [user, setUser,] = useState(null);\r
    const [ loading, setLoading,] = useState(false);\r
\r
    async function login(\r
        email,\r
        password,\r
    ) {\r
        setLoading(true);\r
        await new Promise((resolve) =>\r
            setTimeout(resolve, 1000)\r
        );\r
\r
        const fakeUser = {\r
            id: 1,\r
            name: "John Doe",\r
            email,\r
            role: "admin",\r
        };\r
        setUser(fakeUser);\r
        setLoading(false);\r
        return fakeUser;\r
    }\r
\r
    function logout() {\r
        setUser(null);\r
    }\r
\r
    const value = useMemo(() => ({\r
        user,\r
        loading,\r
        login,\r
        logout,\r
    }), [\r
        user,\r
        loading,\r
    ]);\r
\r
    return (\r
        <AuthContext.Provider\r
            value={value}\r
        >\r
            {children}\r
        </AuthContext.Provider>\r
    );\r
}\r
\r
export default AuthProvider;`;export{e as default};