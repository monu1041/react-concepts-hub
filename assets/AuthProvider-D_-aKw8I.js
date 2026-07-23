var e=`import {\r
    useMemo,\r
    useState,\r
} from "react";\r
\r
import AuthContext from "./AuthContext";\r
\r
function AuthProvider({\r
\r
    children,\r
\r
}) {\r
\r
    const [\r
        user,\r
        setUser,\r
    ] = useState(null);\r
\r
    const [\r
        loading,\r
        setLoading,\r
    ] = useState(false);\r
\r
\r
\r
    async function login(\r
\r
        email,\r
        password,\r
\r
    ) {\r
\r
        setLoading(true);\r
\r
        await new Promise((resolve) =>\r
            setTimeout(resolve, 1000)\r
        );\r
\r
        const fakeUser = {\r
\r
            id: 1,\r
\r
            name: "John Doe",\r
\r
            email,\r
\r
            role: "admin",\r
\r
        };\r
\r
        setUser(fakeUser);\r
\r
        setLoading(false);\r
\r
        return fakeUser;\r
\r
    }\r
\r
\r
\r
    function logout() {\r
\r
        setUser(null);\r
\r
    }\r
\r
\r
\r
    const value = useMemo(() => ({\r
\r
        user,\r
\r
        loading,\r
\r
        login,\r
\r
        logout,\r
\r
    }), [\r
\r
        user,\r
\r
        loading,\r
\r
    ]);\r
\r
\r
\r
    return (\r
\r
        <AuthContext.Provider\r
\r
            value={value}\r
\r
        >\r
\r
            {children}\r
\r
        </AuthContext.Provider>\r
\r
    );\r
\r
}\r
\r
export default AuthProvider;`;export{e as default};