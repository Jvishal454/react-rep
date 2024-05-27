import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'

import menu_jeans_1 from './products/category/Jeans-1.jpg'
import tops_1 from './products/category/tops-1.jpg'
import menu_hoodie from './products/category/hoodie-2.png'
import menu_shoe from './products/category/shoes.jpg'
import menu_jacket from './products/category/jacket.png'
import menu_laptop from './products/category/laptop-1.jpg'
import menu_phone from './products/category/phone.png'
import menu_tv from './products/category/tv-1.jpg'

import tops_2 from './products/Tops/tops-2/tops-2.jpg'
import hoodie_1 from './products/hoodies/hoodie-1/hoodie-1.jpg'
import hoodie_3 from './products/hoodies/hoodie-3/hoodie-3.png'
import jacket_1 from './products/jackets/jacket-1/jacket.png'
import laptop_1 from './products/electronics/laptops/laptop-1/laptop-1.jpg'
import shoe_1 from './products/shoes/shoe-1/shoe-1.png'
import shoe_3 from './products/shoes/shoe-3/shoe-3.png'

import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import jeans_1 from './products/jeans-1/Jeans-1.jpg'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Jeans", 
        menu_image: menu_jeans_1
    },
    {
        menu_name: "Tops",
        menu_image: tops_1
    },
    {
        menu_name: "Hoodies",
        menu_image: menu_hoodie
    },
    {
        menu_name: "Shoes",
        menu_image: menu_shoe
    },
    {
        menu_name: "Jackets",
        menu_image: menu_jacket
    },
    {
        menu_name: "Laptops",
        menu_image: menu_laptop
    },
    {
        menu_name: "Phone",
        menu_image: menu_phone
    },
    {
        menu_name: "TV",
        menu_image: menu_tv
    }]

export const food_list = [
    {
        _id: "1",
        name: "Zara Fit Jeans",
        image: jeans_1,
        price: 3575,
        description: "Jeans featuring an adjustable interior waistband and front button fastening. Front pockets, matching on the leg and back.",
        category: "Jeans"
    },
    {
        _id: "2",
        name: "Puma White Jacket",
        image: jacket_1,
        price: 3500,
        description: "Great-fitting Jacket. Long sleeves with elasticated cuffs. Front pockets.",
        category: "Jackets"
    }, {
        _id: "3",
        name: "Forever 21 Top",
        image: tops_2,
        price: 2100,
        description: "Great-fitting top. Long sleeves with elasticated cuffs. Front pockets.",
        category: "Tops"
    }, {
        _id: "4",
        name: "Everlast Hoodie",
        image: hoodie_1,
        price: 2999,
        description: "Loose-fitting hoodie with a high neck and adjustable drawstrings",
        category: "Hoodies"
    }, {
        _id: "5",
        name: "Balenciaga Sneaker",
        image: shoe_1,
        price: 12500,
        description: "Cargo Sneaker in orange and blue microfiber and mesh",
        category: "Shoes"
    }, {
        _id: "6",
        name: "Sparx Mesh Sneaker",
        image: shoe_3,
        price: 2500,
        description: "Sparx Sneaker in green and black microfiber and mesh",
        category: "Shoes"
    }, 
    // {
    //     _id: "7",
    //     name: "Chicken Rolls",
    //     image: food_7,
    //     price: 90,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Rolls"
    // }, {
    //     _id: "8",
    //     name: "Veg Rolls",
    //     image: food_8,
    //     price: 69,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Rolls"
    // }, {
    //     _id: "9",
    //     name: "Ripple Ice Cream",
    //     image: food_9,
    //     price: 263,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Deserts"
    // }, {
    //     _id: "10",
    //     name: "Fruit Ice Cream",
    //     image: food_10,
    //     price: 232,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Deserts"
    // }, {
    //     _id: "11",
    //     name: "Jar Ice Cream",
    //     image: food_11,
    //     price: 250,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Deserts"
    // }, {
    //     _id: "12",
    //     name: "Vanilla Ice Cream",
    //     image: food_12,
    //     price: 195,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Deserts"
    // },
    // {
    //     _id: "13",
    //     name: "Chicken Sandwich",
    //     image: food_13,
    //     price: 120,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Sandwich"
    // },
    // {
    //     _id: "14",
    //     name: "Vegan Sandwich",
    //     image: food_14,
    //     price: 200,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Sandwich"
    // }, {
    //     _id: "15",
    //     name: "Grilled Sandwich",
    //     image: food_15,
    //     price: 106,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Sandwich"
    // }, {
    //     _id: "16",
    //     name: "Bread Sandwich",
    //     image: food_16,
    //     price: 100,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Sandwich"
    // }, {
    //     _id: "17",
    //     name: "Cup Cake",
    //     image: food_17,
    //     price: 125,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Cake"
    // }, {
    //     _id: "18",
    //     name: "Vegan Cake",
    //     image: food_18,
    //     price: 480,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Cake"
    // }, {
    //     _id: "19",
    //     name: "Butterscotch Cake",
    //     image: food_19,
    //     price: 385,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Cake"
    // }, {
    //     _id: "20",
    //     name: "Sliced Cake",
    //     image: food_20,
    //     price: 110,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Cake"
    // },
     {
        _id: "21",
        name: "Dell Inspiron Laptop ",
        image: laptop_1,
        price: 51500,
        description: "Dell Inspiron 7420 2in1 Laptop, Intel Core i5-1255U Processor/16GB/512GB/14.0",
        category: "Laptops"
     },
    //   {
    //     _id: "22",
    //     name: "Fried Cauliflower",
    //     image: food_22,
    //     price: 165,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Laptops"
    // }, {
    //     _id: "23",
    //     name: "Mix Veg Pulao",
    //     image: food_23,
    //     price: 125,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pure Veg"
    // }, {
    //     _id: "24",
    //     name: "Rice Zucchini",
    //     image: food_24,
    //     price: 140,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pure Veg"
    // },
    // {
    //     _id: "25",
    //     name: "Cheese Pasta",
    //     image: food_25,
    //     price: 160,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pasta"
    // },
    // {
    //     _id: "26",
    //     name: "Tomato Pasta",
    //     image: food_26,
    //     price: 180,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pasta"
    // }, {
    //     _id: "27",
    //     name: "Creamy Pasta",
    //     image: food_27,
    //     price: 134,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pasta"
    // }, {
    //     _id: "28",
    //     name: "Chicken Pasta",
    //     image: food_28,
    //     price: 200,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Pasta"
    // }, {
    //     _id: "29",
    //     name: "Buttter Noodles",
    //     image: food_29,
    //     price: 140,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Noodles"
    // }, {
    //     _id: "30",
    //     name: "Veg Noodles",
    //     image: food_30,
    //     price: 120,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Noodles"
    // }, {
    //     _id: "31",
    //     name: "Somen Noodles",
    //     image: food_31,
    //     price: 160,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Noodles"
    // }, {
    //     _id: "32",
    //     name: "Cooked Noodles",
    //     image: food_32,
    //     price: 98,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Noodles"
    // }
]
