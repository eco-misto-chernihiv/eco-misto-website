const kidsPlanetLogo = new Proxy({"src":"/_astro/logo-kids-planet.CSV25x6y.png","width":600,"height":174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/logo-kids-planet.png";
							}
							
							return target[name];
						}
					});

export { kidsPlanetLogo as k };
