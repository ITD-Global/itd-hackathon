(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/QuoteWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const QuoteWidget = ({ actionProvider, setState, state })=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        weight: '',
        length: '',
        width: '',
        height: '',
        origin: '',
        destination: '',
        speed: 'standard'
    });
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNext = ()=>{
        if (step < 3) setStep(step + 1);
    };
    const handleBack = ()=>{
        if (step > 1) setStep(step - 1);
    };
    const handleSubmit = async ()=>{
        setLoading(true);
        setTimeout(()=>{
            const baseRate = Math.random() * 50 + 20;
            const fuel = baseRate * 0.15;
            const duties = baseRate * 0.12;
            const vat = (baseRate + duties) * 0.20;
            const total = baseRate + fuel + duties + vat;
            setQuote({
                baseRate: baseRate.toFixed(2),
                fuel: fuel.toFixed(2),
                duties: duties.toFixed(2),
                vat: vat.toFixed(2),
                total: total.toFixed(2)
            });
            setLoading(false);
        }, 1500);
    };
    const isStepValid = ()=>{
        if (step === 1) return formData.weight && formData.length && formData.width && formData.height;
        if (step === 2) return formData.origin && formData.destination;
        return true;
    };
    if (quote) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl border p-4 mt-4 max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-2",
                        children: "📦"
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-900 mb-2",
                        children: "Your Quote"
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children: [
                            "From ",
                            formData.origin,
                            " to ",
                            formData.destination
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 rounded-lg p-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-blue-600 mb-1",
                                children: [
                                    "£",
                                    quote.total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700",
                                children: "Total cost including all fees"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-left text-sm mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Base shipping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "£",
                                            quote.baseRate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Fuel surcharge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "£",
                                            quote.fuel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Import duties"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "£",
                                            quote.duties
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between border-t pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "VAT (20%)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "£",
                                            quote.vat
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setQuote(null);
                                    setStep(1);
                                    setFormData({
                                        weight: '',
                                        length: '',
                                        width: '',
                                        height: '',
                                        origin: '',
                                        destination: '',
                                        speed: 'standard'
                                    });
                                },
                                className: "flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50",
                                children: "New Quote"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700",
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/QuoteWidget.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border p-4 mt-4 max-w-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`,
                                    children: i
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-8 h-0.5 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/components/QuoteWidget.jsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/QuoteWidget.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-900 mb-1",
                        children: [
                            step === 1 && "Package Details",
                            step === 2 && "Shipping Route",
                            step === 3 && "Service Speed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            step === 1 && "Enter your package dimensions",
                            step === 2 && "Where are you shipping?",
                            step === 3 && "Choose delivery speed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                    children: "Weight (kg)"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "2.5",
                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                    value: formData.weight,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            weight: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuoteWidget.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                    children: "Length (cm)"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "30",
                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                    value: formData.length,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            length: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuoteWidget.jsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                    children: "Width (cm)"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "20",
                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                    value: formData.width,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            width: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuoteWidget.jsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                    children: "Height (cm)"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "15",
                                    className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                    value: formData.height,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            height: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuoteWidget.jsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/QuoteWidget.jsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-gray-700 mb-1",
                                children: "Ship from"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "New York, United States",
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                value: formData.origin,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        origin: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-gray-700 mb-1",
                                children: "Ship to"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "London, United Kingdom",
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                                value: formData.destination,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        destination: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 183,
                columnNumber: 9
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    {
                        value: "standard",
                        name: "Standard",
                        time: "5-7 days",
                        icon: "🚛"
                    },
                    {
                        value: "express",
                        name: "Express",
                        time: "2-3 days",
                        icon: "✈️"
                    },
                    {
                        value: "overnight",
                        name: "Overnight",
                        time: "Next day",
                        icon: "⚡"
                    }
                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "speed",
                                value: option.value,
                                checked: formData.speed === option.value,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        speed: e.target.value
                                    }),
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-lg p-3 cursor-pointer text-sm ${formData.speed === option.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: option.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: option.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-600",
                                                        children: option.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/QuoteWidget.jsx",
                                        lineNumber: 230,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuoteWidget.jsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuoteWidget.jsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, option.value, true, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBack,
                        disabled: step === 1,
                        className: "px-4 py-2 text-sm text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    step < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        disabled: !isStepValid(),
                        className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Continue →"
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        disabled: loading,
                        className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50",
                        children: loading ? "Calculating..." : "Get Quote"
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuoteWidget.jsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/QuoteWidget.jsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/QuoteWidget.jsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
_s(QuoteWidget, "elb/SQ6zoqwUDrxAWNkWHj0Hfd8=");
_c = QuoteWidget;
const __TURBOPACK__default__export__ = QuoteWidget;
var _c;
__turbopack_context__.k.register(_c, "QuoteWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/TrackingWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const TrackingWidget = ({ actionProvider, setState, state })=>{
    _s();
    const [trackingNumber, setTrackingNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [trackingResult, setTrackingResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleTrack = async (e)=>{
        e.preventDefault();
        if (!trackingNumber.trim()) return;
        setLoading(true);
        setTimeout(()=>{
            setTrackingResult({
                status: "In Transit",
                location: "Distribution Center - Manchester, UK",
                estimatedDelivery: "Tomorrow by 6:00 PM",
                timeline: [
                    {
                        status: "Order Placed",
                        date: "Dec 15, 2:30 PM",
                        completed: true
                    },
                    {
                        status: "Package Picked Up",
                        date: "Dec 16, 9:15 AM",
                        completed: true
                    },
                    {
                        status: "In Transit",
                        date: "Dec 17, 11:45 AM",
                        completed: true
                    },
                    {
                        status: "Out for Delivery",
                        date: "Dec 18, Expected",
                        completed: false
                    },
                    {
                        status: "Delivered",
                        date: "Dec 18, Expected",
                        completed: false
                    }
                ]
            });
            setLoading(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border p-4 mt-4 max-w-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-2",
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-900 mb-1",
                        children: "Track Package"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Enter your tracking number"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TrackingWidget.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleTrack,
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "1Z999AA1234567890",
                            className: "flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-1 focus:ring-blue-500",
                            value: trackingNumber,
                            onChange: (e)=>setTrackingNumber(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TrackingWidget.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading || !trackingNumber.trim(),
                            className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50",
                            children: loading ? "..." : "Track"
                        }, void 0, false, {
                            fileName: "[project]/app/components/TrackingWidget.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TrackingWidget.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/TrackingWidget.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            trackingResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center p-3 bg-green-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-green-600 mb-1",
                                children: trackingResult.status
                            }, void 0, false, {
                                fileName: "[project]/app/components/TrackingWidget.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-800 text-sm mb-1",
                                children: [
                                    "📍 ",
                                    trackingResult.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TrackingWidget.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-green-700",
                                children: [
                                    "Expected: ",
                                    trackingResult.estimatedDelivery
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TrackingWidget.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium text-gray-900 text-sm",
                                children: "Timeline:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/TrackingWidget.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            trackingResult.timeline.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-3 h-3 rounded-full mt-1 ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TrackingWidget.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-sm font-medium ${event.completed ? 'text-gray-900' : 'text-gray-600'}`,
                                                    children: event.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TrackingWidget.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-xs ${event.completed ? 'text-gray-700' : 'text-gray-500'}`,
                                                    children: event.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TrackingWidget.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/TrackingWidget.jsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/components/TrackingWidget.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setTrackingResult(null);
                            setTrackingNumber('');
                        },
                        className: "w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50",
                        children: "Track Another Package"
                    }, void 0, false, {
                        fileName: "[project]/app/components/TrackingWidget.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TrackingWidget.jsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TrackingWidget.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(TrackingWidget, "aXOdzu+QYCH4iv6GWmD+F7rfSgM=");
_c = TrackingWidget;
const __TURBOPACK__default__export__ = TrackingWidget;
var _c;
__turbopack_context__.k.register(_c, "TrackingWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/config/chatbotConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chatbot-kit/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuoteWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/QuoteWidget.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrackingWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TrackingWidget.jsx [app-client] (ecmascript)");
;
;
;
;
const botName = 'AI Shipping Copilot';
const config = {
    initialMessages: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChatBotMessage"])(`Hi! I'm your AI Shipping Copilot. I can help you with:

📦 **Get shipping quotes** - Complete cost breakdowns with no hidden fees
📍 **Track packages** - Real-time updates for any carrier
💡 **Answer questions** - Duties, VAT, delivery times, and more

What would you like to do today?`, {
            widget: 'overview'
        })
    ],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#3B82F6'
        },
        chatButton: {
            backgroundColor: '#3B82F6'
        }
    },
    state: {
        quoteData: {
            weight: '',
            length: '',
            width: '',
            height: '',
            origin: '',
            destination: '',
            speed: 'standard',
            step: 1
        },
        trackingData: {
            trackingNumber: '',
            result: null
        }
    },
    widgets: [
        {
            widgetName: 'overview',
            widgetFunc: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverviewWidget, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/app/config/chatbotConfig.js",
                    lineNumber: 47,
                    columnNumber: 30
                }, this),
            props: {}
        },
        {
            widgetName: 'quote',
            widgetFunc: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuoteWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/app/config/chatbotConfig.js",
                    lineNumber: 52,
                    columnNumber: 30
                }, this),
            props: {}
        },
        {
            widgetName: 'tracking',
            widgetFunc: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrackingWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/app/config/chatbotConfig.js",
                    lineNumber: 57,
                    columnNumber: 30
                }, this),
            props: {}
        }
    ]
};
// Overview Widget Component
const OverviewWidget = ({ actionProvider })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-left",
                onClick: ()=>actionProvider.handleGetQuote(),
                children: "📦 Get Shipping Quote"
            }, void 0, false, {
                fileName: "[project]/app/config/chatbotConfig.js",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-left",
                onClick: ()=>actionProvider.handleTrackPackage(),
                children: "📍 Track Package"
            }, void 0, false, {
                fileName: "[project]/app/config/chatbotConfig.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-left",
                onClick: ()=>actionProvider.handleGeneralHelp(),
                children: "💡 Ask Questions"
            }, void 0, false, {
                fileName: "[project]/app/config/chatbotConfig.js",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/config/chatbotConfig.js",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_c = OverviewWidget;
const __TURBOPACK__default__export__ = config;
var _c;
__turbopack_context__.k.register(_c, "OverviewWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/config/MessageParser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
class MessageParser {
    constructor(actionProvider, state){
        this.actionProvider = actionProvider;
        this.state = state;
    }
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        // Quote-related keywords
        if (lowerCaseMessage.includes('quote') || lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('shipping rate') || lowerCaseMessage.includes('how much')) {
            this.actionProvider.handleGetQuote();
            return;
        }
        // Tracking-related keywords
        if (lowerCaseMessage.includes('track') || lowerCaseMessage.includes('where is') || lowerCaseMessage.includes('status') || lowerCaseMessage.includes('delivery') || /\b[0-9]{10,}\b/.test(message)) {
            this.actionProvider.handleTrackPackage();
            return;
        }
        // Duty/Tax questions
        if (lowerCaseMessage.includes('duty') || lowerCaseMessage.includes('tax') || lowerCaseMessage.includes('vat') || lowerCaseMessage.includes('customs')) {
            this.actionProvider.handleDutyQuestion();
            return;
        }
        // Carrier questions
        if (lowerCaseMessage.includes('carrier') || lowerCaseMessage.includes('ups') || lowerCaseMessage.includes('fedex') || lowerCaseMessage.includes('dhl') || lowerCaseMessage.includes('usps')) {
            this.actionProvider.handleCarrierQuestion();
            return;
        }
        // Help or unclear input
        if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('what can you do') || lowerCaseMessage.includes('menu') || lowerCaseMessage.includes('options')) {
            this.actionProvider.handleGeneralHelp();
            return;
        }
        // Default response for unrecognized input
        this.actionProvider.handleDefault();
    }
}
const __TURBOPACK__default__export__ = MessageParser;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/config/ActionProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chatbot-kit/build/index.js [app-client] (ecmascript)");
;
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
    handleGetQuote = ()=>{
        const message = this.createChatBotMessage("I'll help you get a shipping quote! Let me walk you through the process step by step.", {
            widget: 'quote'
        });
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    handleTrackPackage = ()=>{
        const message = this.createChatBotMessage("I can help you track your package! Please enter your tracking number below.", {
            widget: 'tracking'
        });
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    handleDutyQuestion = ()=>{
        const message = this.createChatBotMessage("📋 **Duties & Taxes Explained:**\n\n" + "• **Import Duties**: Calculated based on product category and origin country\n" + "• **VAT**: 20% on items over £15 when shipping to UK\n" + "• **Handling Fees**: Some carriers charge for customs processing\n\n" + "I can calculate exact amounts when you get a quote! Would you like me to help with that?");
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    handleCarrierQuestion = ()=>{
        const message = this.createChatBotMessage("🚛 **Supported Carriers:**\n\n" + "• **Express**: UPS, FedEx, DHL\n" + "• **Standard**: Royal Mail, USPS, Canada Post\n" + "• **Economy**: Hermes, Yodel, DPD\n\n" + "I can track packages from any of these carriers automatically. Just paste your tracking number!");
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    handleGeneralHelp = ()=>{
        const message = this.createChatBotMessage("I'm here to help with all your shipping needs! Here's what I can do:", {
            widget: 'overview'
        });
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    handleDefault = ()=>{
        const message = this.createChatBotMessage("I'm not sure I understand. Try asking about:\n\n" + "• **Shipping quotes** - \"How much to ship to London?\"\n" + "• **Package tracking** - \"Track my package\"\n" + "• **Duties & taxes** - \"How are duties calculated?\"\n" + "• **Carriers** - \"Which carriers do you support?\"\n\n" + "Or click the buttons below for quick actions!", {
            widget: 'overview'
        });
        this.setState((prev)=>({
                ...prev,
                messages: [
                    ...prev.messages,
                    message
                ]
            }));
    };
    updateQuoteData = (field, value)=>{
        this.setState((prev)=>({
                ...prev,
                quoteData: {
                    ...prev.quoteData,
                    [field]: value
                }
            }));
    };
    updateTrackingData = (field, value)=>{
        this.setState((prev)=>({
                ...prev,
                trackingData: {
                    ...prev.trackingData,
                    [field]: value
                }
            }));
    };
}
const __TURBOPACK__default__export__ = ActionProvider;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$chatbotConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/chatbotConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$MessageParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/MessageParser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$ActionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/ActionProvider.js [app-client] (ecmascript)");
;
"use client";
;
;
;
;
;
// Dynamic import to avoid SSR issues
const Chatbot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-chatbot-kit/build/index.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-chatbot-kit/build/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Chatbot;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-900",
                        children: "📦 AI Shipping Copilot"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "AI Shipping Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100",
                                        children: "Get quotes, track packages, and ask questions - all in one conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[600px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chatbot, {
                                    config: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$chatbotConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    messageParser: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$MessageParser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    actionProvider: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$ActionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Chatbot");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}}),
"[project]/node_modules/react-conditionally-render/dist/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        d: (o, r)=>{
            for(var n in r)e.o(r, n) && !e.o(o, n) && Object.defineProperty(o, n, {
                enumerable: !0,
                get: r[n]
            });
        },
        o: (e, o)=>Object.prototype.hasOwnProperty.call(e, o),
        r: (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }
    }, o = {};
    e.r(o), e.d(o, {
        default: ()=>r
    });
    const r = function(e) {
        var o = e.condition, r = e.show, n = e.elseShow, t = function(e) {
            return "function" == typeof e;
        }, u = function(e) {
            return e() || (console.warn("Nothing was returned from your render function. Please make sure you are returning a valid React element."), null);
        };
        return o ? t(r) ? u(r) : r : !o && n ? t(n) ? u(n) : n : null;
    };
    module.exports = o;
})();
}}),
"[project]/node_modules/react-chatbot-kit/build/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        n: (t)=>{
            var r = t && t.__esModule ? ()=>t.default : ()=>t;
            return e.d(r, {
                a: r
            }), r;
        },
        d: (t, r)=>{
            for(var a in r)e.o(r, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                enumerable: !0,
                get: r[a]
            });
        },
        o: (e, t)=>Object.prototype.hasOwnProperty.call(e, t),
        r: (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }
    }, t = {};
    e.r(t), e.d(t, {
        Chatbot: ()=>B,
        createChatBotMessage: ()=>i,
        createClientMessage: ()=>u,
        createCustomMessage: ()=>l,
        default: ()=>H,
        useChatbot: ()=>T
    });
    const r = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
    var a = e.n(r);
    const n = __turbopack_context__.r("[project]/node_modules/react-conditionally-render/dist/index.js [app-client] (ecmascript)");
    var o = e.n(n), s = function() {
        return s = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, s.apply(this, arguments);
    }, c = function(e, t) {
        return {
            message: e,
            type: t,
            id: Math.round(Date.now() * Math.random())
        };
    }, i = function(e, t) {
        return s(s(s({}, c(e, "bot")), t), {
            loading: !0
        });
    }, l = function(e, t, r) {
        return s(s({}, c(e, t)), r);
    }, u = function(e, t) {
        return s(s({}, c(e, "user")), t);
    }, m = function(e) {
        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
        if (e) return e.apply(void 0, t);
    };
    function g() {
        return g = Object.assign || function(e) {
            for(var t = 1; t < arguments.length; t++){
                var r = arguments[t];
                for(var a in r)Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        }, g.apply(this, arguments);
    }
    const d = ({ styles: e = {}, ...t })=>a().createElement("svg", g({
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
        }, t), a().createElement("path", {
            d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
        })), f = function(e) {
        var t = e.message, r = e.customComponents;
        return a().createElement("div", {
            className: "react-chatbot-kit-user-chat-message-container"
        }, a().createElement(o(), {
            condition: !!r.userChatMessage,
            show: m(r.userChatMessage, {
                message: t
            }),
            elseShow: a().createElement("div", {
                className: "react-chatbot-kit-user-chat-message"
            }, t, a().createElement("div", {
                className: "react-chatbot-kit-user-chat-message-arrow"
            }))
        }), a().createElement(o(), {
            condition: !!r.userAvatar,
            show: m(r.userAvatar),
            elseShow: a().createElement("div", {
                className: "react-chatbot-kit-user-avatar"
            }, a().createElement("div", {
                className: "react-chatbot-kit-user-avatar-container"
            }, a().createElement(d, {
                className: "react-chatbot-kit-user-avatar-icon"
            })))
        }));
    }, h = function() {
        return a().createElement("div", {
            className: "react-chatbot-kit-chat-bot-avatar"
        }, a().createElement("div", {
            className: "react-chatbot-kit-chat-bot-avatar-container"
        }, a().createElement("p", {
            className: "react-chatbot-kit-chat-bot-avatar-letter"
        }, "B")));
    }, p = function() {
        return a().createElement("div", {
            className: "chatbot-loader-container"
        }, a().createElement("svg", {
            id: "dots",
            width: "50px",
            height: "21px",
            viewBox: "0 0 132 58",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, a().createElement("g", {
            stroke: "none",
            fill: "none"
        }, a().createElement("g", {
            id: "chatbot-loader",
            fill: "#fff"
        }, a().createElement("circle", {
            id: "chatbot-loader-dot1",
            cx: "25",
            cy: "30",
            r: "13"
        }), a().createElement("circle", {
            id: "chatbot-loader-dot2",
            cx: "65",
            cy: "30",
            r: "13"
        }), a().createElement("circle", {
            id: "chatbot-loader-dot3",
            cx: "105",
            cy: "30",
            r: "13"
        })))));
    };
    var v = function() {
        return v = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, v.apply(this, arguments);
    };
    const y = function(e) {
        var t = e.message, n = e.withAvatar, s = void 0 === n || n, c = e.loading, i = e.messages, l = e.customComponents, u = e.setState, g = e.customStyles, d = e.delay, f = e.id, y = (0, r.useState)(!1), b = y[0], w = y[1];
        (0, r.useEffect)(function() {
            var e;
            return function(t, r) {
                var a = 750;
                d && (a += d), e = setTimeout(function() {
                    var e = (function(e, t, r) {
                        if ("TURBOPACK compile-time truthy", 1) for(var a, n = 0, o = t.length; n < o; n++)!a && n in t || (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
                        return e.concat(a || Array.prototype.slice.call(t));
                    })([], t, !0).find(function(e) {
                        return e.id === f;
                    });
                    e && (e.loading = !1, e.delay = void 0, r(function(t) {
                        var r = t.messages, a = r.findIndex(function(e) {
                            return e.id === f;
                        });
                        return r[a] = e, v(v({}, t), {
                            messages: r
                        });
                    }));
                }, a);
            }(i, u), function() {
                clearTimeout(e);
            };
        }, [
            d,
            f
        ]), (0, r.useEffect)(function() {
            d ? setTimeout(function() {
                return w(!0);
            }, d) : w(!0);
        }, [
            d
        ]);
        var E = {
            backgroundColor: ""
        }, P = {
            borderRightColor: ""
        };
        return g && (E.backgroundColor = g.backgroundColor, P.borderRightColor = g.backgroundColor), a().createElement(o(), {
            condition: b,
            show: a().createElement("div", {
                className: "react-chatbot-kit-chat-bot-message-container"
            }, a().createElement(o(), {
                condition: s,
                show: a().createElement(o(), {
                    condition: !!(null == l ? void 0 : l.botAvatar),
                    show: m(null == l ? void 0 : l.botAvatar),
                    elseShow: a().createElement(h, null)
                })
            }), a().createElement(o(), {
                condition: !!(null == l ? void 0 : l.botChatMessage),
                show: m(null == l ? void 0 : l.botChatMessage, {
                    message: t,
                    loader: a().createElement(p, null)
                }),
                elseShow: a().createElement("div", {
                    className: "react-chatbot-kit-chat-bot-message",
                    style: E
                }, a().createElement(o(), {
                    condition: c,
                    show: a().createElement(p, null),
                    elseShow: a().createElement("span", null, t)
                }), a().createElement(o(), {
                    condition: s,
                    show: a().createElement("div", {
                        className: "react-chatbot-kit-chat-bot-message-arrow",
                        style: P
                    })
                }))
            }))
        });
    };
    function b() {
        return b = Object.assign || function(e) {
            for(var t = 1; t < arguments.length; t++){
                var r = arguments[t];
                for(var a in r)Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        }, b.apply(this, arguments);
    }
    const w = ({ styles: e = {}, ...t })=>a().createElement("svg", b({
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
        }, t), a().createElement("path", {
            d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
        }));
    var E = function() {
        return E = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, E.apply(this, arguments);
    }, P = function(e, t, r) {
        if (r || 2 === arguments.length) for(var a, n = 0, o = t.length; n < o; n++)!a && n in t || (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
        return e.concat(a || Array.prototype.slice.call(t));
    };
    const S = function(e) {
        var t = e.state, n = e.setState, s = e.widgetRegistry, i = e.messageParser, l = e.parse, u = e.customComponents, m = e.actionProvider, g = e.botName, d = e.customStyles, h = e.headerText, p = e.customMessages, v = e.placeholderText, b = e.validator, S = e.disableScrollToBottom, O = e.messageHistory, k = e.actions, M = e.messageContainerRef, C = t.messages, N = (0, r.useState)(""), x = N[0], j = N[1], T = function() {
            setTimeout(function() {
                var e;
                M.current && (M.current.scrollTop = null === (e = null == M ? void 0 : M.current) || void 0 === e ? void 0 : e.scrollHeight);
            }, 50);
        };
        (0, r.useEffect)(function() {
            S || T();
        });
        var A = function() {
            n(function(e) {
                return E(E({}, e), {
                    messages: P(P([], e.messages, !0), [
                        c(x, "user")
                    ], !1)
                });
            }), T(), j("");
        }, B = {
            backgroundColor: ""
        };
        d && d.chatButton && (B.backgroundColor = d.chatButton.backgroundColor);
        var H = "Conversation with " + g;
        h && (H = h);
        var I = "Write your message here";
        return v && (I = v), a().createElement("div", {
            className: "react-chatbot-kit-chat-container"
        }, a().createElement("div", {
            className: "react-chatbot-kit-chat-inner-container"
        }, a().createElement(o(), {
            condition: !!u.header,
            show: u.header && u.header(m),
            elseShow: a().createElement("div", {
                className: "react-chatbot-kit-chat-header"
            }, H)
        }), a().createElement("div", {
            className: "react-chatbot-kit-chat-message-container",
            ref: M
        }, a().createElement(o(), {
            condition: "string" == typeof O && Boolean(O),
            show: a().createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: O
                }
            })
        }), C.map(function(e, r) {
            return "bot" === e.type ? a().createElement(a().Fragment, {
                key: e.id
            }, function(e, r) {
                var c;
                c = e.withAvatar ? e.withAvatar : function(e, t) {
                    if (0 === t) return !0;
                    var r = e[t - 1];
                    return !("bot" === r.type && !r.widget);
                }(C, r);
                var i = E(E({}, e), {
                    setState: n,
                    state: t,
                    customComponents: u,
                    widgetRegistry: s,
                    messages: C,
                    actions: k
                });
                if (e.widget) {
                    var l = s.getWidget(i.widget, E(E({}, t), {
                        scrollIntoView: T,
                        payload: e.payload,
                        actions: k
                    }));
                    return a().createElement(a().Fragment, null, a().createElement(y, E({
                        customStyles: d.botMessageBox,
                        withAvatar: c
                    }, i, {
                        key: e.id
                    })), a().createElement(o(), {
                        condition: !i.loading,
                        show: l || null
                    }));
                }
                return a().createElement(y, E({
                    customStyles: d.botMessageBox,
                    key: e.id,
                    withAvatar: c
                }, i, {
                    customComponents: u,
                    messages: C,
                    setState: n
                }));
            }(e, r)) : "user" === e.type ? a().createElement(a().Fragment, {
                key: e.id
            }, function(e) {
                var r = s.getWidget(e.widget, E(E({}, t), {
                    scrollIntoView: T,
                    payload: e.payload,
                    actions: k
                }));
                return a().createElement(a().Fragment, null, a().createElement(f, {
                    message: e.message,
                    key: e.id,
                    customComponents: u
                }), r || null);
            }(e)) : function(e, t) {
                return !!t[e.type];
            }(e, p) ? a().createElement(a().Fragment, {
                key: e.id
            }, function(e) {
                var r = p[e.type], o = {
                    setState: n,
                    state: t,
                    scrollIntoView: T,
                    actionProvider: m,
                    payload: e.payload,
                    actions: k
                };
                if (e.widget) {
                    var c = s.getWidget(e.widget, E(E({}, t), {
                        scrollIntoView: T,
                        payload: e.payload,
                        actions: k
                    }));
                    return a().createElement(a().Fragment, null, r(o), c || null);
                }
                return r(o);
            }(e)) : void 0;
        }), a().createElement("div", {
            style: {
                paddingBottom: "15px"
            }
        })), a().createElement("div", {
            className: "react-chatbot-kit-chat-input-container"
        }, a().createElement("form", {
            className: "react-chatbot-kit-chat-input-form",
            onSubmit: function(e) {
                if (e.preventDefault(), b && "function" == typeof b) {
                    if (b(x)) {
                        if (A(), l) return l(x);
                        i.parse(x);
                    }
                } else {
                    if (A(), l) return l(x);
                    i.parse(x);
                }
            }
        }, a().createElement("input", {
            className: "react-chatbot-kit-chat-input",
            placeholder: I,
            value: x,
            onChange: function(e) {
                return j(e.target.value);
            }
        }), a().createElement("button", {
            className: "react-chatbot-kit-chat-btn-send",
            style: B
        }, a().createElement(w, {
            className: "react-chatbot-kit-chat-btn-send-icon"
        }))))));
    }, O = function(e) {
        var t = e.message;
        return a().createElement("div", {
            className: "react-chatbot-kit-error"
        }, a().createElement("h1", {
            className: "react-chatbot-kit-error-header"
        }, "Ooops. Something is missing."), a().createElement("div", {
            className: "react-chatbot-kit-error-container"
        }, a().createElement(y, {
            message: t,
            withAvatar: !0,
            loading: !1,
            id: 1,
            customStyles: {
                backgroundColor: ""
            },
            messages: []
        })), a().createElement("a", {
            href: "https://fredrikoseberg.github.io/react-chatbot-kit-docs/",
            rel: "noopener norefferer",
            target: "_blank",
            className: "react-chatbot-kit-error-docs"
        }, "View the docs"));
    };
    var k = function(e) {
        return e.widgets ? e.widgets : [];
    }, M = function(e) {
        try {
            new e;
        } catch (e) {
            return !1;
        }
        return !0;
    }, C = function() {
        return C = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, C.apply(this, arguments);
    };
    const N = function(e, t) {
        var r = this;
        this.addWidget = function(e, t) {
            var a = e.widgetName, n = e.widgetFunc, o = e.mapStateToProps, s = e.props;
            r[a] = {
                widget: n,
                props: s,
                mapStateToProps: o,
                parentProps: C({}, t)
            };
        }, this.getWidget = function(e, t) {
            var a = r[e];
            if (a) {
                var n, o = C(C(C(C({
                    scrollIntoView: t.scrollIntoView
                }, a.parentProps), "object" == typeof (n = a.props) ? n : {}), r.mapStateToProps(a.mapStateToProps, t)), {
                    setState: r.setState,
                    actionProvider: r.actionProvider || t.actions,
                    actions: t.actions,
                    state: t,
                    payload: t.payload
                });
                return a.widget(o) || null;
            }
        }, this.mapStateToProps = function(e, t) {
            if (e) return e.reduce(function(e, r) {
                return e[r] = t[r], e;
            }, {});
        }, this.setState = e, this.actionProvider = t;
    };
    var x = function() {
        return x = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, x.apply(this, arguments);
    }, j = function(e, t, r) {
        if (r || 2 === arguments.length) for(var a, n = 0, o = t.length; n < o; n++)!a && n in t || (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
        return e.concat(a || Array.prototype.slice.call(t));
    };
    const T = function(e) {
        var t = e.config, n = e.actionProvider, o = e.messageParser, s = e.messageHistory, c = e.runInitialMessagesWithHistory, m = e.saveMessages, g = function(e, t) {
            var r = {};
            for(var a in e)Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for(a = Object.getOwnPropertySymbols(e); n < a.length; n++)t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
            }
            return r;
        }(e, [
            "config",
            "actionProvider",
            "messageParser",
            "messageHistory",
            "runInitialMessagesWithHistory",
            "saveMessages"
        ]), d = "", f = "";
        if (!t || !n || !o) return {
            configurationError: d = "I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"
        };
        var h = function(e, t) {
            var r = [];
            return e.initialMessages || r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."), r;
        }(t);
        if (h.length) return {
            invalidPropsError: f = h.reduce(function(e, t) {
                return e + t;
            }, "")
        };
        var p = function(e) {
            return e.state ? e.state : {};
        }(t);
        s && Array.isArray(s) ? t.initialMessages = j([], s, !0) : "string" == typeof s && Boolean(s) && (c || (t.initialMessages = []));
        var v, y, b, w = a().useState(x({
            messages: j([], t.initialMessages, !0)
        }, p)), E = w[0], P = w[1], S = a().useRef(E.messages), O = a().useRef(), C = a().useRef();
        (0, r.useEffect)(function() {
            S.current = E.messages;
        }), (0, r.useEffect)(function() {
            s && Array.isArray(s) && P(function(e) {
                return x(x({}, e), {
                    messages: s
                });
            });
        }, []), (0, r.useEffect)(function() {
            var e = C.current;
            return function() {
                if (m && "function" == typeof m) {
                    var t = e.innerHTML.toString();
                    m(S.current, t);
                }
            };
        }, []), (0, r.useEffect)(function() {
            O.current = E;
        }, [
            E
        ]);
        var T = n, A = o;
        return M(T) && M(A) ? (v = new n(i, P, u, O.current, l, g), y = new N(P, v), b = new o(v, O.current), k(t).forEach(function(e) {
            return null == y ? void 0 : y.addWidget(e, g);
        })) : (v = n, b = o, y = new N(P, null), k(t).forEach(function(e) {
            return null == y ? void 0 : y.addWidget(e, g);
        })), {
            widgetRegistry: y,
            actionProv: v,
            messagePars: b,
            configurationError: d,
            invalidPropsError: f,
            state: E,
            setState: P,
            messageContainerRef: C,
            ActionProvider: T,
            MessageParser: A
        };
    };
    var A = function() {
        return A = Object.assign || function(e) {
            for(var t, r = 1, a = arguments.length; r < a; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }, A.apply(this, arguments);
    };
    const B = function(e) {
        var t = e.actionProvider, r = e.messageParser, n = e.config, o = e.headerText, s = e.placeholderText, c = e.saveMessages, l = e.messageHistory, u = e.runInitialMessagesWithHistory, m = e.disableScrollToBottom, g = e.validator, d = function(e, t) {
            var r = {};
            for(var a in e)Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for(a = Object.getOwnPropertySymbols(e); n < a.length; n++)t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
            }
            return r;
        }(e, [
            "actionProvider",
            "messageParser",
            "config",
            "headerText",
            "placeholderText",
            "saveMessages",
            "messageHistory",
            "runInitialMessagesWithHistory",
            "disableScrollToBottom",
            "validator"
        ]), f = T(A({
            config: n,
            actionProvider: t,
            messageParser: r,
            messageHistory: l,
            saveMessages: c,
            runInitialMessagesWithHistory: u
        }, d)), h = f.configurationError, p = f.invalidPropsError, v = f.ActionProvider, y = f.MessageParser, b = f.widgetRegistry, w = f.messageContainerRef, E = f.actionProv, P = f.messagePars, k = f.state, C = f.setState;
        if (h) return a().createElement(O, {
            message: h
        });
        if (p.length) return a().createElement(O, {
            message: p
        });
        var N = function(e) {
            return e.customStyles ? e.customStyles : {};
        }(n), x = function(e) {
            return e.customComponents ? e.customComponents : {};
        }(n), j = function(e) {
            return e.botName ? e.botName : "Bot";
        }(n), B = function(e) {
            return e.customMessages ? e.customMessages : {};
        }(n);
        return M(v) && M(y) ? a().createElement(S, {
            state: k,
            setState: C,
            widgetRegistry: b,
            actionProvider: E,
            messageParser: P,
            customMessages: B,
            customComponents: A({}, x),
            botName: j,
            customStyles: A({}, N),
            headerText: o,
            placeholderText: s,
            validator: g,
            messageHistory: l,
            disableScrollToBottom: m,
            messageContainerRef: w
        }) : a().createElement(v, {
            state: k,
            setState: C,
            createChatBotMessage: i
        }, a().createElement(y, null, a().createElement(S, {
            state: k,
            setState: C,
            widgetRegistry: b,
            actionProvider: v,
            messageParser: y,
            customMessages: B,
            customComponents: A({}, x),
            botName: j,
            customStyles: A({}, N),
            headerText: o,
            placeholderText: s,
            validator: g,
            messageHistory: l,
            disableScrollToBottom: m,
            messageContainerRef: w
        })));
    }, H = B;
    module.exports = t;
})();
}}),
}]);

//# sourceMappingURL=_853ab995._.js.map