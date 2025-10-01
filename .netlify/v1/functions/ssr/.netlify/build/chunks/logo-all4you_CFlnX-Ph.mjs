const all4YouLogo = new Proxy({"src":"/_astro/logo-all4you.B0pTdSuo.jpg","width":600,"height":174,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/logo-all4you.jpg";
							}
							
							return target[name];
						}
					});

export { all4YouLogo as a };
