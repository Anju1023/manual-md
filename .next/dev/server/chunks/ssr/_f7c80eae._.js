module.exports = [
"[project]/app/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    index: 'ホーム',
    '01_daily': '01_毎日の作業 (Daily)',
    '02_weekly': '02_週2回の作業 (Weekly)',
    '03_monthly': '03_月末の作業 (Monthly)',
    '04_ad_hoc': '04_随時・メンテ (Ad-hoc)',
    '99_system_specs': '99_システム仕様書 (Admin)'
};
}),
"[project]/app/01_daily/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    page: '概要・一覧',
    print_daily: '🖨️ 日替わり表の印刷'
};
}),
"[project]/mdx-components.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMDXComponents",
    ()=>useMDXComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra-theme-docs/dist/mdx-components/index.js [app-rsc] (ecmascript)");
;
// テーマのコンポーネント（h1, p, codeなど）を取得
const themeComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])();
function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components
    };
}
}),
"[project]/app/01_daily/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "毎日の作業 (Daily)",
    "filePath": "app/01_daily/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 毎日の作業 (Daily)\r\n\r\n日々のルーティンワークに関する手順書です。\r\n\r\n## 業務一覧\r\n\r\n### 午前（開店前）\r\n\r\n- **日替わり表の印刷**\r\n  - 対象: `CB商品データ.xlsm`\r\n  - 期限: 8:30 まで\r\n\r\n### 午後（閉店後）\r\n\r\n- **翌日納品分の記録保存**\r\n  - 対象: `T納品データ.xlsm`\r\n  - 担当: 遅番担当者";
function useTOC(props) {
    return [
        {
            value: "業務一覧",
            id: "業務一覧",
            depth: 2
        },
        {
            value: "午前（開店前）",
            id: "午前開店前",
            depth: 3
        },
        {
            value: "午後（閉店後）",
            id: "午後閉店後",
            depth: 3
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "毎日の作業 (Daily)"
            }, void 0, false, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "日々のルーティンワークに関する手順書です。"
            }, void 0, false, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 68
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 130
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 198
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "日替わり表の印刷"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 304
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: [
                                            "対象: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                                children: "CB商品データ.xlsm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                                lineNumber: 40,
                                                columnNumber: 409
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                                        lineNumber: 40,
                                        columnNumber: 385
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "期限: 8:30 まで"
                                    }, void 0, false, {
                                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                                        lineNumber: 40,
                                        columnNumber: 485
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 363
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 288
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 266
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 608
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "翌日納品分の記録保存"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 714
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: [
                                            "対象: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                                children: "T納品データ.xlsm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                                lineNumber: 40,
                                                columnNumber: 821
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                                        lineNumber: 40,
                                        columnNumber: 797
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "担当: 遅番担当者"
                                    }, void 0, false, {
                                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                                        lineNumber: 40,
                                        columnNumber: 896
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/01_daily/page.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 775
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/page.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 698
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/page.mdx.tsx",
                lineNumber: 40,
                columnNumber: 676
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/01_daily/print_daily/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "日替わり表の印刷手順",
    "filePath": "app/01_daily/print_daily/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 日替わり表の印刷手順\r\n\r\n毎朝 8:30 までに、その日の製造計画となる「日替わり表」を印刷し、製造スタッフへ配布します。\r\n\r\n## 作業手順\r\n\r\n### 1. ファイルを開く\r\n\r\n以下のパスにある `CB商品データ.xlsm` を開きます。\r\n\r\n```text filename=\"ファイルパス\"\r\n\\\\Server\\Common\\01_Daily\\CB商品データ.xlsm\r\n```\r\n\r\n### 2. シートの選択と日付変更\r\n\r\n1.  Excel 下部のタブから **「夜間用」** シートを選択します。\r\n2.  セル `A1` の日付を **翌日の日付** に変更します。\r\n\r\n### 3. 印刷実行\r\n\r\n画面右上にある **「一括印刷」** ボタンをクリックします。\r\n自動的にプリンターから帳票が出力されます。\r\n\r\n> **注意:** 「マクロが無効です」という警告が出た場合は、画面上部の「コンテンツの有効化」をクリックしてください。\r\n\r\n---\r\n\r\n## チェックリスト\r\n\r\n- [ ] 日付は翌日になっていますか？\r\n- [ ] エラーメッセージは出ていませんか？";
function useTOC(props) {
    return [
        {
            value: "作業手順",
            id: "作業手順",
            depth: 2
        },
        {
            value: "1. ファイルを開く",
            id: "1-ファイルを開く",
            depth: 3
        },
        {
            value: "2. シートの選択と日付変更",
            id: "2-シートの選択と日付変更",
            depth: 3
        },
        {
            value: "3. 印刷実行",
            id: "3-印刷実行",
            depth: 3
        },
        {
            value: "チェックリスト",
            id: "チェックリスト",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        blockquote: "blockquote",
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        hr: "hr",
        input: "input",
        li: "li",
        ol: "ol",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "日替わり表の印刷手順"
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "毎朝 8:30 までに、その日の製造計画となる「日替わり表」を印刷し、製造スタッフへ配布します。"
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 65
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 154
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 222
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "以下のパスにある ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "CB商品データ.xlsm"
                    }, void 0, false, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 318
                    }, this),
                    " を開きます。"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 290
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                tabIndex: "0",
                "data-language": "text",
                "data-word-wrap": "",
                "data-filename": "ファイルパス",
                "data-copy": "",
                "data-pagefind-ignore": "all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                            children: "\\\\Server\\Common\\01_Daily\\CB商品データ.xlsm"
                        }, void 0, false, {
                            fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                            lineNumber: 54,
                            columnNumber: 572
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 554
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                    lineNumber: 54,
                    columnNumber: 536
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 404
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 717
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Excel 下部のタブから ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "「夜間用」"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 841
                            }, this),
                            " シートを選択します。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 807
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "セル ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "A1"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 952
                            }, this),
                            " の日付を ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "翌日の日付"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 1005
                            }, this),
                            " に変更します。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 929
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 785
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1113
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "画面右上にある ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "「一括印刷」"
                    }, void 0, false, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 1208
                    }, this),
                    " ボタンをクリックします。\r\n自動的にプリンターから帳票が出力されます。"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1181
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.blockquote, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "注意:"
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 1368
                            }, this),
                            " 「マクロが無効です」という警告が出た場合は、画面上部の「コンテンツの有効化」をクリックしてください。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 1353
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1323
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.hr, {}, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1524
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[4].id,
                children: toc[4].value
            }, void 0, false, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1548
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                className: "contains-task-list",
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        className: "task-list-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 1712
                            }, this),
                            " ",
                            "日付は翌日になっていますか？"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 1669
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        className: "task-list-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.input, {
                                type: "checkbox",
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                                lineNumber: 54,
                                columnNumber: 1847
                            }, this),
                            " ",
                            "エラーメッセージは出ていませんか？"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                        lineNumber: 54,
                        columnNumber: 1804
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/01_daily/print_daily/page.mdx.tsx",
                lineNumber: 54,
                columnNumber: 1616
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/02_weekly/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/02_weekly/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "週 2 回の作業 (Weekly)",
    "filePath": "app/02_weekly/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 週 2 回の作業 (Weekly)\r\n\r\n火曜日と木曜日に行う発注業務について記述します。\r\n\r\n## 業務一覧\r\n\r\n### 消耗品の発注\r\n\r\n- **実施日:** 毎週 火曜日・木曜日\r\n- **対象ファイル:** `エフピコ発注書.xlsx`\r\n- **送信先:** 本社担当者（江藤・日下部）";
function useTOC(props) {
    return [
        {
            value: "業務一覧",
            id: "業務一覧",
            depth: 2
        },
        {
            value: "消耗品の発注",
            id: "消耗品の発注",
            depth: 3
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "週 2 回の作業 (Weekly)"
            }, void 0, false, {
                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "火曜日と木曜日に行う発注業務について記述します。"
            }, void 0, false, {
                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                lineNumber: 36,
                columnNumber: 72
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                lineNumber: 36,
                columnNumber: 137
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                lineNumber: 36,
                columnNumber: 205
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "実施日:"
                            }, void 0, false, {
                                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 311
                            }, this),
                            " 毎週 火曜日・木曜日"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/02_weekly/page.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 295
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "対象ファイル:"
                            }, void 0, false, {
                                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 414
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "エフピコ発注書.xlsx"
                            }, void 0, false, {
                                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 471
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/02_weekly/page.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 398
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "送信先:"
                            }, void 0, false, {
                                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 563
                            }, this),
                            " 本社担当者（江藤・日下部）"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/02_weekly/page.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 547
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/02_weekly/page.mdx.tsx",
                lineNumber: 36,
                columnNumber: 273
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/03_monthly/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/03_monthly/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "月末の作業 (Monthly)",
    "filePath": "app/03_monthly/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 月末の作業 (Monthly)\r\n\r\n月末および月初に行う締め処理・次月準備の業務です。\r\n\r\n## 業務一覧\r\n\r\n### 在庫管理\r\n\r\n- **棚卸しおよび清書**\r\n  - 在庫数のリセットと実数入力\r\n  - 報告書作成\r\n\r\n### シフト管理\r\n\r\n- **シフト入力および清書**\r\n  - 新しい月のシート作成\r\n  - 年休・希望休の反映";
function useTOC(props) {
    return [
        {
            value: "業務一覧",
            id: "業務一覧",
            depth: 2
        },
        {
            value: "在庫管理",
            id: "在庫管理",
            depth: 3
        },
        {
            value: "シフト管理",
            id: "シフト管理",
            depth: 3
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "月末の作業 (Monthly)"
            }, void 0, false, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "月末および月初に行う締め処理・次月準備の業務です。"
            }, void 0, false, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 70
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 136
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 204
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "棚卸しおよび清書"
                            }, void 0, false, {
                                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                lineNumber: 39,
                                columnNumber: 310
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "在庫数のリセットと実数入力"
                                    }, void 0, false, {
                                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                        lineNumber: 39,
                                        columnNumber: 391
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "報告書作成"
                                    }, void 0, false, {
                                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                        lineNumber: 39,
                                        columnNumber: 447
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                lineNumber: 39,
                                columnNumber: 369
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                        lineNumber: 39,
                        columnNumber: 294
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 272
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 564
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "シフト入力および清書"
                            }, void 0, false, {
                                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                lineNumber: 39,
                                columnNumber: 670
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "新しい月のシート作成"
                                    }, void 0, false, {
                                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                        lineNumber: 39,
                                        columnNumber: 753
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "年休・希望休の反映"
                                    }, void 0, false, {
                                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                        lineNumber: 39,
                                        columnNumber: 806
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                                lineNumber: 39,
                                columnNumber: 731
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/03_monthly/page.mdx.tsx",
                        lineNumber: 39,
                        columnNumber: 654
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/03_monthly/page.mdx.tsx",
                lineNumber: 39,
                columnNumber: 632
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/04_ad_hoc/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/04_ad_hoc/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "随時・メンテナンス (Ad-hoc)",
    "filePath": "app/04_ad_hoc/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 随時・メンテナンス (Ad-hoc)\r\n\r\n不定期に発生する商品登録やメンテナンス業務の手順です。\r\n\r\n## 業務一覧\r\n\r\n- **新商品処理フロー**\r\n  - レシピ保存からマスタ登録までの手順\r\n- **終売処理**\r\n  - 販売終了商品のデータ整理\r\n- **数量変更依頼**\r\n  - 本社指示に基づく店舗数量の調整";
function useTOC(props) {
    return [
        {
            value: "業務一覧",
            id: "業務一覧",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        h1: "h1",
        h2: "h2",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "随時・メンテナンス (Ad-hoc)"
            }, void 0, false, {
                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "不定期に発生する商品登録やメンテナンス業務の手順です。"
            }, void 0, false, {
                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 73
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 141
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "新商品処理フロー"
                            }, void 0, false, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 247
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "レシピ保存からマスタ登録までの手順"
                                    }, void 0, false, {
                                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 328
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 306
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 231
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "終売処理"
                            }, void 0, false, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 450
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "販売終了商品のデータ整理"
                                    }, void 0, false, {
                                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 527
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 505
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 434
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "数量変更依頼"
                            }, void 0, false, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 644
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "本社指示に基づく店舗数量の調整"
                                    }, void 0, false, {
                                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 723
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 701
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 628
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/04_ad_hoc/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 209
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/99_system_specs/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {};
}),
"[project]/app/99_system_specs/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "システム仕様書 (管理者向け)",
    "filePath": "app/99_system_specs/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# システム仕様書 (管理者向け)\r\n\r\n本ページは、システム管理者および開発者向けの技術資料です。\r\nマクロの構造、ファイルパス、トラブルシューティング情報を記載しています。\r\n\r\n## コンテンツ\r\n\r\n- **ファイルパス一覧**\r\n  - 業務で使用するファイルの絶対パスおよびショートカット配置\r\n- **VBA マクロ解説**\r\n  - 自動化処理のロジック説明\r\n  - デバッグ手順\r\n- **数式辞書 (Excel Formulas)**\r\n  - 発注日計算ロジック (LET 関数など)\r\n  - シフト計算ロジック\r\n- **トラブルシューティング**\r\n  - セキュリティ警告への対処\r\n  - 既知のエラーと回避策";
function useTOC(props) {
    return [
        {
            value: "コンテンツ",
            id: "コンテンツ",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        h1: "h1",
        h2: "h2",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "システム仕様書 (管理者向け)"
            }, void 0, false, {
                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "本ページは、システム管理者および開発者向けの技術資料です。\r\nマクロの構造、ファイルパス、トラブルシューティング情報を記載しています。"
            }, void 0, false, {
                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 70
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 180
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "ファイルパス一覧"
                            }, void 0, false, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 286
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "業務で使用するファイルの絶対パスおよびショートカット配置"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 367
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 345
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 270
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "VBA マクロ解説"
                            }, void 0, false, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 500
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "自動化処理のロジック説明"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 582
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "デバッグ手順"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 637
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 560
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 484
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "数式辞書 (Excel Formulas)"
                            }, void 0, false, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 748
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "発注日計算ロジック (LET 関数など)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 842
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "シフト計算ロジック"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 905
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 820
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 732
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "トラブルシューティング"
                            }, void 0, false, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 1019
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "セキュリティ警告への対処"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1103
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "既知のエラーと回避策"
                                    }, void 0, false, {
                                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1158
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                                lineNumber: 30,
                                columnNumber: 1081
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 1003
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/99_system_specs/page.mdx.tsx",
                lineNumber: 30,
                columnNumber: 248
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
"[project]/app/page.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/setup-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    "title": "🍞 ベーカリーセンター業務マニュアルへようこそ！",
    "filePath": "app/page.mdx",
    "timestamp": 1764311135582
};
const sourceCode = "# 🍞 ベーカリーセンター業務マニュアルへようこそ！\r\n\r\nここは、毎日のパン作りと事務作業をスムーズにするための「虎の巻」サイトです！✨\r\n左のメニューから知りたい業務を選んでね！( ơ ᴗ ơ )ﾉ\r\n\r\n## 🚀 よく使うショートカット\r\n\r\n- **毎日の印刷:** [日替わり表の印刷](/01_daily/print_daily)\r\n- **発注:** [消耗品の発注フロー](/02_weekly/order_supplies)\r\n- **困った時:** [システム担当へ連絡](/99_system_specs/contact)\r\n\r\n---\r\n\r\n### 🔰 はじめての方へ\r\n\r\nまずは **「01 毎日の作業」** を見て、朝のルーティンを確認してみてね！";
function useTOC(props) {
    return [
        {
            value: "🚀 よく使うショートカット",
            id: "-よく使うショートカット",
            depth: 2
        },
        {
            value: "🔰 はじめての方へ",
            id: "-はじめての方へ",
            depth: 3
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        hr: "hr",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "🍞 ベーカリーセンター業務マニュアルへようこそ！"
            }, void 0, false, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "ここは、毎日のパン作りと事務作業をスムーズにするための「虎の巻」サイトです！✨\r\n左のメニューから知りたい業務を選んでね！( ơ ᴗ ơ )ﾉ"
            }, void 0, false, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 80
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 194
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "毎日の印刷:"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 300
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "/01_daily/print_daily",
                                children: "日替わり表の印刷"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 356
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.mdx.tsx",
                        lineNumber: 37,
                        columnNumber: 284
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "発注:"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 467
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "/02_weekly/order_supplies",
                                children: "消耗品の発注フロー"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 520
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.mdx.tsx",
                        lineNumber: 37,
                        columnNumber: 451
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "困った時:"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 636
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "/99_system_specs/contact",
                                children: "システム担当へ連絡"
                            }, void 0, false, {
                                fileName: "[project]/app/page.mdx.tsx",
                                lineNumber: 37,
                                columnNumber: 691
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.mdx.tsx",
                        lineNumber: 37,
                        columnNumber: 620
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 262
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.hr, {}, void 0, false, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 813
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 837
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "まずは ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "「01 毎日の作業」"
                    }, void 0, false, {
                        fileName: "[project]/app/page.mdx.tsx",
                        lineNumber: 37,
                        columnNumber: 928
                    }, this),
                    " を見て、朝のルーティンを確認してみてね！"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.mdx.tsx",
                lineNumber: 37,
                columnNumber: 905
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$setup$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOC_MDXWrapper"])(_createMdxContent, {
    metadata,
    toc,
    sourceCode
});
}),
];

//# sourceMappingURL=_f7c80eae._.js.map