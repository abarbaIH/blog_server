const mongoose = require('mongoose')
const Article = require('../models/Article.model')
const MONGO_URI = "mongodb://127.0.0.1:27017/blog_server"

const articles =
    [
        {
            "name": "iPhone 7",
            "manufacturer": "Apple",
            "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
            "color": "black",
            "price": 769,
            "imageFileName": "https://cf5.certideal.com/19475-thickbox_default/iphone-7-128-gb-oro-rosa.jpg",
            "screen": "4,7 inch IPS",
            "processor": "A10 Fusion",
            "ram": 2
        },
        {
            "name": "Galaxy S7",
            "manufacturer": "Samsung",
            "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
            "color": "grey",
            "price": 209,
            "imageFileName": "https://cf5.certideal.com/26471-thickbox_default/samsung-galaxy-s7-32-gb-oro.jpg",
            "screen": "5,1 inch Quad-HD",
            "processor": "Snapdragon 820",
            "ram": 4
        },
        {
            "name": "Honor 10",
            "manufacturer": "Huawei",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "blue",
            "price": 399,
            "imageFileName": "https://i.blogs.es/b8bce2/honor10/1366_2000.jpg",
            "screen": "5,84 inch Full-HD",
            "processor": "Kirin 970",
            "ram": 6
        },
        {
            "name": "P10 Lite",
            "manufacturer": "Huawei",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "white",
            "price": 249,
            "imageFileName": "https://manzanarota.com/wp-content/uploads/2019/07/huawei-p10-lite-pantalla-carga-bateria-camara-reparacion-manzana-rota.jpg",
            "screen": "5,2 inch Full-HD",
            "processor": "Kirin 658",
            "ram": 4
        },
        {
            "name": "Nokia 7.1",
            "manufacturer": "Nokia",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "black",
            "price": 275,
            "imageFileName": "https://media2.gsm55.com/media/device/4292/4292.png",
            "screen": "5,84 inch Full-HD",
            "processor": "Octa-core",
            "ram": 4
        },
        {
            "name": "Zen Phone 5",
            "manufacturer": "Asus",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "black",
            "price": 359,
            "imageFileName": "https://www.moviles.com/fotos/asus-zenfone-5-lite-zc600kl-70173-g.jpg",
            "screen": "6,2 inch Full-HD",
            "processor": "Snapdragon 636",
            "ram": 6
        },
        {
            "name": "MI A2",
            "manufacturer": "Xiaomi",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "black",
            "price": 179,
            "imageFileName": "https://i01.appmifile.com/webfile/globalimg/Joy/D1SD2S/D1S-AZUL-800x800!800x800!85.jpg",
            "screen": "5,99 inch Full-HD",
            "processor": "Snapdragon 660",
            "ram": 6
        },
        {
            "name": "Moto G6",
            "manufacturer": "Motorola",
            "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
            "color": "black",
            "price": 199,
            "imageFileName": "https://informaticaarea.com/wp-content/uploads/2022/10/funda-cool-silicona-para-motorola-moto-g6-transparente.jpg",
            "screen": "5,7 inch Full-HD",
            "processor": "Snapdragon 450",
            "ram": 3
        }
    ]

mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Article.create(articles)
    })
    .then(articlesFromDB => {
        console.log(`Created ${articlesFromDB.length} articles`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log(`An error occurred while creating articles from the DB: ${err}`)
    })