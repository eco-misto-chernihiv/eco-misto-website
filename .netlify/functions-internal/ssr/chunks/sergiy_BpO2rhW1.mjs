const id = "sergiy";
const collection = "members";
const data = {name:"Сергій",position:"Фінансовий Менеджер",picture:
						new Proxy({"src":"/_astro/sergiy.Dg0I7MF3.png","width":800,"height":1066,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/sergiy.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/sergiy.png";
							}
							
							return target[name];
						}
					})
					,indexId:3};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/sergiy.yaml",
	rawData: "name: Сергій\nposition: Фінансовий Менеджер\npicture: \"./images/sergiy.png\"\nindexId: 3\n",
};

export { _internal, collection, data, id };
