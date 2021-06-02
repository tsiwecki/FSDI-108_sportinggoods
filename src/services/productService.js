var data = [
    {
        id: "TD590001",
        price: "$49.99",
        stock: "TOD50010",
        title: "5 Person Dome Tent",
        image: "Backpacktent.jpg",
        discount: 5,
        category: "Outdoor",
    },
    {
        id: "TB20001",
        price: "$69.99",
        stock: "TOB20010",
        title: "2 Person Backpacking Tent",
        image: "Dometent.jpg",
        discount: 5,
        category: "Outdoor",
    },
    {
        id: "BGY0001",
        price: "$9.99",
        stock: "BGY0010",
        title: "Kids' Players Series 9 in T-ball Infield Glove Right-handed",
        image: "Youthgloverthand.jpg",
        discount: 5,
        category: "Sports",
    },
    {
        id: "BGY0002-L",
        price: "$9.99",
        stock: "BGY0011-L",
        title: "Kids' Players Series 9 in T-ball Infield Glove Left-handed",
        image: "Youthglovelthand.jpg",
        discount: 5,
        category: "Sports",
    },
    {
        id: "BGY0002-R",
        price: "$29.99",
        stock: "BGY0010-L",
        title: "Youth Playmaker Series 11 in Baseball Glove Right-handed",
        image: "11 in Baseball Glove Right-handed.jpg",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "0BGY0001-L",
        price: "29.99",
        stock: "BGY0011-L",
        title: "Youth Playmaker Series 11 in Baseball Glove Left-handed",
        image: "11 in Baseball Glove Left-handed.jpg",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000007",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000008",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000009",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000010",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000011",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000012",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000013",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000014",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000015",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },


];

class ProductService {
    getCatalog() {
        //ToDo: logic to connect to server and retrieve the catalog
        return data;
    }

    getProductPrice(id) {
        return 99.99;
    }
 }

export default ProductService;