import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Crgy4JoU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/requestpartnership.astro.mjs');
const _page2 = () => import('./pages/projects.astro.mjs');
const _page3 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page4 = () => import('./pages/typography.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.11.0_@types+node@20.12.11_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "6e6f2d5f-fe29-4fa0-bbd5-9b799294fbd0"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
