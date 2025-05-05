const back2BackPdf = new Proxy({"src":"/_astro/back2back-pdf.DWfJCuGg.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/back-to-back/back2back-pdf.jpg";
							}
							
							return target[name];
						}
					});

export { back2BackPdf as default };
