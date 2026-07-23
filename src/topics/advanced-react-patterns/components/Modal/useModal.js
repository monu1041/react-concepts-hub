import {
    useState
} from "react";


function useModal(
    defaultOpen = false
) {


    const [
        open,
        setOpen
    ] = useState(defaultOpen);




    function openModal(){

        setOpen(true);

    }



    function closeModal(){

        setOpen(false);

    }



    function toggleModal(){

        setOpen(
            previous =>
                !previous
        );

    }



    return {

        open,

        setOpen,

        openModal,

        closeModal,

        toggleModal,

    };

}


export default useModal;