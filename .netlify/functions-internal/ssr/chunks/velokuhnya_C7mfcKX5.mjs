const id = "velokuhnya.mdx";
						const collection = "projects";
						const slug = "velokuhnya";
						const body = "\nimport WorkingHours from \"@/components/project/WorkingHours.astro\";\nimport bikesForUkraine from \"./images/velokuhnya/bikes-for-ukraine.png\";\nimport workingHours from \"./images/velokuhnya/working-hours.jpg\";\n\n{/* Should start with 'images' */}\nexport const velokuhnyaImages = [\n\"images/velokuhnya/velokuhnya_001.jpg\",\n\"images/velokuhnya/velokuhnya_002.jpg\",\n\"images/velokuhnya/velokuhnya_003.jpg\",\n\"images/velokuhnya/velokuhnya_004.jpg\",\n\"images/velokuhnya/velokuhnya_005.jpg\",\n\"images/velokuhnya/velokuhnya_006.jpg\",\n\"images/velokuhnya/velokuhnya_007.jpg\",\n\"images/velokuhnya/velokuhnya_008.jpg\",\n\"images/velokuhnya/velokuhnya_009.jpg\",\n\"images/velokuhnya/velokuhnya_010.jpg\",\n\"images/velokuhnya/velokuhnya_011.jpg\",\n\"images/velokuhnya/velokuhnya_012.jpg\",\n];\n\n<TextContent>\n  **Велокухня** — це соціальна веломайстерня, створена для покращення сталої\n  мобільності у постраждалих від бойових дій районах Чернігова та деокупованих\n  громадах Чернігівщини.\n</TextContent>\n\n<TextContent>\n  <Badge>Проблема</Badge>\n  У 2022 році громадський транспорт у Чернігові зупинився на 40 днів через інтенсивні обстріли на початку повномасштабного вторгнення і блокади міста. З паливною кризою стикнулася і вся Чернігівщина.\n\nВідсутність громадського транспорту обмежувала мобільність в межах міста для задоволення базових потреб, таких як отримання медичної допомоги та евакуація з небезпечних зон​. Зупинка транспорту ускладнила логістику і доставку гуманітарної допомоги для маломобільних категорій містян.\n\n</TextContent>\n\n{/* prettier-ignore */}\n<Blockquote>\n\n<span>“</span>Велосипед має стати основним транспортом для міської мобільності,\nзаклавши фундамент для велосипедизації і демократизації українських міст в\nдовгостроковій перспективі.\n<span>”</span>\n\n  <BlockquoteFooter>\n  Громадська організація «Еко Місто Чернігів»\n</BlockquoteFooter>\n</Blockquote>\n\n<TextContent>\n### #BikesForUkraine\n\nГромадська організація «Еко Місто Чернігів» – співзасновники кампанії #BikesForUkraine – міжнародної ініціативи, спрямованої на підтримку українських громад, що постраждали від війни.\n\nКампанія була започаткована шістьма українськими неурядовими організаціями і займається збором велосипедів від донорів з усього світу. Ми прагнемо підвищити мобільність українських волонтерів і волонтерок, персоналу критично важливих комунальних служб, щоб забезпечити доступ до гуманітарної та іншої допомоги тим, хто найбільше цього потребує.\n\nА також велосипеди можуть отримати внутрішньо переміщені особи та мешканці модульних містечок і постраждалих районів, заповнивши форму на сайті.\n\nБільше 700 велосипедів в рамках кампанії #BikesForUkraine було надано партнерами з Європи та відремонтовано на Велотолоках разом з волонтерами у соціальній веломайстерні.\n\nВеломайстерня отримувала вживані велосипеди та інші ресурси від міжнародних партнерів, зокрема з Німеччини, Данії, Нідерландів, Італії та Латвії.\n\nІніціатори кампанії: [U-Cycle](https://u-cycle.org.ua) (Київ), ГО [«Еко Місто»](https://www.facebook.com/eco.cn.ua/) (Чернігів), ГО [«Молодіжне об’єднання Екстрим стайл»](https://www.facebook.com/sumyextremestyle) (Суми), [ГО «Міські реформи»](https://www.facebook.com/urbanreform.ua) (Харків), ГО [«ФОРЗА»](https://www.facebook.com/ngoforza) (Ужгород), ГО [«ВелоВектор»](https://www.facebook.com/velovector.org) (Одеса)\n\n</TextContent>\n\n{/* prettier-ignore */}\n<TextContent>\n\n  <ImageGrid>\n    <Full src={bikesForUkraine} orientation=\"portrait\"/>\n  </ImageGrid>\n</TextContent>\n\n<TextContent>\n  <Badge>Підхід</Badge>\n\nДля розвитку та популяризації велосипедного руху в Чернігові ми заснували першу соціальну веломайстерню, організовуємо заходи для розвитку велоспільноти та адвокатуємо міські інфраструктурні проєкти і стратегії.\n\n**Чому веломайстерня соціальна?**\n\nМайстерня надає можливість безкоштовного користуватися професійним інструментом та отримати консультації з ремонту та обслуговування велосипедів від досвідчених механіків.\n\nМайстерня проводить освітні заходи, де охочі можуть навчитися доглядати за своїми велосипедами. Це включає як теоретичні знання, так і практичні навички, що дозволяють учасникам самостійно виконувати дрібні ремонти та обслуговування власних велосипедів​.\n\n</TextContent>\n\n{/* prettier-ignore */}\n  <TextContent>\n    <Badge>Наші пропозиції</Badge>\n\n    <ResultList>\n      - Безкоштовні велосипеди для волонтерів, соціальних працівників.\n      - Професійний інструмент у вільному доступі для велосипедистів.\n      - Послуги з ремонту та догляду за приватними велосипедами.\n      - Заходи та активності для розвитку велосипедної спільноти.\n      - Воркшопи з ремонту та догляду за велосипедом.\n      - Прокат велосипедів.\n    </ResultList>\n\n  </TextContent>\n\n{/* prettier-ignore */}\n{/* <TextContent>\n\n  <ImageGrid>\n    <Full src={workingHours} orientation=\"portrait\"/>\n  </ImageGrid>\n</TextContent> */}\n<WorkingHours/>\n\n  <Logos>\n    <Icon name=\"donors-eed\" />\n    <Icon name=\"donors-usaid\" />\n    <Icon name=\"partners-ecovisio-original\" />\n    <Icon name=\"partners-u-cycle-original\" />\n    <Icon name=\"partners-agenciya-original\" />\n    <Icon name=\"partners-chernigiv-city-council\" />\n    <Icon name=\"partners-chernigiv-ova\" />\n\n  </Logos>\n\n<MultiSlideGallery imagePaths={velokuhnyaImages} />\n";
						const data = {title:"Велокухня",description:"Соціальна веломайстерня для покращення сталої мобільності у постраждалих від бойових дій та деокупованих громадах.",cover:{image:
						new Proxy({"src":"/_astro/cover_velokuhnya.BTpkGKCv.png","width":2246,"height":1684,"format":"png","fsPath":"/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/velokuhnya/cover_velokuhnya.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/images/velokuhnya/cover_velokuhnya.png";
							}
							
							return target[name];
						}
					})
					,alt:"Опис"},pubDate:new Date(32472316800000),isActive:true,isCollage:true};
						const _internal = {
							type: 'content',
							filePath: "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/velokuhnya.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
