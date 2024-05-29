import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BTgDQvbd.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Brd_THpR.mjs');
const _page1 = () => import('./chunks/requestPartnership_BtvK8DHQ.mjs');
const _page2 = () => import('./chunks/index_YGSi5Sfi.mjs');
const _page3 = () => import('./chunks/_.._D7lANDr4.mjs');
const _page4 = () => import('./chunks/typography_C3EqKiXQ.mjs');
const _page5 = () => import('./chunks/index_vbqhrvP9.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.8.0_@types+node@20.12.11_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/requestPartnership.ts", _page1],
    ["src/pages/projects/index.astro", _page2],
    ["src/pages/projects/[...slug].astro", _page3],
    ["src/pages/typography.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8b9b7617-e0bd-4a73-b935-c9a84c16c4f4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
