const knubaLogo = new Proxy({"src":"/_astro/logo-knuba.CC-WBiPA.png","width":600,"height":174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/logo-knuba.png";
							}
							
							return target[name];
						}
					});

export { knubaLogo as k };
