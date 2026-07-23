var e=`import {\r
    createContext,\r
    useContext\r
} from "react";\r
\r
const AuthContext =\r
    createContext(null);\r
\r
export function useAuthContext() {\r
\r
    const context =\r
        useContext(AuthContext);\r
\r
    if (!context) {\r
\r
        throw new Error(\r
            "useAuth must be used inside AuthProvider."\r
        );\r
\r
    }\r
\r
    return context;\r
\r
}\r
\r
export default AuthContext;`;export{e as default};