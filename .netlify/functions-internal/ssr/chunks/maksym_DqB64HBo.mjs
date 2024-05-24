const id = "maksym";
const collection = "members";
const data = {name:"Максим",position:"Адміністратор Лабораторії",picture:
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
	filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/members/maksym.yaml",
	rawData: "name: Максим\nposition: Адміністратор Лабораторії\npicture: \"./images/sergiy.png\"\n",
};

export { _internal, collection, data, id };
