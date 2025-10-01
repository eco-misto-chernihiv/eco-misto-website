const product1 = new Proxy({"src":"/_astro/plastic_fantastic_product_001.oy5OHghy.jpg","width":1200,"height":1500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_001.jpg";
							}
							
							return target[name];
						}
					});

export { product1 as default };
