const data = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1604508230015-5a54faf1fa56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: true,
        type: "tshirt"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
        des: "$2.99",
        rating: "3",
        recommend: true,
        type: "tshirt"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1636954935833-80bdb8d2fcb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "tshirt"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        des: "$2.99",
        rating: "3",
        recommend: true,
        type: "tshirt"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1525200845123-a29d24f1ae65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "tshirt"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "tshirt"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "shoes"
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        des: "$2.99",
        rating: "3",
        recommend: true,
        type: "shoes"
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: true,
        type: "shoes"
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "shoes"
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1631234764568-996fab371596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "onepiece"
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1583846783088-cf6a13d83c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "onepiece"
    },
    {
        id: 13,
        img: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "onepiece"
    },
    {
        id: 14,
        img: "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "onepiece"
    },
    {
        id: 15,
        img: "https://images.unsplash.com/photo-1520975439795-26ee45a11903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "active"
    },
    {
        id: 16,
        img: "https://images.unsplash.com/photo-1505915909330-c082888680af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "active"
    },
    {
        id: 17,
        img: "https://images.unsplash.com/photo-1602670935908-094f41dcb67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "active"
    },
    {
        id: 18,
        img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "active"
    },
    {
        id: 19,
        img: "https://images.unsplash.com/photo-1573594583186-811413a6435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "autumn"
    },
    {
        id: 20,
        img: "https://images.unsplash.com/photo-1597774293578-9acb2af2cbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "autumn"
    },
    {
        id: 21,
        img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "autumn"
    },
    {
        id: 22,
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "autumn"
    },
    {
        id: 23,
        img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "summer"
    },
    {
        id: 24,
        img: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "summer"
    },
    {
        id: 25,
        img: "https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "summer"
    },
    {
        id: 26,
        img: "https://images.unsplash.com/photo-1591567462127-1f25099900ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=833&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "summer"
    },
    {
        id: 27,
        img: "https://images.unsplash.com/photo-1559070081-648fb00b2ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "accessories"
    },
    {
        id: 28,
        img: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "accessories"
    },
    {
        id: 29,
        img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "accessories"
    },
    {
        id: 30,
        img: "https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "accessories"
    },
    {
        id: 31,
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "saleshoes"
    },
    {
        id: 32,
        img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "saleshoes"
    },
    {
        id: 33,
        img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "saleshoes"
    },
    {
        id: 34,
        img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "saleshoes"
    },
    {
        id: 35,
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "new"
    },
    {
        id: 36,
        img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "new"
    },
    {
        id: 37,
        img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "new"
    },
    {
        id: 38,
        img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "new"
    },
    {
        id: 39,
        img: "https://images.unsplash.com/photo-1583846783088-cf6a13d83c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "clothing"
    },
    {
        id: 40,
        img: "https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "clothing"
    },
    {
        id: 41,
        img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "clothing"
    },
    {
        id: 42,
        img: "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "clothing"
    },
    {
        id: 43,
        img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "gift"
    },
    {
        id: 44,
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "gift"
    },
    {
        id: 45,
        img: "https://images.unsplash.com/photo-1624687943971-e86af76d57de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "gift"
    },
    {
        id: 46,
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "gift"
    },
    {
        id: 47,
        img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "inspiration"
    },
    {
        id: 48,
        img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "inspiration"
    },
    {
        id: 49,
        img: "https://images.unsplash.com/photo-1559006864-38a01f201f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "inspiration"
    },
    {
        id: 50,
        img: "https://images.unsplash.com/photo-1588445046108-14dced0c98fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        des: "$2.99",
        rating: "3",
        recommend: false,
        type: "inspiration"
    }
]
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}