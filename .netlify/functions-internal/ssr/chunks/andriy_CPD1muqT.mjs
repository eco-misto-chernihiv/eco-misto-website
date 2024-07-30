const id = "andriy";
const collection = "members";
const data = {name:"Андрій",position:"Молодший спеціаліст",picture:
						new Proxy({"src":"/_astro/andriy.BgaLT4nQ.png","width":800,"height":1066,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/andriy.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/andriy.png";
							}
							
							return target[name];
						}
					})
					,indexId:8};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/andriy.yaml",
	rawData: "name: Андрій\nposition: Молодший спеціаліст\npicture: \"./images/andriy.png\"\nindexId: 8\n",
};

export { _internal, collection, data, id };
