const id = "sergiy";
const collection = "members";
const data = {name:"Сергій",position:"Фінансовий Менеджер",picture:
						new Proxy({"src":"/_astro/sergiy.BW6xSnUF.png","width":688,"height":516,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/members/images/sergiy.png"}, {
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
					};
const _internal = {
	type: 'data',
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/sergiy.yaml",
	rawData: "name: Сергій\nposition: Фінансовий Менеджер\npicture: \"./images/sergiy.png\"\n",
};

export { _internal, collection, data, id };
