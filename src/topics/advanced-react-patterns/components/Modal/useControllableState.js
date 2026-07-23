import {
    useState
} from "react";


function useControllableState({
    value,
    defaultValue,
    onChange,
}) {


    const [
        internalValue,
        setInternalValue
    ] = useState(defaultValue);



    const isControlled =
        value !== undefined;



    const state =
        isControlled
            ? value
            : internalValue;



    function setState(
        nextValue
    ) {


        if(isControlled){

            onChange?.(
                nextValue
            );

        }
        else {

            setInternalValue(
                nextValue
            );

            onChange?.(
                nextValue
            );

        }

    }



    return [
        state,
        setState
    ];

}


export default useControllableState;