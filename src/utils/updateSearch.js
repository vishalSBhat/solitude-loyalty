const updateSearch = (val, menu, list) => {
    val = val.toLowerCase();
    if (val === '')
        return [];
    let searchList = menu.filter(item => !list.includes(item));
    return searchList.filter(item => item.toLowerCase().includes(val));

}

export default updateSearch;