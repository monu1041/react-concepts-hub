import { useAuthContext } from "./AuthContext";

function useAuth() {
    return useAuthContext();
}

export default useAuth;