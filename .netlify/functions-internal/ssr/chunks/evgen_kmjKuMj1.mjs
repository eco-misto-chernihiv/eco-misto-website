const id = "evgen";
const collection = "members";
const data = {name:"Евген",position:"Веломайстер",picture:
						new Proxy({"src":"/_astro/evgen.Dw5pguzD.png","width":800,"height":1066,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/evgen.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/evgen.png";
							}
							
							return target[name];
						}
					})
					,indexId:8};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/evgen.yaml",
	rawData: "name: Евген\nposition: Веломайстер\npicture: \"./images/evgen.png\"\nindexId: 8\n",
};

export { _internal, collection, data, id };
