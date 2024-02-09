// assets images project
import MoneygerImg from '../assets/images/moneyger 2.png'
import HijauKitaImg from '../assets/images/HijauKita.png'
import Erules from '../assets/images/E-Rules.png'
import KangSayur from '../assets/images/KangSayur.png'
import StoryApp from '../assets/images/Story App.jpg'
import TheHorizon from '../assets/images/The Horizon.png'
import BesitoTimes from '../assets/images/Besito times.png'
import KirimPesan from '../assets/images/KirimPesan Apps.png'

// assets icons technology
import iconKotlin from '../../src/assets/icons/iconsKotlin.svg'
import iconFlutter from '../../src/assets/icons/iconsFlutter.svg'
import iconDart from '../../src/assets/icons/iconsDart.svg'
import iconFirebase from '../../src/assets/icons/iconsFirebase.svg'
import iconMLKIT from '../../src/assets/icons/iconsMLkit.svg'
import iconLaravel from '../../src/assets/icons/iconsLaravel.svg'
import iconMapbox from '../../src/assets/icons/iconsMapbox.svg'
import iconMidtrans from '../../src/assets/icons/iconsMidtrans.svg'
import iconPusher from '../../src/assets/icons/iconsPusher.svg'
import iconGmaps from '../../src/assets/icons/iconsGmaps.svg'

const portfolioData = {
    projects: [
        {
            id: "1",
            title: "Moneyger",
            description: "Moneyger: Your Easy Finance Management Solution with Productivity Boosting Features.",
            about: 'Moneyger is an application platform for managing finances easily. This application also offers various features that can help people simplify their productivity.',
            link: "https://github.com/Akbarrzql/moneyger",
            technology: [
                {
                    name: "Firebase",
                    icon: iconFirebase,
                },
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                }
            ],
            image: MoneygerImg,
        },
        {
            id: "2",
            title: "HijauKita",
            description: "HijauKita is an app platform supporting UN's SDGs program, offering community activity info.",
            about: `HijauKita is an application platform that aims to help the UN's SGDs program.This application provides information about various activities that can be followed by the community.`,
            link: "https://github.com/Akbarrzql/hijaukita",
            technology: [
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                },
                {
                    name: "ML",
                    icon: iconMLKIT,
                },
                {
                    name: "OpenAi",
                    icon: iconDart,
                },
                {
                    name: "Laravel",
                    icon: iconLaravel,
                }
            ],
            image: HijauKitaImg,
        },
        {
            id: "3",
            title: "E-Rules",
            description: `E-Rules is an application for reporting school violations, supported by authorized teachers for handling disciplinary issues.`,
            about: `E-Rules is an application that can report violations that exist at school, this application is supported by teachers who are authorized to handle violations at school.`,
            link: null,
            technology: [
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                },
                {
                    name: "Laravel",
                    icon: iconLaravel,
                }
            ],
            image: Erules,
        },
        {
            id: "4",
            title: "KangSayur",
            description: `KangSayur: Marketplace for agricultural and livestock products. Users can order and sellers can deliver using the driver feature.`,
            about: `KangSayur is a marketplace platform for buying and selling agricultural and livestock products, in the application users can order and it can be delivered by the seller directly with the driver feature.`,
            link: null,
            technology: [
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                },
                {
                    name: "Laravel",
                    icon: iconLaravel,
                },
                {
                    name: "Mapbox",
                    icon: iconMapbox,
                },
                {
                    name: "Firebase",
                    icon: iconFirebase,
                },
                {
                    name: "Midtrans",
                    icon: iconMidtrans,
                },
                {
                    name: "Pusher",
                    icon: iconPusher,
                }
            ],
            image: KangSayur,
        },
        {
            id: "5",
            title: "Story App",
            description: `Geolocation-based story app with Google Maps integration and Android Architecture Components.`,
            about: `Create a story application using geolocation and display maps from Google Maps, and have implemented the Android Architecture Component.`,
            link: "https://github.com/Akbarrzql/Github-User",
            technology: [
                {
                    name: "Kotlin",
                    icon: iconKotlin,
                },
                {
                    name: "Gmaps API",
                    icon: iconGmaps,
                },
            ],
            image: StoryApp,
        },
        {
            id: "6",
            title: "The Horizon",
            description: `The Horizon: Global educational app with features like daily history, top searches, and historical articles.`,
            about: `The Horizon is an educational application platform that has global educational features such as today's history, top searches and historical articles.`,
            link: "https://github.com/Akbarrzql/The-Horizon",
            technology: [
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                },
                {
                    name: "Firebase",
                    icon: iconFirebase,
                },
            ],
            image: TheHorizon,
        },
        {
            id: "7",
            title: "Besito Times",
            description: `Besito Times: Global news app with New York Times content and Indonesian province COVID data.`,
            about: `Besito Times is a global news application taken from The New York Times API and Covid data in all provinces in Indonesia.`,
            link: null,
            technology: [
                {
                    name: "Flutter",
                    icon: iconFlutter,
                },
                {
                    name: "Dart",
                    icon: iconDart,
                },
            ],
            image: BesitoTimes,
        },
        {
            id: "8",
            title: "KirimPesan",
            description: `KirimPesan: Snap a photo of a phone number to instantly detect and use it without typing.`,
            about: `KirimPesan is an application that allows you to just take a photo of the telephone number you need and it will immediately detect the number without having to type`,
            link: null,
            technology: [
                {
                    name: "Kotlin",
                    icon: iconKotlin,
                },
                {
                    name: "Firebase",
                    icon: iconFirebase,
                },
            ],
            image: KirimPesan,
        },
    ],
    article: [
        {
            title: "How to use React Context API",
            link: "https://www.google.com",
        },
        {
            title: "How to use React Context API",
            link: "https://www.google.com",
        },
        {
            title: "How to use React Context API",
            link: "https://www.google.com",
        },
        {
            title: "How to use React Context API",
            link: "https://www.google.com",
        },
        {
            title: "How to use React Context API",
            link: "https://www.google.com",
        },
    ],
};

export default portfolioData;
