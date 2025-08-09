import type { Social } from "../types/Social";

import WhatsApp from "../assets/whatsapp.svg"
import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Walls from "../assets/wall.svg"
import Roof from "../assets/roof.svg"
import Fascade from "../assets/house.svg"
import Windows from "../assets/window.svg"

const navLinks = [
    {
        id: "gallery",
        title: "Gallery",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "prices",
        title: "Prices",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const SOCIAL: Social[] = [
    {
        id: "whatsapp",
        name: "WhatsApp",
        url: "",
        label: "whats-example",
        image: {
            logo: WhatsApp,
            width: 24,
            height: 24
        }
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "",
        label: "insta-example",
        image: {
            logo: Instagram,
            width: 24,
            height: 24
        }
    },
    {
        id: "facebook",
        name: "Facebook",
        url: "",
        label: "face-example",
        image: {
            logo: Facebook,
            width: 24,
            height: 24
        }
    }
]

const TECNOLOGIES = [
    {
        id: "walls",
        title: "Walls",
        label: "house walls",
        description: "In construction, fo both external and internal walls, we use Kerameya 2NF bricks, which are laid with a warm mortar.",
        image: {
            logo: Walls
        }
    },
    {
        id: "fascade",
        title: "Fascade",
        label: "house fascade",
        description: "Combining Roben cliker bricks with the durable silicon-silicate plaster Baumit, resistant to aggresive enviroments. Insulation consists of 200mm Neopor polystyrene.",
        image: {
            logo: Fascade
        }
    },
    {
        id: "roof",
        title: "Roof",
        label: "house roof",
        description: "Pruszynki standing seam roofing with 200mm thick basalt wool insulation.",
        image: {
            logo: Roof
        }
    },
    {
        id: "window",
        title: "Window",
        label: "house window",
        description: "In construction, fo both external and internal walls, we use Kerameya 2NF bricks, which are laid with a warm mortar.",
        image: {
            logo: Windows
        }
    },
]

const HOUSEAREA = [
    {
        id: "amber",
        areas: [
            { name: "Vestibule", size: "7.4M²" },
            { name: "Furnance", size: "4M²" },
            { name: "Studio-Kitchen", size: "58.3M²" },
            { name: "Bedroom", size: "16M²" },
            { name: "Bedroom", size: "16M²" },
            { name: "Shower Room", size: "5.5M²" },
            { name: "Master Bedroom", size: "19M²" },
            { name: "Wardrobe", size: "3.4M²" },
            { name: "Bathroom", size: "&M²" },
        ]
    },
]


export { navLinks, SOCIAL, TECNOLOGIES, HOUSEAREA }