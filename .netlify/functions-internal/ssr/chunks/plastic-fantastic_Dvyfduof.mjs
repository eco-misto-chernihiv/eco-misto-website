const id = "plastic-fantastic.mdx";
						const collection = "projects";
						const slug = "plastic-fantastic";
						const body = "\n{/* Assets */}\nimport product1 from \"./images/plastic-fantastic/plastic_fantastic_product_001.jpg\";\nimport product2 from \"./images/plastic-fantastic/plastic_fantastic_product_002.jpg\";\nimport product3 from \"./images/plastic-fantastic/plastic_fantastic_product_003.jpg\";\nimport product4 from \"./images/plastic-fantastic/plastic_fantastic_product_004.jpg\";\nimport product5 from \"./images/plastic-fantastic/plastic_fantastic_product_005.jpg\";\nimport plasticTypes from \"./images//plastic-fantastic/plastic_types.jpg\";\n\n{/* Should start with 'images' */}\nexport const workshopImages = [\n\"images/plastic-fantastic/plastic_fantastic_001.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_002.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_003.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_004.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_005.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_006.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_007.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_008.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_009.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_010.jpg\",\n\"images/plastic-fantastic/plastic_fantastic_011.jpg\",\n];\n\n<TextContent>\n  **Plastic Fantastic** – це бренд, що об'єднує екоактивістів, дизайнерів та\n  мейкерів задля дослідження процесів переробки пластику і використання його як\n  ресурсу для предметного дизайну.\n</TextContent>\n\n<TextContent>\n  <Badge>Проблема</Badge>\n  Створення великих сміттєпереробних заводів в Україні – це дуже актуально, проте,\n  на жаль, дорого і довго. Чинні муніципальні моделі збору твердих побутових відходів\n  виключають сортування й переробку. Відходи захоронюються поблизу міст на полігонах,\n  що переповнені й, насправді, мали би бути давно зачиненими.\n</TextContent>\n\n<Blockquote>\n  <span>“</span>Ми бачимо майбутнє за локальними майстернями й сортувальними\n  станціями, що займатимуться переробкою вторсировини і формуватимуть навколо\n  себе свідомі спільноти.<span>”</span>\n</Blockquote>\n\n<TextContent>\n### З чого складається наш сміттєвий кошик?\n\nМайже 50% – це органіка, яку можна компостувати, 45% – паковання, що можна повернути в цикл переробки й отримати цінний ресурс. І лише близько 5% побутових відходів підлягають захороненню чи високотемпературній утилізації.\n\nЯк виявилося з практики роздільного збору, більше всього проблем і запитань стосуються пластика. По-перше, на пакованні можна знайти 7 різних маркувань, а по-друге, не весь пластик підлягає переробці та, відповідно, може здаватися до пунктів прийому.\n\n</TextContent>\n\n<TextContent>\n  <PhotoGrid>\n    <Full src={plasticTypes} orientation=\"square\" />\n  </PhotoGrid>\n</TextContent>\n\n<TextContent>\n  <Badge>Підхід</Badge>\n\nМайстерня Plastic Fantastic у Чернігові працює у форматі Fab Lab при мейкерському просторі Peremoha lab Національного університету “Чернігівська політехніка”. У розпорядженні дизайнерів, архітекторів і винахідників є шредер для подрібнення пластику, термопрес, інжектор та екструдер для виготовлення нових “фантастичних” виробів.\n\n**Ми проводимо відкриті екскурсії та воркшопи по роботі зі вторинним пластиком для всіх охочих, популяризуючи його роздільний збір і відповідальне споживання.**\n\n</TextContent>\n\n<TextContent>ТУТ ФОТО ОБЛАДНАННЯ</TextContent>\n\n<TextContent>\n  Теми ресайклінгу та свідомого споживання — ключові у проєкті. Існує багато\n  прикладів того, як різні світові бренди роблять стильні елементи гардеробу зі\n  вторсировини. Втім, в інших галузях якісних продуктів не так багато. У\n  більшості випадків перероблене сміття перетворюється на інше “сміття”, що ніяк\n  не покращує наш побут і не вирішує проблеми із забрудненням. Аби уникнути\n  цього ми керуємось не лише естетичним, а й системним підходом до втілення\n  ідей.\n</TextContent>\n\n<Centered>\n  <PhotoGrid>\n    <Half src={product1} orientation=\"portrait\" />\n    <Half src={product2} orientation=\"portrait\" />\n    <Half src={product3} orientation=\"portrait\" />\n    <Half src={product4} orientation=\"portrait\" />\n  </PhotoGrid>\n</Centered>\n\n<TextContent>\n    Назва “Plastic Fantastic” одночасно зародилася й у наших київських друзів з платформи \"Острів\". Оскільки маємо схожі цінності, ми прийняли рішення об'єднати зусилля й рухатись спільно на шляху до виконання цілей.\n\n    **В перспективі, ми мріємо про платформу, що об'єднуватиме майстерні і митців по всій Україні, допомогатиме обмінюватись досвідом, а також підтримувати тих, хто починає свій шлях у ресайклінгу.**\n\n</TextContent>\n\n<MultiSlideGallery imagePaths={workshopImages} />\n";
						const data = {title:"Plastic Fantastic",description:"Майстерня та бренд, що досліджують процеси переробки вторинного пластику і популяризують його використання як ресурсу для предметного дизайну.",cover:
						new Proxy({"src":"/_astro/cover_plastic-fantastic-2.CpGR91g2.png","width":1970,"height":1478,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/plastic-fantastic/cover_plastic-fantastic-2.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/plastic-fantastic/cover_plastic-fantastic-2.png";
							}
							
							return target[name];
						}
					})
					,pubDate:new Date(32472230400000),isActive:true,isCollage:true};
						const _internal = {
							type: 'content',
							filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };