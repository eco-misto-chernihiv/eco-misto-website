const workingHours = new Proxy({"src":"/_astro/working-hours.BuO-UUon.jpg","width":2731,"height":2304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/velokuhnya/working-hours.jpg";
							}
							
							return target[name];
						}
					});

export { workingHours as default };
