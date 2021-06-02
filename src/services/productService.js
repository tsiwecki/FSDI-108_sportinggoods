var data = [
    {
        id: "TD590001",
        price: 49.99,
        stock: "TOD50010",
        title: "Dome Tent",
        image: "Backpacktent.jpg",
        discription:  "5 Person Dome Tent",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000002",
        price: 12.00,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000003",
        price: 12.01,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000004",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000005",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
        discount: 5,
        category: "Vegetable",
    },
    {
        id: "000006",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "",
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