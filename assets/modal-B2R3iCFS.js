var e=`/*\r
    Advanced React Patterns\r
    Modal Component Styles\r
*/\r
\r
\r
#advanced-react-patterns-modal-root {\r
\r
    position: relative;\r
\r
    z-index: 1;\r
\r
}\r
\r
\r
\r
/*\r
    Trigger\r
*/\r
\r
.advanced-react-patterns .modal-trigger {\r
\r
    padding: 10px 18px;\r
\r
    border: none;\r
\r
    border-radius: 8px;\r
\r
    background: #2563eb;\r
\r
    color: white;\r
\r
    cursor: pointer;\r
\r
    font-size: 15px;\r
\r
}\r
\r
\r
\r
.advanced-react-patterns .modal-trigger:hover {\r
\r
    background: #1d4ed8;\r
\r
}\r
\r
\r
\r
\r
\r
/*\r
    Overlay\r
*/\r
\r
#advanced-react-patterns-modal-root .modal-overlay {\r
\r
    position: fixed;\r
\r
    inset: 0;\r
\r
    width: 100vw;\r
\r
    height: 100vh;\r
\r
    display: flex;\r
\r
    align-items: center;\r
\r
    justify-content: center;\r
\r
    background:\r
        rgba(\r
            0,\r
            0,\r
            0,\r
            0.55\r
        );\r
\r
    z-index: 1;\r
\r
}\r
\r
\r
\r
\r
\r
/*\r
    Modal Content\r
*/\r
\r
#advanced-react-patterns-modal-root .modal-content {\r
\r
    width:\r
        min(\r
            90vw,\r
            450px\r
        );\r
\r
    background: white;\r
\r
    border-radius: 14px;\r
\r
    padding: 24px;\r
\r
    box-shadow:\r
        0 25px 60px\r
        rgba(\r
            0,\r
            0,\r
            0,\r
            0.25\r
        );\r
\r
    animation:\r
        modal-show\r
        0.2s ease;\r
\r
}\r
\r
\r
\r
\r
\r
#advanced-react-patterns-modal-root .modal-header {\r
\r
    font-size: 20px;\r
\r
    font-weight: 600;\r
\r
    margin-bottom: 12px;\r
\r
}\r
\r
\r
\r
\r
\r
#advanced-react-patterns-modal-root .modal-body {\r
\r
    color: #4b5563;\r
\r
    line-height: 1.5;\r
\r
}\r
\r
\r
\r
\r
\r
#advanced-react-patterns-modal-root .modal-footer {\r
\r
    display: flex;\r
\r
    justify-content: flex-end;\r
\r
    gap: 12px;\r
\r
    margin-top: 24px;\r
\r
}\r
\r
\r
\r
\r
\r
#advanced-react-patterns-modal-root .modal-close {\r
\r
    padding: 8px 16px;\r
\r
    border:\r
        1px solid #d1d5db;\r
\r
    background: white;\r
\r
    border-radius: 8px;\r
\r
    cursor: pointer;\r
\r
}\r
\r
\r
\r
\r
\r
#advanced-react-patterns-modal-root .modal-close:hover {\r
\r
    background: #f3f4f6;\r
\r
}\r
\r
\r
\r
\r
\r
@keyframes modal-show {\r
\r
    from {\r
\r
        opacity: 0;\r
\r
        transform:\r
            translateY(-15px)\r
            scale(.96);\r
\r
    }\r
\r
\r
    to {\r
\r
        opacity: 1;\r
\r
        transform:\r
            translateY(0)\r
            scale(1);\r
\r
    }\r
\r
}`;export{e as default};