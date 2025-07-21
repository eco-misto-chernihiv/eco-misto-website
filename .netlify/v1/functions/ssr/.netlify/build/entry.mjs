import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DoqfvneM.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/checkout.astro.mjs');
const _page3 = () => import('./pages/api/liqpay-sendpulse.astro.mjs');
const _page4 = () => import('./pages/api/request-partnership.astro.mjs');
const _page5 = () => import('./pages/en/privacy-policy.astro.mjs');
const _page6 = () => import('./pages/en.astro.mjs');
const _page7 = () => import('./pages/favicon.ico.astro.mjs');
const _page8 = () => import('./pages/manifest.json.astro.mjs');
const _page9 = () => import('./pages/og/_template_.png.astro.mjs');
const _page10 = () => import('./pages/ua/privacy-policy.astro.mjs');
const _page11 = () => import('./pages/ua.astro.mjs');
const _page12 = () => import('./pages/_lang_/projects.astro.mjs');
const _page13 = () => import('./pages/_lang_/projects/_---slug_.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.5_@netlify+blobs@8.2.0_@types+node@20.12.11_rollup@4.40.0_typescript@5.5.2_yaml@2.7.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/checkout.ts", _page2],
    ["src/pages/api/liqpay-sendpulse.ts", _page3],
    ["src/pages/api/request-partnership.ts", _page4],
    ["src/pages/en/privacy-policy.astro", _page5],
    ["src/pages/en/index.astro", _page6],
    ["src/pages/favicon.ico.ts", _page7],
    ["src/pages/manifest.json.ts", _page8],
    ["src/pages/og/[template].png.ts", _page9],
    ["src/pages/ua/privacy-policy.astro", _page10],
    ["src/pages/ua/index.astro", _page11],
    ["src/pages/[lang]/projects.astro", _page12],
    ["src/pages/[lang]/projects/[...slug].astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "17d77303-3117-47fd-9a40-669cb7a0dd76"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
