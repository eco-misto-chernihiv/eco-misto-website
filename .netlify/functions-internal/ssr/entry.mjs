import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3qHhJUTh.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/checkout.astro.mjs');
const _page2 = () => import('./pages/api/liqpay-sendpulse.astro.mjs');
const _page3 = () => import('./pages/api/request-partnership.astro.mjs');
const _page4 = () => import('./pages/og/_template_.png.astro.mjs');
const _page5 = () => import('./pages/privacy-policy.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.11.1_@types+node@20.12.11_typescript@5.5.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/checkout.ts", _page1],
    ["src/pages/api/liqpay-sendpulse.ts", _page2],
    ["src/pages/api/request-partnership.ts", _page3],
    ["src/pages/og/[template].png.ts", _page4],
    ["src/pages/privacy-policy.astro", _page5],
    ["src/pages/projects/index.astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0cf8e7ab-b1e3-4737-a59a-3d9aba32a4f2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
