const id = "olya";
const collection = "members";
const data = {name:"Оля",position:"Виконавча директорка",picture:
						new Proxy({"src":"/_astro/olya.opj6kXzT.png","width":800,"height":1066,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/olya.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/olya.png";
							}
							
							return target[name];
						}
					})
					,indexId:2};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/olya.yaml",
	rawData: "name: Оля\nposition: Виконавча директорка\npicture: \"./images/olya.png\"\nindexId: 2\n",
};

export { _internal, collection, data, id };
