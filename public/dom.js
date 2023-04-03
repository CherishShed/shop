const items = [
    {
        "Name": "Rustic Granite Chair",
        "Price": "$65.20",
        "Category": "Furniture",
        "Product Description": "This rustic granite chair is the perfect addition to any outdoor space. It is made of high-quality materials and is designed to withstand the elements. The chair is both comfortable and stylish, making it a great choice for your patio or garden."
    },
    {
        "Name": "Coffee",
        "Price": "$4.99",
        "Category": "Fruits",
        "Product Description": "This organic mango is a delicious and healthy snack. It is grown without the use of harmful pesticides or chemicals, ensuring that you are getting a pure and natural product. The mango is juicy and sweet, making it a perfect treat for any time of day."
    },
    {
        "Name": "Women's Running Shoes",
        "Price": "$89.99",
        "Category": "Shoes",
        "Product Description": "These women's running shoes are perfect for your daily workout routine. They are designed to provide maximum comfort and support, so you can run or walk for longer periods of time. The shoes are stylish and modern, making them a great addition to any wardrobe."
    },
    {
        "Name": "Stainless Steel Water Bottle",
        "Price": "$19.99",
        "Category": "Sports",
        "Product Description": "This stainless steel water bottle is perfect for keeping your drinks cold or hot for hours. It is made of high-quality materials and is designed to be durable and long-lasting. The water bottle is easy to carry and is great for any outdoor activity."
    },
    {
        "Name": "Organic Avocado Oil",
        "Price": "$12.99",
        "Category": "Grocery",
        "Product Description": "This organic avocado oil is a healthy and versatile cooking oil. It is made from high-quality avocados and is rich in monounsaturated fats and antioxidants. The oil has a mild flavor and is perfect for frying, baking, or sautéing."
    },
    {
        "Name": "Men's Leather Wallet",
        "Price": "$49.99",
        "Category": "Accessories",
        "Product Description": "This men's leather wallet is both stylish and functional. It is made of high-quality leather and has a classic design that will never go out of style. The wallet has plenty of pockets and slots for your cards and cash, making it a great choice for everyday use."
    },
    {
        "Name": "Bluetooth Headphones",
        "Price": "$69.99",
        "Category": "Electronics",
        "Product Description": "These Bluetooth headphones are perfect for listening to music or taking calls on the go. They are lightweight and comfortable, and they provide high-quality sound. The headphones are also wireless, so you can enjoy your music without any cords getting in the way."
    },
    {
        "Name": "Organic Brown Rice",
        "Price": "$7.99",
        "Category": "Grocery",
        "Product Description": "This organic brown rice is a healthy and nutritious choice for any meal. It is rich in fiber and nutrients and is a great source of complex carbohydrates. The rice is easy to prepare and goes well with a variety of dishes."
    },
    {
        "Name": "Organic Whole Milk",
        "Price": "$4.99",
        "Category": "Grocery",
        "Product Description": "This organic whole milk is rich and creamy, with a delicious flavor that is perfect for drinking, cooking, or baking. It is made from high-quality, grass-fed cows and is free of hormones and antibiotics. The milk is a great source of calcium and other essential nutrients."
    },
    {
        "Name": "Men's Dress Shoes",
        "Price": "$99.99",
        "Category": "Shoes",
        "Product Description": "These men's dress shoes are the perfect addition to any wardrobe. They are made of high-quality leather and have a classic design that will never go out of style. The shoes are comfortable and durable, making them a great choice for any occasion."
    },
    {
        "Name": "Fitness Tracker",
        "Price": "$49.99",
        "Category": "Electronics",
        "Product Description": "This fitness tracker is perfect for monitoring your daily activity levels. It tracks your steps, calories burned, and distance traveled, and it also monitors your sleep patterns. The tracker is lightweight and comfortable to wear, making it perfect for everyday use."
    },
    {
        "Name": "Organic Apples",
        "Price": "$2.99",
        "Category": "Fruits",
        "Product Description": "These organic apples are juicy and delicious, with a sweet and crisp flavor that is perfect for snacking or baking. They are grown without the use of harmful pesticides or chemicals, ensuring that you are getting a pure and natural product. The apples are a great source of fiber and essential nutrients."
    },
    {
        "Name": "Leather Tote Bag",
        "Price": "$79.99",
        "Category": "Accessories",
        "Product Description": "This leather tote bag is both stylish and functional. It is made of high-quality leather and has plenty of pockets and compartments for all your essentials. The bag is spacious enough to hold your laptop, books, and other daily necessities, making it a great choice for work or travel."
    },
    {
        "Name": "Organic Peanut Butter",
        "Price": "$6.99",
        "Category": "Grocery",
        "Product Description": "This organic peanut butter is made from high-quality peanuts and is free of preservatives and additives. It is rich and creamy, with a delicious flavor that is perfect for spreading on toast, sandwiches, or crackers. The peanut butter is a great source of protein and healthy fats."
    },
    {
        "Name": "Women's Running Shorts",
        "Price": "$34.99",
        "Category": "Clothing",
        "Product Description": "These women's running shorts are perfect for your daily workout routine. They are made of lightweight and breathable materials, which will keep you cool and comfortable during your runs. The shorts are also stylish and modern, making them a great addition to any wardrobe."
    },
    {
        "Name": "Bluetooth Speaker",
        "Price": "$79.99",
        "Category": "Electronics",
        "Product Description": "This Bluetooth speaker is perfect for listening to music or taking calls on the go. It is portable and easy to carry, and it provides high-quality sound. The speaker is also wireless, so you can enjoy your music without any cords getting in the way."
    }]

function filterItems() {
    const search = $('#search').val().toLowerCase();
    const category = $('input[type="checkbox"]:checked').val();
    let filteredItems = items;
    if (search) {
        filteredItems = filteredItems.filter(item => item.Name.toLowerCase().includes(search));
    }
    if (category) {
        filteredItems = filteredItems.filter(item => item.Category.toLowerCase() === category);
    }
    $('input[name="category"], .clear-sel').click(() => {
        var checkedValues = $('input[name="category"]:checked').val()
        if (checkedValues) {
            $(".card-category").filter(function () {
                $(this.parentElement.parentElement).toggle($(this).text().trim() === checkedValues);
            })
        } else {
            $(".card").show()
        }
    });
    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $(".card-header").filter(function () {
            $(this.parentElement).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}

$(document).ready(() => {
    filterItems();

    $('#search, input[name="category"]').on('input', () => {
        filterItems();
    });

    $(".category-radios .clear-sel").click((e) => {
        e.preventDefault();
        $('input[type="radio"]').prop('checked', false);
        filterItems();
    })
    $(".category-button").click(() => {
        $(".category-radios").addClass("collapsing");
    })

    $(".radio-side").click(() => {
        $(".category-radios").removeClass("collapsing");
    })

    $('.view').click(function () {
        let id = $(this).data('id');
        $(`#modal${id}`).modal();
    })
    AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        delay: 0
    });
    new PureCounter();
});


