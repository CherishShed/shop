const items = [
    {
        "Name": "Rustic Granite Chair",
        "Price": "$65.20",
        "Category": "Furniture",
        "Product Description": "This rustic granite chair is the perfect addition to any outdoor space. It is made of high-quality materials and is designed to withstand the elements. The chair is both comfortable and stylish, making it a great choice for your patio or garden.",
        "image": "https://media.istockphoto.com/id/1364723827/photo/red-vines-on-the-wall-in-autumn.jpg?s=612x612&w=0&k=20&c=PdNoTHbScemVLQuQvarVJ_v_D0eKtsnueosq6DBSqCg="
    },
    {
        "Name": "Organic Mango",
        "Price": "$4.99",
        "Category": "Fruits",
        "Product Description": "This organic mango is a delicious and healthy snack. It is grown without the use of harmful pesticides or chemicals, ensuring that you are getting a pure and natural product. The mango is juicy and sweet, making it a perfect treat for any time of day.",
        "image": "https://media.istockphoto.com/id/994648940/photo/wooden-crate-with-assorted-mangos-in-rustic-kitchen-natural-lighting.jpg?s=612x612&w=0&k=20&c=qDnpo8yKWjfLUnjEOfDI3NPPMuETkEznYO1YJl4k2Eo="
    },
    {
        "Name": "Women's Running Shoes",
        "Price": "$89.99",
        "Category": "Shoes",
        "Product Description": "These women's running shoes are perfect for your daily workout routine. They are designed to provide maximum comfort and support, so you can run or walk for longer periods of time. The shoes are stylish and modern, making them a great addition to any wardrobe.",
        "image": "https://media.istockphoto.com/id/1094518612/photo/woman-tying-laces-preparing-for-training-crop.jpg?s=612x612&w=0&k=20&c=OdY5DNZ22bG9WCqi9qU3fSOOt6E384blrpPuPDmifZE="
    },
    {
        "Name": "Stainless Steel Water Bottle",
        "Price": "$19.99",
        "Category": "Sports",
        "Product Description": "This stainless steel water bottle is perfect for keeping your drinks cold or hot for hours. It is made of high-quality materials and is designed to be durable and long-lasting. The water bottle is easy to carry and is great for any outdoor activity.",
        "image": "https://media.istockphoto.com/id/1387067219/photo/modern-water-bottles-on-white-background.jpg?s=612x612&w=0&k=20&c=oT1uG_pV2amPF7WK2cDsC5eX3sWBcwehkep0cFDOt00="
    },
    {
        "Name": "Organic Avocado Oil",
        "Price": "$12.99",
        "Category": "Grocery",
        "Product Description": "This organic avocado oil is a healthy and versatile cooking oil. It is made from high-quality avocados and is rich in monounsaturated fats and antioxidants. The oil has a mild flavor and is perfect for frying, baking, or sautéing.",
        "image": "https://media.istockphoto.com/id/1303865529/photo/avocado-oil-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=AUS9cvK0eFZZs3RXHIklPeMFfsTNVzkwHBJHNv5CgPs="
    },
    {
        "Name": "Men's Leather Wallet",
        "Price": "$49.99",
        "Category": "Accessories",
        "Product Description": "This men's leather wallet is both stylish and functional. It is made of high-quality leather and has a classic design that will never go out of style. The wallet has plenty of pockets and slots for your cards and cash, making it a great choice for everyday use.",
        "image": "https://media.istockphoto.com/id/1371757401/photo/business-man-at-the-table-with-a-wallet.jpg?s=612x612&w=0&k=20&c=OmWNENXYyQZAIGaRjjdpnYVaSwgNAn9z_JKnLQye0is="
    },
    {
        "Name": "Bluetooth Headphones",
        "Price": "$69.99",
        "Category": "Electronics",
        "Product Description": "These Bluetooth headphones are perfect for listening to music or taking calls on the go. They are lightweight and comfortable, and they provide high-quality sound. The headphones are also wireless, so you can enjoy your music without any cords getting in the way.",
        "image": "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts="
    },
    {
        "Name": "Organic Brown Rice",
        "Price": "$7.99",
        "Category": "Grocery",
        "Product Description": "This organic brown rice is a healthy and nutritious choice for any meal. It is rich in fiber and nutrients and is a great source of complex carbohydrates. The rice is easy to prepare and goes well with a variety of dishes.",
        "image": "https://images.pexels.com/photos/7421207/pexels-photo-7421207.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "Name": "Organic Whole Milk",
        "Price": "$4.99",
        "Category": "Grocery",
        "Product Description": "This organic whole milk is rich and creamy, with a delicious flavor that is perfect for drinking, cooking, or baking. It is made from high-quality, grass-fed cows and is free of hormones and antibiotics. The milk is a great source of calcium and other essential nutrients.",
        "image": "https://images.pexels.com/photos/4958139/pexels-photo-4958139.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "Name": "Men's Dress Shoes",
        "Price": "$99.99",
        "Category": "Shoes",
        "Product Description": "These men's dress shoes are the perfect addition to any wardrobe. They are made of high-quality leather and have a classic design that will never go out of style. The shoes are comfortable and durable, making them a great choice for any occasion.",
        "image": "https://media.istockphoto.com/id/119152163/photo/male-shoes-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=jI3bQKtN2bmmmNx2aPx26Nur8MsDDjjZOdIkpfH0Ad0="
    },
    {
        "Name": "Fitness Tracker",
        "Price": "$49.99",
        "Category": "Electronics",
        "Product Description": "This fitness tracker is perfect for monitoring your daily activity levels. It tracks your steps, calories burned, and distance traveled, and it also monitors your sleep patterns. The tracker is lightweight and comfortable to wear, making it perfect for everyday use.",
        "image": "https://media.istockphoto.com/id/1277140421/photo/close-up-of-athletic-woman-using-fitness-tracker-at-sunset.jpg?s=612x612&w=0&k=20&c=21YxyBJQoCk2Z1CHykLomPGGi9k9iNt6JTWuXDVRzS0="
    },
    {
        "Name": "Organic Apples",
        "Price": "$2.99",
        "Category": "Fruits",
        "Product Description": "These organic apples are juicy and delicious, with a sweet and crisp flavor that is perfect for snacking or baking. They are grown without the use of harmful pesticides or chemicals, ensuring that you are getting a pure and natural product. The apples are a great source of fiber and essential nutrients.",
        "image": "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?s=612x612&w=0&k=20&c=Kx9jNvEET5ERr7oHNFMxroTc54K1Ngk7R1BW9ICX2PU="
    },
    {
        "Name": "Leather Tote Bag",
        "Price": "$79.99",
        "Category": "Accessories",
        "Product Description": "This leather tote bag is both stylish and functional. It is made of high-quality leather and has plenty of pockets and compartments for all your essentials. The bag is spacious enough to hold your laptop, books, and other daily necessities, making it a great choice for work or travel.",
        "image": "https://media.istockphoto.com/id/1362828044/photo/womens-shopper-bag-made-of-genuine-leather-in-burgundy-color-model-with-a-two-handles-on-a.jpg?s=612x612&w=0&k=20&c=mQoFNr0AsfxRsTvOvCFIYqWil3nGcPJAr2zJMNz95NI="
    },
    {
        "Name": "Organic Peanut Butter",
        "Price": "$6.99",
        "Category": "Grocery",
        "Product Description": "This organic peanut butter is made from high-quality peanuts and is free of preservatives and additives. It is rich and creamy, with a delicious flavor that is perfect for spreading on toast, sandwiches, or crackers. The peanut butter is a great source of protein and healthy fats.",
        "image": "https://media.istockphoto.com/id/1426122800/photo/peanut-paste-in-an-jar.jpg?s=612x612&w=0&k=20&c=526u3K5mzpnn5-3-PRfyKWmmcRvdsvPjIir2OSRFnk8="
    },
    {
        "Name": "Women's Running Shorts",
        "Price": "$34.99",
        "Category": "Clothing",
        "Product Description": "These women's running shorts are perfect for your daily workout routine. They are made of lightweight and breathable materials, which will keep you cool and comfortable during your runs. The shorts are also stylish and modern, making them a great addition to any wardrobe.",
        "image": "https://media.istockphoto.com/id/1161490099/photo/runner-stretching-leg-during-outdoor-warm-up-on-beach-before-run.jpg?s=612x612&w=0&k=20&c=ZE6zCC9tjE9ouaE7JI2yJjgt8aYXl9vfHBbs08O1wnM="
    },
    {
        "Name": "Bluetooth Speaker",
        "Price": "$79.99",
        "Category": "Electronics",
        "Product Description": "This Bluetooth speaker is perfect for listening to music or taking calls on the go. It is portable and easy to carry, and it provides high-quality sound. The speaker is also wireless, so you can enjoy your music without any cords getting in the way.",
        "image": "https://media.istockphoto.com/id/972240632/photo/wireless-speaker-for-smart-phone-and-radio.jpg?s=612x612&w=0&k=20&c=vDf_bhm6uomsgeKVcqGybi8-GXMHiGf90gNkbhdm3c8="
    }]

let x = 1;
items.forEach(item => {
    item["picture"] = `./images/${item.Name.toLowerCase()}.jpg`
    item["id"] = x;
    x++;
})

module.exports = items