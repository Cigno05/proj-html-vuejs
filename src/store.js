import { reactive } from 'vue'


export const store = reactive({


    priceCard: [
        {
            title: "Designing",
            subtitle: "PROCESS",
            price: 40,
            btn: "btn btn-red",
            typeText: "gray-text",
        },
        {
            title: "Developing",
            subtitle: "PRODUCT",
            price: 60,
            bg: "gradient-salmon-bg",
            btn: "btn btn-white",
        },
        {
            title: "Supporting",
            subtitle: "CLIENTS",
            price: 80,
            btn: "btn btn-red",
            typeText: "gray-text",
        },
    ],

    sponsorImg: [
        {
            srcImg: "/img/clienty-1.png",
        },
        {
            srcImg: "/img/clienty-2.png",
        },
        {
            srcImg: "/img/clienty-3.png",
        },
        {
            srcImg: "/img/clienty-4.png",
        },
        {
            srcImg: "/img/clienty-5.png",
        },
    ],
    people: [
        {
            name: "Mickela Angel",
            job: "Marketing Manager",
            description: "When, while the lovely valley teems with vpour around meand the upper surface",
            srcImg: "/img/people-1.png",
            vote: 3,

        },
        {
            name: "Angela Devil",
            job: "Designer",
            description: "When, while the lovely valley teems with vpour around meand the upper surface",
            srcImg: "/img/people-2.png",
            vote: 2,
        },
        {
            name: "Maria God",
            job: "CEO",
            description: "When, while the lovely valley teems with vpour around meand the upper surface",
            srcImg: "/img/people-3.png",
            vote: 5,
        },
    ],
    latestWork: [
        {
            srcImg: "/img/city.jpg",
            title: "Purinky Products",
            type: "Digital Experience",
        },
        {
            srcImg: "/img/dazzle.jpg",
            title: "Tinky Products",
            type: "Analogic Experience",
        },
        {
            srcImg: "/img/dry.jpg",
            title: "Spenky Products",
            type: "Visible Experience",
        },
        {
            srcImg: "/img/phone.jpg",
            title: "Winky Products",
            type: "Audio Experience",
        },
        {
            srcImg: "/img/city.jpg",
            title: "Purinky Products",
            type: "Digital Experience",
        },
        {
            srcImg: "/img/dazzle.jpg",
            title: "Tinky Products",
            type: "Analogic Experience",
        },
        {
            srcImg: "/img/dry.jpg",
            title: "Spenky Products",
            type: "Visible Experience",
        },
    ],


})
