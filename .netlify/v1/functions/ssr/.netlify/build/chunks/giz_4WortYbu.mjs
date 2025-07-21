const gizLogo = new Proxy({"src":"/_astro/giz.nGzGdn_O.png","width":1200,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/giz.png";
							}
							
							return target[name];
						}
					});

export { gizLogo as g };
