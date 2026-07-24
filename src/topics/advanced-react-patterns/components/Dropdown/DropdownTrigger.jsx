import { useDropdownContext } from "../../context/DropdownContext";

function DropdownTrigger({ children }) {
    const { open, toggle } = useDropdownContext();

    function handleKeyDown(event) {
        if (
            event.key === "Enter"
            ||
            event.key === " "
            ||
            event.key === "ArrowDown"
        ) {
            event.preventDefault();
            toggle();
        }
    }

    return (
        <button
            type="button"
            className="dropdown-trigger"
            aria-haspopup="menu"
            aria-expanded={ open }
            onClick={ toggle
            }

            onKeyDown={
                handleKeyDown
            }
        >
            {children}
        </button>
    );
}

export default DropdownTrigger;