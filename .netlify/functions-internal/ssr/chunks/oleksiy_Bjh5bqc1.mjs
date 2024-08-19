const id = "oleksiy";
const collection = "members";
const data = {name:"Олексій",position:"Молодший спеціаліст",picture:
						new Proxy({"src":"/_astro/oleksiy.oCK4N9QG.png","width":800,"height":1066,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/oleksiy.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/oleksiy.png";
							}
							
							return target[name];
						}
					})
					,indexId:10};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/oleksiy.yaml",
	rawData: "name: Олексій\nposition: Молодший спеціаліст\npicture: \"./images/oleksiy.png\"\nindexId: 10\n",
};

export { _internal, collection, data, id };
