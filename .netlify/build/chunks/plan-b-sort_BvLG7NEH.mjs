const sortImage = new Proxy({"src":"/_astro/plan-b-sort.BWbWZfqa.jpg","width":2200,"height":1411,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/plan-b/plan-b-sort.jpg";
							}
							
							return target[name];
						}
					});

export { sortImage as default };
