import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
    {id: 1, href: "#home", label: "home"},
    {id: 2, href: "#about", label: "about"},
    {id: 3, href: "#services", label: "services"},
    {id: 4, href: "#tours", label: "tours"}
];

export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", icon: "fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fa-twitter"},
    {id: 3, href: "https://www.squarespace.com", icon: "fa-squarespace"}
];

export const services = [
    {id: 1, title: "saving money", icon: "fa-wallet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id: 2, title: "endless hiking", icon: "fa-tree", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id: 3, title: "amazing comfort", icon: "fa-socks", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."}
];

export const tours = [
    {id: 1, image: tourImg1, title: "Tibet Adventure", date: "august 26th, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", destination: "china", duration: "6 days", price: "2100" },
    {id: 2, image: tourImg2, title: "best of java", date: "october 1th, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", destination: "indonesia", duration: "11 days", price: "1400" },
    {id: 3, image: tourImg3, title: "explore hong kong", date: "september 15th, 2020", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", destination: "hong kong", duration: "8 days", price: "5000" },
    {id: 4, image: tourImg4, title: "kenya highlights", date: "december 5th, 2019", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", destination: "kenya", duration: "20 days", price: "3300" }
];

export const footerLinks = [];