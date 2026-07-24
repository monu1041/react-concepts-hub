var e=`/*\r
    Advanced React Patterns\r
    Modal Component Styles\r
*/\r
\r
#advanced-react-patterns-modal-root {\r
    position: relative;\r
    z-index: 1;\r
}\r
/*\r
    Trigger\r
*/\r
\r
.advanced-react-patterns .modal-trigger {\r
    padding: 10px 18px;\r
    border: none;\r
    border-radius: 8px;\r
    background: #2563eb;\r
    color: white;\r
    cursor: pointer;\r
    font-size: 15px;\r
}\r
\r
.advanced-react-patterns .modal-trigger:hover {\r
    background: #1d4ed8;\r
}\r
/*\r
    Overlay\r
*/\r
\r
#advanced-react-patterns-modal-root .modal-overlay {\r
    position: fixed;\r
    inset: 0;\r
    width: 100vw;\r
    height: 100vh;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    background:rgba(0, 0, 0, 0.55);\r
    z-index: 1;\r
}\r
/*\r
    Modal Content\r
*/\r
#advanced-react-patterns-modal-root .modal-content {\r
    width: min(90vw, 450px);\r
    background: white;\r
    border-radius: 14px;\r
    padding: 24px;\r
    box-shadow: 0 25px 60px\r
        rgba(0, 0, 0, 0.25\r
        );\r
\r
    animation:\r
        modal-show\r
        0.2s ease;\r
}\r
\r
#advanced-react-patterns-modal-root .modal-header {\r
    font-size: 20px;\r
    font-weight: 600;\r
    margin-bottom: 12px;\r
}\r
\r
#advanced-react-patterns-modal-root .modal-body {\r
    color: #4b5563;\r
    line-height: 1.5;\r
}\r
\r
#advanced-react-patterns-modal-root .modal-footer {\r
    display: flex;\r
    justify-content: flex-end;\r
    gap: 12px;\r
    margin-top: 24px;\r
}\r
\r
#advanced-react-patterns-modal-root .modal-close {\r
    padding: 8px 16px;\r
    border: 1px solid #d1d5db;\r
    background: white;\r
    border-radius: 8px;\r
    cursor: pointer;\r
}\r
\r
#advanced-react-patterns-modal-root .modal-close:hover {\r
    background: #f3f4f6;\r
}\r
\r
@keyframes modal-show {\r
    from {\r
        opacity: 0;\r
        transform:\r
            translateY(-15px)\r
            scale(.96);\r
    }\r
    to {\r
        opacity: 1;\r
        transform:\r
            translateY(0)\r
            scale(1);\r
    }\r
}`;export{e as default};