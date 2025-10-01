const iakLogo = new Proxy({"src":"/_astro/logo-iak.BLmH7lOe.jpg","width":300,"height":87,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/logo-iak.jpg";
							}
							
							return target[name];
						}
					});

export { iakLogo as i };
