import {
    createContext,
    useContext
} from "react";


const DropdownContext =
    createContext(null);



export function useDropdownContext() {

    const context =
        useContext(
            DropdownContext
        );


    if (!context) {

        throw new Error(
            "Dropdown components must be used inside Dropdown"
        );

    }


    return context;

}



export default DropdownContext;