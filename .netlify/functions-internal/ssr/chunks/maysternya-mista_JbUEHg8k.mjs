const id = "maysternya-mista.mdx";
						const collection = "projects";
						const slug = "maysternya-mista";
						const body = "\nimport Gallery from \"@/components/project/Gallery.astro\";\nimport Blockquote from \"@/components/project/Blockquote.astro\";\nimport BlockquoteFooter from \"@/components/project/BlockquoteFooter.astro\";\n\n{/* Should start with 'images' */}\nexport const maysternyaImages = [\n\"images/maysternya-mista/maysternya_mista_001.jpg\",\n\"images/maysternya-mista/maysternya_mista_002.jpg\",\n\"images/maysternya-mista/maysternya_mista_003.jpg\",\n\"images/maysternya-mista/maysternya_mista_004.jpg\",\n];\n\n# Heading\n\n<Gallery imagePaths={maysternyaImages} />\n\n<Blockquote>\n<span>“</span>Це була перша ініціатива, яку ми розробили у рамках програми Glovo Acts. \nПочати вирішили саме з Чернігова, який серйозно постраждав внаслідок бойових дій<span>”</span>\n\n    <BlockquoteFooter>\n        Марина Павлюк\n\n        Генеральна директорка Glovo в Україні\n    </BlockquoteFooter>\n\n</Blockquote>\n";
						const data = {id:"maysternya-mista",title:"Майстерня міста",description:"краудфандингова платформа",cover:
						new Proxy({"src":"/_astro/velokuhnya.CiL5xrNo.png","width":500,"height":377,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/velokuhnya.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/velokuhnya.png";
							}
							
							return target[name];
						}
					})
					,isCollage:true,color:"primary",pubDate:new Date(1715644800000),isActive:true};
						const _internal = {
							type: 'content',
							filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
