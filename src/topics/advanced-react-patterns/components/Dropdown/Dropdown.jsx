import {
    useMemo,
    useRef
} from "react";


import "./dropdown.css";


import DropdownContext
from "../../context/DropdownContext";


import useDropdown
from "./useDropdown";



function Dropdown({

    children,

    open,

    defaultOpen = false,

    onOpenChange

}) {


    const dropdown =
        useDropdown({

            open,

            defaultOpen,

            onOpenChange

        });





    const itemRefs =
        useRef([]);





    function registerItem(item) {


        const exists =
            itemRefs.current.some(

                existing =>
                    existing.value === item.value

            );



        if (!exists) {

            itemRefs.current.push(
                item
            );

        }

    }





    function unregisterItem(value) {


        itemRefs.current =
            itemRefs.current.filter(

                item =>
                    item.value !== value

            );

    }





    const contextValue =

        useMemo(

            () => ({

                ...dropdown,

                itemRefs,

                registerItem,

                unregisterItem

            }),

            [
                dropdown.open
            ]

        );






    return (

        <DropdownContext.Provider

            value={
                contextValue
            }

        >

            <div className="dropdown">

                {children}

            </div>


        </DropdownContext.Provider>

    );

}



export default Dropdown;