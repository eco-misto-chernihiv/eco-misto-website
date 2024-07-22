const plasticTypes = new Proxy({"src":"/_astro/plastic-types.Buq8o9GF.jpg","width":2514,"height":1676,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/plastic-fantastic/plastic-types.jpg";
							}
							
							return target[name];
						}
					});

export { plasticTypes as default };
