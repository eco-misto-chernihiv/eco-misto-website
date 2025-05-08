const plasticTypes = new Proxy({"src":"/_astro/plastic-types.BQqW7xHk.png","width":2200,"height":1676,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/plastic-fantastic/plastic-types.png";
							}
							
							return target[name];
						}
					});

export { plasticTypes as p };
