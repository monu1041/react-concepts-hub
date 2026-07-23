import {
    useEffect,
    useRef,
    useId,
} from "react";

import {
    useTabsContext
} from "../../context/TabsContext";


function TabsTrigger({
    children,
    value,
}) {


    const {
        activeTab,
        setActiveTab,

        registerTrigger,
        unregisterTrigger,

        triggerRefs,

    } = useTabsContext();


    const ref = useRef(null);


    const id = useId();


    const tabId =
        `tab-${id}`;


    const panelId =
        `panel-${id}`;



    const isActive =
        activeTab === value;



    useEffect(() => {

        registerTrigger({
            value,
            ref: ref.current,
        });


        return () => {

            unregisterTrigger(value);

        };


    }, []);



    function handleClick() {

        setActiveTab(value);

    }



    function handleKeyDown(event) {


        const triggers =
            triggerRefs.current;



        const currentIndex =
            triggers.findIndex(
                item =>
                    item.value === value
            );



        if (currentIndex === -1)
            return;



        let nextIndex;



        switch(event.key) {


            case "ArrowRight":

                event.preventDefault();

                nextIndex =
                    (
                        currentIndex + 1
                    )
                    %
                    triggers.length;

                break;



            case "ArrowLeft":

                event.preventDefault();

                nextIndex =
                    (
                        currentIndex -
                        1 +
                        triggers.length
                    )
                    %
                    triggers.length;

                break;



            case "Home":

                event.preventDefault();

                nextIndex = 0;

                break;



            case "End":

                event.preventDefault();

                nextIndex =
                    triggers.length - 1;

                break;



            default:

                return;

        }



        const nextTrigger =
            triggers[nextIndex];



        nextTrigger.ref.focus();


        setActiveTab(
            nextTrigger.value
        );

    }



    return (

        <button

            ref={ref}

            id={tabId}

            type="button"

            role="tab"


            aria-controls={panelId}


            aria-selected={
                isActive
            }


            tabIndex={
                isActive
                    ? 0
                    : -1
            }


            className={
                `tabs-trigger ${
                    isActive
                    ? "active"
                    : ""
                }`
            }


            onClick={
                handleClick
            }


            onKeyDown={
                handleKeyDown
            }

        >

            {children}

        </button>

    );

}


export default TabsTrigger;