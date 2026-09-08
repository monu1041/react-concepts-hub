var e=`:root {\r
  font-family:\r
    Inter,\r
    system-ui,\r
    -apple-system,\r
    BlinkMacSystemFont,\r
    "Segoe UI",\r
    sans-serif;\r
\r
  color: #1f2937;\r
  background: #f5f7fb;\r
\r
  font-synthesis: none;\r
  text-rendering: optimizeLegibility;\r
}\r
\r
* {\r
  box-sizing: border-box;\r
}\r
\r
html {\r
  scroll-behavior: smooth;\r
}\r
\r
body {\r
  margin: 0;\r
  min-width: 320px;\r
  min-height: 100vh;\r
}\r
\r
button,\r
input {\r
  font: inherit;\r
}\r
\r
button {\r
  cursor: pointer;\r
}\r
\r
button:disabled {\r
  cursor: not-allowed;\r
  opacity: 0.6;\r
}\r
\r
code {\r
  padding: 2px 6px;\r
  border-radius: 4px;\r
  background: #eef2f7;\r
  font-family: "SFMono-Regular", Consolas, monospace;\r
  font-size: 0.9em;\r
}\r
\r
.app {\r
  min-height: 100vh;\r
}\r
\r
.hero {\r
  padding: 64px 24px;\r
  background: #111827;\r
  color: white;\r
}\r
\r
.hero-content {\r
  width: min(1100px, 100%);\r
  margin: 0 auto;\r
}\r
\r
.eyebrow {\r
  display: inline-block;\r
  margin-bottom: 16px;\r
  color: #93c5fd;\r
  font-size: 14px;\r
  font-weight: 700;\r
  letter-spacing: 0.08em;\r
  text-transform: uppercase;\r
}\r
\r
.hero h1 {\r
  margin: 0 0 16px;\r
  font-size: clamp(36px, 6vw, 56px);\r
  line-height: 1.05;\r
}\r
\r
.hero p {\r
  max-width: 700px;\r
  margin: 0;\r
  color: #d1d5db;\r
  font-size: 18px;\r
  line-height: 1.7;\r
}\r
\r
.container {\r
  width: min(1100px, calc(100% - 32px));\r
  margin: 40px auto 80px;\r
}\r
\r
.demo-section {\r
  margin-bottom: 48px;\r
}\r
\r
.section-heading {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: flex-end;\r
  gap: 32px;\r
  margin-bottom: 20px;\r
}\r
\r
.section-heading h2 {\r
  margin: 4px 0 0;\r
  font-size: 30px;\r
}\r
\r
.section-heading p {\r
  max-width: 500px;\r
  margin: 0;\r
  color: #6b7280;\r
  line-height: 1.6;\r
  text-align: right;\r
}\r
\r
.section-label {\r
  color: #2563eb;\r
  font-size: 13px;\r
  font-weight: 800;\r
  letter-spacing: 0.08em;\r
  text-transform: uppercase;\r
}\r
\r
.demo-card {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  gap: 24px;\r
\r
  padding: 24px;\r
  margin-bottom: 16px;\r
\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 12px;\r
  box-shadow: 0 2px 8px rgb(15 23 42 / 4%);\r
}\r
\r
.demo-card h3 {\r
  margin: 0 0 8px;\r
}\r
\r
.demo-card p {\r
  margin: 0;\r
  color: #6b7280;\r
}\r
\r
.button-row {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 12px;\r
}\r
\r
.button {\r
  border: 0;\r
  border-radius: 8px;\r
  padding: 10px 16px;\r
\r
  font-weight: 600;\r
\r
  transition:\r
    transform 0.15s ease,\r
    opacity 0.15s ease;\r
}\r
\r
.button:hover {\r
  transform: translateY(-1px);\r
}\r
\r
.button-primary {\r
  background: #2563eb;\r
  color: white;\r
}\r
\r
.button-success {\r
  background: #16a34a;\r
  color: white;\r
}\r
\r
.button-error {\r
  background: #dc2626;\r
  color: white;\r
}\r
\r
.button-warning {\r
  background: #d97706;\r
  color: white;\r
}\r
\r
.button-info {\r
  background: #0891b2;\r
  color: white;\r
}\r
\r
@media (max-width: 700px) {\r
  .hero {\r
    padding: 48px 20px;\r
  }\r
\r
  .container {\r
    width: min(100% - 24px, 1100px);\r
    margin-top: 24px;\r
  }\r
\r
  .section-heading {\r
    align-items: flex-start;\r
    flex-direction: column;\r
    gap: 8px;\r
  }\r
\r
  .section-heading p {\r
    text-align: left;\r
  }\r
\r
  .demo-card {\r
    align-items: flex-start;\r
    flex-direction: column;\r
  }\r
}`;export{e as default};