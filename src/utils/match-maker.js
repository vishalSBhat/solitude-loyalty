export default function matchMaker(MENU_ITEMS) {

    const randomItemsSelector = () => {
        const selected = [];
        let tempMenu = MENU_ITEMS;
        for (let i = 0; i < 3; ++i) {
            selected.push(tempMenu[Math.floor(Math.random() * tempMenu.length)]);
            tempMenu = tempMenu.filter(item => !selected.includes(item));
        }
        return selected;
    }

    const MATCH_ITEMS = [{
            visit_count: 2,
            item: randomItemsSelector()
        },
        {
            visit_count: 5,
            item: randomItemsSelector()
        },
        {
            visit_count: 7,
            item: randomItemsSelector()
        },
        {
            visit_count: 10,
            item: randomItemsSelector()
        }
    ];
    return MATCH_ITEMS;
}