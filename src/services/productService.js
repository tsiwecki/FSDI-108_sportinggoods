var data = [
    {
        id: "TD590001",
        price: 49.99,
        stock: "TOD50010",
        title: "5 Person Dome Tent",
        image: "Backpacktent.jpg",
        discount: 5,
        category: "Outdoor",
    },
    {
        id: "TB20001",
        price: 69.99,
        stock: "TOB20010",
        title: "2 Person Backpacking Tent",
        image: "Dometent.jpg",
        discount: 5,
        category: "Outdoor",
    },
    {
        id: "BGY0001",
        price: 9.99,
        stock: "BGY0010",
        title: "Kids' Players Series 9 in T-ball Infield Glove",
        image: "Youthgloverwb2.jpg",
        discount: 5,
        category: "Sports Gloves",
    },
    {
        id: "BGY0002-R",
        price: 29.99,
        stock: "BGY0010-L",
        title: "Youth Playmaker Series 11 in Baseball Glove Right-handed",
        image: "11 in Baseball Glove Right-handed.jpg",
        discount: 5,
        category: "Sports Gloves",
    },
    {
        id: "0BGY0001-L",
        price: 29.99,
        stock: "BGY0011-L",
        title: "Youth Playmaker Series 11 in Baseball Glove Left-handed",
        image: "11 in Baseball Glove Left-handed.jpg",
        discount: 5,
        category: "Sports Gloves"
    },
        {
        id: "BGA0002-R",
        price: 49.99,
        stock: "BGA0011-R",
        title: "12.5 in Pitcher Infield & Outfield Baseball / Softball Glove, Right-handed",
        image: "Adultglovelthand.jpg",
        discount: 5,
        category: "Sports Gloves",
    },
    {
        id: "BGA0001-L",
        price: 49.99,
        stock: "BGA0010-L",
        title: "12.5 in Pitcher Infield & Outfield Baseball / Softball Glove, Left-handed",
        image: "Adultgloverthand.jpg",
        discount: 5,
        category: "Sports Gloves",
    },    
        
    {
        id: "BBY0001",
        price: 19.99,
        stock: "BBY0010",
        title: "Rawlings Youth Plasma T-ball Bat -11",
        image: "Plasma.jpg",
        discount: 5,
        category: "Sports Bat",
    },
    {
        id: "BBA0001",
        price: 99.99,
        stock: "BBA0010",
        title: "Rawlings 51510 Senior League USA Baseball Bat",
        image: "RawlingsYouth.jpg",
        discount: 5,
        category: "Sports Bat",
    },
    {
        id: "BBAA0001",
        price: 79.99,
        stock: "BBAA0010",
        title: "EASTON Adults' Speed 2019 BBCOR Aluminum Baseball Bat -3",
        image: "Easton.jpg",
        discount: 5,
        category: "Sports Bat",
    },
    {
        id: "BBAW0001",
        price: 9.99,
        stock: "BBAW0010",
        title: "Marucci Adults' Professional Cut Wood Baseball Bat -3",
        image: "Marcci.jpg",
        discount: 5,
        category: "Sports Bat",
    },
    {
        id: "CG0001",
        price: 24.99,
        stock: "CGODG0010",
        title: "Gourmet 18 in Charcoal Kettle Grill",
        image: "Charcoal1.jpg",
        discount: 5,
        category: "Outdoor",
    },    
    {
        id: "0PG00014",
        price: 49.99,
        stock: "PGODG0010",
        title: "Walkabout Charcoal Portable Grill",
        image: "Charcoal2.jpg",
        discount: 5,
        category: "Outdoor",
    },
    {
        id: "PBG0001",
        price: 499.99,
        stock: "PBODG0010",
        title: "Pit Boss PB820D3 Pellet Grill",
        image: "PitBoss1.jpg",
        discount: 5,
        category: "Outdoor",
    },


];

class ProductService {
    getCatalog() {
        //ToDo: logic to connect to server and retrieve the catalog
        return data;
    }

    getOffers()  {}

    getProductDetails()  {}
 }

export default ProductService;