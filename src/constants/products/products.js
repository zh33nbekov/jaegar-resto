export const MOCK_PRODUCTS = [
	{
		title: 'Кола-Барбекю',
		slug: 'cola_barbecue',
		description:
			'Ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус и соус кола барбекю',
		price: 495,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/01.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: 25 },
				{ label: 'Средняя', multiplier: 1.3, size: 30 },
				{ label: 'Большая', multiplier: 1.6, size: 35 },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Чикен Бомбони',
		slug: 'chicken_bomboni',
		description:
			'Куриные кусочки в панировке, сладкий перчик, сыры чеддер, пармезан и моцарелла, красный лук, соусы сладкий чили и альфредо',
		price: 495,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/02.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Чоризо Фреш',
		slug: 'chorizo_fresh',
		description:
			'Острые колбаски чоризо из цыпленка, зеленый перец, моцарелла, томатный соус',
		price: 295,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/03.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Сырная',
		slug: 'syrnaya',
		description: 'Моцарелла, смесь сыров чеддер и пармезан, соус альфредо',
		price: 295,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/04.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Ветчина и сыр',
		slug: 'vetchina_i_syr',
		description:
			'Ветчина из цыпленка, увеличенная порция моцареллы, соус альфредо',
		price: 295,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/05.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Двойной цыпленок',
		slug: 'dvojnoj_cyplenok',
		description: 'Двойная порция цыпленка, моцарелла, соус альфредо',
		price: 395,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/06.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Маргарита',
		slug: 'margarita',
		description:
			'Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус',
		price: 395,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/07.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Кебаб Пицца',
		slug: 'kebab_pizza',
		description:
			'Донерное мясо из говядины, моцарелла, томаты, красный лук, соленые огурчики, соус ранч, томатный соус',
		price: 495,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/08.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Песто',
		slug: 'pesto',
		description:
			'Цыпленок, моцарелла, кубики брынзы, томаты, соус песто, соус альфредо',
		price: 495,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/09.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Карбонара',
		slug: 'karbonara',
		description:
			'Ветчина из цыпленка, моцарелла, смесь сыров чеддер и пармезан, томаты, красный лук, чеснок сухой, итальянские травы, соус альфредо',
		price: 465,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/10.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Мясная',
		slug: 'myasnaya',
		description:
			'Цыпленок, ветчина из цыпленка, пепперони из цыпленка, колбаски чоризо из цыпленка, моцарелла, томатный соус',
		price: 495,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/11.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Аррива',
		slug: 'arriva',
		description:
			'Цыпленок, колбаски чоризо из цыпленка, моцарелла, сладкий перец, красный лук, томаты, чеснок сухой, соус ранч, бургер соус',
		price: 465,
		isNew: false,
		category: 'пиццы',
		imageURL: require('../../assets/menu/pizzas/12.avif'),
		options: {
			sizes: [
				{ label: 'Маленькая', multiplier: 1, size: '25 см' },
				{ label: 'Средняя', multiplier: 1.3, size: '30 см' },
				{ label: 'Большая', multiplier: 1.6, size: '35 см' },
			],
			ingredients: ['Сыр', 'Курица', 'Перец', 'Лук'],
		},
	},
	{
		title: 'Fuse tea Манго-ананас',
		slug: 'fuse_tea_mango_ananas',
		price: 89,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/01.avif'),
	},
	{
		title: 'Fuse tea Манго-ромашка',
		slug: 'fuse_tea_mango_romashka',
		price: 89,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/02.avif'),
	},
	{
		title: 'Piko Апельсин',
		slug: 'piko_apelsin',
		price: 129,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/03.avif'),
	},
	{
		title: 'Piko Виноград и Алоэ Вера',
		slug: 'piko_vinograd_i_aloe_vera',
		price: 129,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/04.avif'),
	},
	{
		title: 'Кока-Кола',
		slug: 'koka_kola',
		price: 79,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/05.avif'),
	},
	{
		title: 'Фанта',
		slug: 'fanta',
		price: 79,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/06.avif'),
	},
	{
		title: 'Спрайт',
		slug: 'sprajt',
		price: 79,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/07.avif'),
	},
	{
		title: 'BonAqua',
		slug: 'bonaqua',
		price: 79,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/08.avif'),
	},
	{
		title: 'Сок Апельсин',
		slug: 'sok_apelsin',
		price: 220,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/09.avif'),
	},
	{
		title: 'Сок Яблоко',
		slug: 'sok_yabloko',
		price: 220,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/10.avif'),
	},
	{
		title: 'Сок Вишня',
		slug: 'sok_vishnya',
		price: 220,
		isNew: false,
		category: 'напитки',
		imageURL: require('../../assets/menu/drinks/11.avif'),
	},
	{
		title: 'Капучино',
		slug: 'kapuchino',
		price: 169,
		isNew: false,
		description:
			'Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса',
		category: 'кофе',
		imageURL: require('../../assets/menu/coffee/01.avif'),
	},
	{
		title: 'Латте',
		slug: 'latte',
		price: 169,
		isNew: false,
		description:
			'Когда хочется нежную молочную пенку, на помощь приходит классический латте',
		category: 'кофе',
		imageURL: require('../../assets/menu/coffee/02.avif'),
	},
	{
		title: 'Американо',
		slug: 'amerikano',
		price: 119,
		isNew: false,
		description:
			'Пара глотков горячего Американо, и вы будете готовы покорять этот день',
		category: 'кофе',
		imageURL: require('../../assets/menu/coffee/03.avif'),
	},
	{
		title: 'Додобоны',
		slug: 'dodobony',
		price: 139,
		isNew: false,
		description:
			'Когда сливочное встречается с пряным, получаются горячие булочки с корицей в фирменном пломбирном соусе',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/01.avif'),
	},
	{
		title: 'Слоеные палочки с ананасами и брусникой',
		slug: 'sloenye_palochki_s_ananasami_i_brusnikoj',
		price: 285,
		isNew: false,
		description:
			'Здесь все сразу — брусника и ананас с фирменным пломбирным соусом на слоеном тесте',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/02.avif'),
	},
	{
		title: 'Бруслетики',
		slug: 'brusletiki',
		price: 179,
		isNew: false,
		description:
			'Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и фирменного пломбирного соуса',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/03.avif'),
	},
	{
		title: 'Пончик клубничный',
		slug: 'ponchik_klubnichnyj',
		price: 159,
		isNew: false,
		description:
			'Нежный пончик с клубничной начинкой и разноцветной посыпкой',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/04.avif'),
	},
	{
		title: 'Пончик Три шоколада',
		slug: 'ponchik_tri_shokolada',
		price: 159,
		isNew: false,
		description: 'Нежный пончик с шоколадной начинкой, глазурью и посыпкой',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/05.avif'),
	},
	{
		title: 'Пончик орео',
		slug: 'ponchik_oreo',
		price: 159,
		isNew: false,
		description:
			'Очаровывайтесь вкусом нашего нежного пончика Oreo, сочное сочетание нежного теста, ароматной ванили и хрустящих кусочков печенья',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/06.avif'),
	},
	{
		title: 'Чизкейк',
		slug: 'chizkejk',
		price: 159,
		isNew: false,
		description:
			'Классический американский десерт с мягким бархатистым вкусом',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/07.avif'),
	},
	{
		title: 'Маффин Три шоколада',
		slug: 'maffin_tri_shokolada',
		price: 139,
		isNew: false,
		description:
			'Десерт из натурального какао, нежной начинки на основе шоколада и кубиков белого и молочного шоколада',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/08.avif'),
	},
	{
		title: 'Сырники',
		slug: 'syrniki',
		price: 315,
		isNew: false,
		description:
			'Нежные, в меру сладкие и румяные сырники из печи со сгущенным молоком. Любимый десерт наших гостей!',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/09.avif'),
	},
	{
		title: 'Сырники с малиновым вареньем',
		slug: 'sirniki_s_malinovim_varenem',
		price: 315,
		isNew: false,
		description:
			'Нежные сырники, приготовленные в печи, с малиновым вареньем',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/10.avif'),
	},
	{
		title: 'Макарон Фисташка-малина',
		slug: 'makaron_fistashka_malina',
		price: 250,
		isNew: false,
		description:
			'Те самые макарон от Сабины Темиралиевой! Фисташка-малина - классический вкус, мы рекомендуем начать знакомство с линейкой макарон именно с него!',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/11.avif'),
	},
	{
		title: 'Макарон Сникерс',
		slug: 'makaron_snikers',
		price: 250,
		isNew: false,
		description:
			'Те самые макарон от Сабины Темиралиевой! Представьте сникерс, только в ручном исполнении. Еще больше орехов, шоколада и нуги!',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/12.avif'),
	},
	{
		title: 'Макарон Шоколад-нутелла',
		slug: 'makaron_shokolad_nutella',
		price: 250,
		isNew: false,
		description:
			'Те самые макарон от Сабины Темиралиевой! Шоколад и нутелла соединились в лучшем миксе, а попробовать его можно у нас',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/13.avif'),
	},
	{
		title: 'Макарон Баунти',
		slug: 'makaron_baunti',
		price: 250,
		isNew: false,
		description:
			'Те самые макарон от Сабины Темиралиевой! Румяный и нежный, как облачко с шоколадным кремом и сливочно-кокосовой начинкой. МММ, баунти!',
		category: 'десерты',
		imageURL: require('../../assets/menu/desserts/14.avif'),
	},
	{
		title: 'Омлет с ветчиной и грибами',
		slug: 'omlet_s_vetchinoi_i_gribami',
		price: 179,
		isNew: false,
		description:
			'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
		category: 'завтраки',
		imageURL: require('../../assets/menu/breakfasts/01.avif'),
	},
	{
		title: 'Омлет с пепперони',
		slug: 'omlet_s_pepperoni',
		price: 179,
		isNew: false,
		description:
			'Сытный и сбалансированный завтрак — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла',
		category: 'завтраки',
		imageURL: require('../../assets/menu/breakfasts/02.avif'),
	},
	{
		title: 'Омлет сырный',
		slug: 'omlet_sirnii',
		price: 189,
		isNew: false,
		description:
			'Горячий завтрак из омлета с поджаристой корочкой, моцарелла, кубики брынзы, сыры чеддер и пармезан',
		category: 'завтраки',
		imageURL: require('../../assets/menu/breakfasts/03.avif'),
	},
	{
		title: 'Додстер',
		slug: 'dodster',
		price: 199,
		isNew: false,
		description:
			'Горячая закуска с цыплёнком, моцареллой, томатами и соусом ранч в тонкой пшеничной лепешке',
		category: 'завтраки',
		imageURL: require('../../assets/menu/breakfasts/04.avif'),
	},
	{
		title: 'Острый Стартер',
		slug: 'ostrii_starter',
		price: 179,
		isNew: false,
		description:
			'Горячая закуска с острым цыпленком, колбасками чоризо, моцареллой, перцем халапеньо и соусом сальса в тонкой пшеничной лепешке',
		category: 'завтраки',
		imageURL: require('../../assets/menu/breakfasts/05.avif'),
	},
	{
		title: 'Салат Цезарь',
		slug: 'salat_cezar',
		price: 199,
		isNew: false,
		description:
			'Цыпленок, смесь сыров чеддер и пармезан, томаты черри, пшеничные гренки, листья салата айсберг, итальянские травы и соус Цезарь',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/01.avif'),
	},
	{
		title: 'Салат Греческий',
		slug: 'salat_grecheskii',
		price: 169,
		isNew: false,
		description:
			'Салат айсберг, томаты черри, маслины и огурчики, кубики брынзы, соус бальзамик',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/02.avif'),
	},
	{
		title: 'Рулетики с пепперони + Рулетики с сыром',
		slug: 'ruletiki_s_pepperoni_+_ruletiki_s_sirom',
		price: 255,
		isNew: false,
		description:
			'Микс горячих рулетиков с сырным соусом: 8 штук с пепперони и моцареллой, 8 штук с моцареллой',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/03.avif'),
	},
	{
		title: 'Ланчбокс с крыльями барбекю',
		slug: 'lanchboks_s_krilyami_barbekyu',
		price: 345,
		isNew: false,
		description:
			'Горячий сытный обед с куриными крылышками со специями и ароматом копчения и картофеля из печи и соусом барбекю',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/04.avif'),
	},
	{
		title: 'Ланчбокс с куриными кусочками',
		slug: 'lanchboks_s_kurinimi_kusochkami',
		price: 345,
		isNew: false,
		description:
			'Горячий сытный обед с нежными куриными кусочками, картофелем из печи и сырным соусом',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/05.avif'),
	},
	{
		title: 'Крылья барбекю',
		slug: 'krilya_barbekyu',
		price: 345,
		isNew: false,
		description: 'Пикантные куриные крылышки со специями и ароматом копчения',
		category: 'закуски',
		imageURL: require('../../assets/menu/snacks/06.avif'),
	},
]

export const PRODUCT_CATEGORIES = []

for (let i = 0; i < MOCK_PRODUCTS.length; i++) {
	const category = MOCK_PRODUCTS[i].category
	if (!PRODUCT_CATEGORIES.includes(category)) {
		PRODUCT_CATEGORIES.push(category)
	}
}

const productsMap = new Map()

for (const product of MOCK_PRODUCTS) {
	if (!productsMap.has(product.category)) {
		productsMap.set(product.category, [])
	}
	productsMap.get(product.category)?.push(product)
}

export const PRODUCT_LIST = Array.from(productsMap, ([category, products]) => ({
	category,
	products,
}))
// options: {
//       volumes: [
//         { label: '0.5 л', multiplier: 1 },
//         { label: '1 л', multiplier: 1.6 },
//       ],
//     },
