var e=`import { createContext, useContext } from "react";\r
\r
const AuthContext = createContext(null);\r
\r
export function useAuthContext() {\r
    const context = useContext(AuthContext);\r
\r
    if (!context) {\r
        throw new Error(\r
            "useAuth must be used inside AuthProvider."\r
        );\r
    }\r
    return context;\r
}\r
\r
export default AuthContext;`;export{e as default};