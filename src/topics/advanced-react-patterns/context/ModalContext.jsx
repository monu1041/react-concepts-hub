import { createContext, useContext } from "react";

const ModalContext = createContext(null);

export function useModalContext(){
    const context = useContext(ModalContext);
    if(!context){
        throw new Error(
            "Modal components must be used inside <Modal>"
        );
    }
    return context;
}

export default ModalContext;