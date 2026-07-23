var e=`.advanced-react-patterns * {\r
    box-sizing: border-box;\r
}\r
\r
\r
/* Tabs wrapper */\r
\r
.advanced-react-patterns .tabs {\r
    width: 100%;\r
    max-width: 600px;\r
    margin: 40px auto;\r
    font-family:\r
        Inter,\r
        system-ui,\r
        sans-serif;\r
}\r
\r
\r
\r
/*\r
    Tab buttons container\r
\r
    role="tablist"\r
*/\r
\r
.advanced-react-patterns .tabs-list {\r
\r
    display: flex;\r
\r
    gap: 8px;\r
\r
    padding: 6px;\r
\r
    border-bottom:\r
        1px solid #ddd;\r
\r
}\r
\r
\r
\r
/*\r
    Individual tab button\r
*/\r
\r
.advanced-react-patterns .tabs-trigger {\r
\r
    border: none;\r
\r
    background: transparent;\r
\r
    padding:\r
        10px 18px;\r
\r
    border-radius:\r
        6px 6px 0 0;\r
\r
    cursor: pointer;\r
\r
    font-size: 15px;\r
\r
    color: #555;\r
\r
    transition:\r
        background 0.2s,\r
        color 0.2s;\r
\r
}\r
\r
\r
\r
/*\r
    Hover state\r
*/\r
\r
.advanced-react-patterns\r
.tabs-trigger:hover {\r
\r
    background:\r
        #f3f4f6;\r
\r
}\r
\r
\r
\r
/*\r
    Keyboard focus\r
\r
    Important for accessibility\r
*/\r
\r
.advanced-react-patterns\r
.tabs-trigger:focus-visible {\r
\r
    outline:\r
\r
        3px solid\r
        #2563eb;\r
\r
    outline-offset:\r
        2px;\r
\r
}\r
\r
\r
\r
/*\r
    Active tab\r
*/\r
\r
.advanced-react-patterns\r
.tabs-trigger.active {\r
\r
    color:\r
        #2563eb;\r
\r
    background:\r
        #eff6ff;\r
\r
    font-weight:\r
        600;\r
\r
}\r
\r
\r
\r
/*\r
    Content panel\r
*/\r
\r
.advanced-react-patterns\r
.tabs-content {\r
\r
    padding:\r
        20px;\r
\r
    border:\r
        1px solid #ddd;\r
\r
    border-top:\r
        none;\r
\r
    min-height:\r
        120px;\r
\r
}`;export{e as default};