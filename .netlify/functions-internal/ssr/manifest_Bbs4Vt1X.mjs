import './chunks/astro_UArVnpDr.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"typography/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/typography","isIndex":false,"type":"page","pattern":"^\\/typography\\/?$","segments":[[{"content":"typography","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/typography.astro","pathname":"/typography","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.8.0_@types+node@20.12.11_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/requestpartnership","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/requestPartnership\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"requestPartnership","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/requestPartnership.ts","pathname":"/api/requestPartnership","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/ActiveProjects.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/home/Projects.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/projects/Projects.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/home/ArchiveProjects.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/home/TeamMembers.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/home/Team.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/components/projects/ArchiveProjects.astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Volumes/Media HD/Web Development/ecomisto/src/pages/typography.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/api/requestPartnership.ts":"chunks/pages/requestPartnership_Bj6M8Qr5.mjs","\u0000@astrojs-manifest":"manifest_Bbs4Vt1X.mjs","/Volumes/Media HD/Web Development/ecomisto/node_modules/.pnpm/@astrojs+react@3.2.0_@types+react-dom@18.2.19_@types+react@18.2.60_react-dom@18.2.0_react@18._tmhhqei3g2op67oqtcr6q7sk6e/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.8.0_@types+node@20.12.11_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Brd_THpR.mjs","\u0000@astro-page:src/pages/api/requestPartnership@_@ts":"chunks/requestPartnership_BtvK8DHQ.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_C6QFT_uw.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._BGjCxocA.mjs","\u0000@astro-page:src/pages/typography@_@astro":"chunks/typography_DqWQSHGU.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D268MZ4k.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/back-youth-to-backyard.mdx?astroContentCollectionEntry=true":"chunks/back-youth-to-backyard_CuxW0ZT6.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/diy-for-climate.mdx?astroContentCollectionEntry=true":"chunks/diy-for-climate_D-61JAo6.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/go-bike-chernihiv.mdx?astroContentCollectionEntry=true":"chunks/go-bike-chernihiv_CGHoDWMd.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx?astroContentCollectionEntry=true":"chunks/maysternya-mista_DDp934BL.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/participation-urbanism-Interaction.mdx?astroContentCollectionEntry=true":"chunks/participation-urbanism-Interaction_Bmrwu5rn.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/peremoha-lab.mdx?astroContentCollectionEntry=true":"chunks/peremoha-lab_CbGXUdnp.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plan-b.mdx?astroContentCollectionEntry=true":"chunks/plan-b_oNpFlmLw.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx?astroContentCollectionEntry=true":"chunks/plastic-fantastic_6PmiClm4.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/prostir-diy.mdx?astroContentCollectionEntry=true":"chunks/prostir-diy_DC0w1PkA.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/supersorters.mdx?astroContentCollectionEntry=true":"chunks/supersorters_DmqOK2Wv.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/velokuhnya.mdx?astroContentCollectionEntry=true":"chunks/velokuhnya_CQ2tO-Dd.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/danya.yaml?astroDataCollectionEntry=true":"chunks/danya_C1TR37Ss.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/evgen.yaml?astroDataCollectionEntry=true":"chunks/evgen_gGb4jOQl.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/maksym.yaml?astroDataCollectionEntry=true":"chunks/maksym_DqB64HBo.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/natalya.yaml?astroDataCollectionEntry=true":"chunks/natalya_NH-1PkFN.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/olya.yaml?astroDataCollectionEntry=true":"chunks/olya_DFNyq28T.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/sergiy-bezborodko.yaml?astroDataCollectionEntry=true":"chunks/sergiy-bezborodko_D0QKKFRd.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/members/sergiy.yaml?astroDataCollectionEntry=true":"chunks/sergiy_BkBd2Rt8.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/back-youth-to-backyard.mdx?astroPropagatedAssets":"chunks/back-youth-to-backyard_BopN__FH.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/diy-for-climate.mdx?astroPropagatedAssets":"chunks/diy-for-climate_tYDR6mc_.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/go-bike-chernihiv.mdx?astroPropagatedAssets":"chunks/go-bike-chernihiv_Cl2jKLKK.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx?astroPropagatedAssets":"chunks/maysternya-mista_DB6Bf-xg.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/participation-urbanism-Interaction.mdx?astroPropagatedAssets":"chunks/participation-urbanism-Interaction_0FajjX1B.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/peremoha-lab.mdx?astroPropagatedAssets":"chunks/peremoha-lab_DSS_EneU.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plan-b.mdx?astroPropagatedAssets":"chunks/plan-b_BNjmOEoz.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx?astroPropagatedAssets":"chunks/plastic-fantastic_y-A1cKg9.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/prostir-diy.mdx?astroPropagatedAssets":"chunks/prostir-diy_C0dzNg9b.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/supersorters.mdx?astroPropagatedAssets":"chunks/supersorters_DX0GcSWY.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/velokuhnya.mdx?astroPropagatedAssets":"chunks/velokuhnya_BzIsadbn.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/back-youth-to-backyard.mdx":"chunks/back-youth-to-backyard_DW2W85O8.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/diy-for-climate.mdx":"chunks/diy-for-climate_xMI94fJ-.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/go-bike-chernihiv.mdx":"chunks/go-bike-chernihiv_B0loPKuo.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx":"chunks/maysternya-mista_Cmu5q5yY.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/participation-urbanism-Interaction.mdx":"chunks/participation-urbanism-Interaction_FId0Nf8M.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/peremoha-lab.mdx":"chunks/peremoha-lab_SrOjBLVc.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plan-b.mdx":"chunks/plan-b_COHpUtEC.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx":"chunks/plastic-fantastic_DpHOn1pW.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/prostir-diy.mdx":"chunks/prostir-diy_DqoksqfT.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/supersorters.mdx":"chunks/supersorters_3y6D5MY8.mjs","/Volumes/Media HD/Web Development/ecomisto/src/content/projects/velokuhnya.mdx":"chunks/velokuhnya_DVMK6a7o.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.CoHxX_3K.js","/astro/hoisted.js?q=1":"_astro/hoisted.B_37-2fh.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","/astro/hoisted.js?q=0":"_astro/hoisted.97_XkwxO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/hero.Ds-BNCRD.jpg","/_astro/sendpulse.CsENtebY.png","/_astro/tolocar-black.SGVwP3Oy.png","/_astro/velokuhnya.CiL5xrNo.png","/_astro/tolocar_021.CbX6D-Qx.jpg","/_astro/sergiy.BW6xSnUF.png","/_astro/achievments-bg.Ba-uTvB4.jpg","/_astro/index.BeaEfR71.css","/_astro/index.CR1bJ-d5.css","/_astro/index.Q849CtcT.css","/ecomisto-showreel.mp4","/favicon.svg","/_astro/ActiveProjects.astro_astro_type_script_index_0_lang.BuYV8UC1.js","/_astro/client.CwWKiGVO.js","/_astro/hoisted.97_XkwxO.js","/_astro/hoisted.B_37-2fh.js","/_astro/hoisted.CoHxX_3K.js","/fonts/Ermilov-Bold.woff","/fonts/Mariupol-Bold.woff","/fonts/Mariupol-Medium.woff","/fonts/Mariupol-Regular.woff","/fonts/MariupolSymbols.woff","/projects/index.html","/typography/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
