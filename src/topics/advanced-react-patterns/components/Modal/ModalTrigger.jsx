import { useModalContext } from "../../context/ModalContext";

function ModalTrigger({ children }) {

    const { setOpen } = useModalContext();
    return (
        <button
            type="button"
            onClick={() =>
                setOpen(true)
            }
        >
            {children}
        </button>
    );
}


export default ModalTrigger;