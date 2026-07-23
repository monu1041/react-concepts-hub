import {
    useModalContext
}
from "../../context/ModalContext";



function ModalClose({

    children

}) {


    const {
        close
    }
    =
    useModalContext();




    return (

        <button

            type="button"

            className="modal-close"

            onClick={close}

        >

            {children}

        </button>

    );

}



export default ModalClose;