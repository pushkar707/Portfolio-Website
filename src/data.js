const internshipImages = [
    {img:require('./img/internship/intern certificate.png'),title:"Internship Cert."},
    {img:require('./img/internship/geo-tech-admin.png'),title:"Geo Tech"},
    {img:require('./img/internship/geo-tech-cse.png'),title:"Geo Tech"},
    {img:require('./img/internship/geo-tech-manager.png'),title:"Geo Tech"},
    {img:require('./img/internship/usa-rocks.png'),title:"USA Rocks"},
    {img:require('./img/internship/usa-rocks-admin.png'),title:"USA Rocks Admin"},
    {img:require('./img/internship/marvans.png'),title:"Marvans"},
]
 
const freelanceImgs = [
    {img:require('./img/Upwork/upwork-profile.png'),title:"Upwork Profile"},
    {img:require('./img/Upwork/compiler-img-1.png'),title:"Compiler Add"},
    {img:require('./img/Upwork/compiler-img-2.png'),title:"Compiler output"},
    {img:require('./img/Upwork/translation-site-img-2.png'),title:"translator's UI"},
    {img:require('./img/Upwork/translation-site-img-1.png'),title:"client's UI"},
    {img:require('./img/Upwork/vcard-img-1.png'),title:"vcard Demo"},
    {img:require('./img/Upwork/vcard-img-2.png'),title:"vcard Demo"},
    {img:require('./img/Upwork/electronics-site.png'),title:"electronics site"},
    {img:require('./img/Upwork/toppers-pizza.png'),title:"pizza website"},
]

const heydawImgs = [
    {img:require('./img/heydaw/certificate.png'), title:"Internship Cert."},
    {img:require('./img/heydaw/desktop-application.png'), title:"Desktop App"},
    {img:require('./img/heydaw/home-page.png'), title:"Heydaw Home"},
    {img:require('./img/heydaw/pricing.png'), title:"Heydaw Pricing Page"},
]

const makeRepeated = (arr, repeats) => {
    return [].concat.apply([], Array(repeats).fill(arr));
}
 
module.exports.proofs = [
    {
        time:"July 2022 - January 2023",
        heading:"<span className='position'>Full Stack web developer</span> - Stickman Technologies",
        description:`
        <ul>
            <li>Developed Geo Group's(50+ cr turnover) testing vertical admin dashboard, speeding up processes by 30% and overall testing by 10%.</li>
            <li>Overhauled Marvan mobile order processing, fixing 10+ critical bugs, and achieved a 40% increase in checkout conversion within the first month.</li>
            <li>Optimized Marvan's e-commerce admin dashboard, elevating sales by 20% through improved product, order, and customer management.</li>
        </ul>
        `,
        proofs:makeRepeated(internshipImages,6)
    },
    {
        time:"January 2022 - Current",
        heading:"<span className='position'>Freelancer</span> - Upwork, linkedin",
        description:`
        <ul>
            <li>Developed a mini-webpage builder, that enables professionals to generate digital business cards, containing their contact info, socials, products, and featured sections.</li>
            <li>Created a freelancing platform for professional translators, connecting clients and professionals, to be used on the Tor browser. </li>
            <li>Creating static designs and developing them for small businesses</li>
            <br/>
        </ul>
        `,
        proofs:makeRepeated(freelanceImgs,6)
    },

    {
        time:"September 2023 - January 2024",
        heading:"<span className='position'>Software Developer</span> - Heydaw Technologies",
        description:`
        <ul>
            <li>Heydaw is a startup in its initial stages, expecting a user base of over 100,000 users by the end of 2025.</li>
            <li>Implemented safe and secure payments using Stripe that meet the complex requirements of Heydaw’s subscriptions. </li>
            <li> Integrated Heydaw’s desktop application within the website, which reduced users’ initial time to start using the product by 50%.</li>            
        </ul>
        `,
        proofs:makeRepeated(heydawImgs,6)
    },
]

/*

Project 19/FEB/24
1) License generation system
2) Vercel clone
3) Price comparision Browser extension
4) Chat application
5) Vcard


INFO TO ADD FOR EACH PROJECT:-

Description
Working
Tech Used
Good points
*/

module.exports.projects = [
    {
        name:"Learner's License System",
        description: "Stripe, AWS, Firebase, socket.io, NextTs, ExpressTs, Quiz",
        url:"https://github.com/pushkar707/license-creation-system",
        category:"frontend",
        images:[
            require("./img/projects/License-system/login page.png"),
            require("./img/projects/License-system/dashboard.png"),
            require("./img/projects/License-system/Test page.png"),
            require("./img/projects/License-system/payments.png"),
        ]
    },

    {
        name:"Vercel Clone",
        description: "System Design, Docker, Redis, BullMq, AWS",
        url:"https://github.com/pushkar707/vercel-clone-pushkar",
        category:"frontend",
        images:[
            require("./img/projects/vercel-clone/current-design.jpeg"),
            require("./img/projects/vercel-clone/home.png"),
            require("./img/projects/vercel-clone/build-page.png"),
            require("./img/projects/vercel-clone/proxy-server.png"),
            require("./img/projects/vercel-clone/alternate-design.jpeg"),
        ]
    },

    {
        name:"Price Comparision Extension",
        description: "Web Scrapping, Problem Solving, Chrome extensions, Nodejs",
        url:"https://github.com/pushkar707/Price-comparer",
        category:"frontend",
        images:[
            require("./img/projects/price-comparision-ext/example-1.png"),
            require("./img/projects/price-comparision-ext/example-2.png"),
        ]
    },

    {
        name:"vCard webpage Builder",
        description: "Django, Sql, AWS, Highly interactive UI",
        url:"https://github.com/pushkar707/vCard",
        category:"frontend",
        images:[
            require("./img/projects/vcard/vcard-img-1.png"),
            require("./img/projects/vcard/vcard-img-2.png"),
        ]
    },

    {
        name:"Chat Application",
        description: "Socket.io, NextTs, AWS, Tailwind, ExpressTs,",
        url:"https://github.com/pushkar707/chatAppBackend",
        category:"frontend",
        images:[
            require("./img/projects/chat-app/chats-page.png"),
            require("./img/projects/chat-app/chats-page-2.png"),
        ]
    }   
]
 
// module.exports.projects = [
//     {
//         name: "Distractions Checker",
//         description: "Restrict usage on websites that distract you",
//         url: "https://github.com/pushkar707/productive-browser",
//         category: "frontend"
//     },
//     {
//         name: "Price Comparer",
//         description: "Compares price of an amazon product from multiple places",
//         url:"https://github.com/pushkar707/Price-comparer",
//         category:"frontend"
//     },
//     {
//         name:"vCard",
//         description:"webpage builder for businesses created using Django",
//         url:"https://github.com/pushkar707/vCard",
//         category:"frontend"
//     },
//     {
//         name: "Entry Authentication System",
//         description: "Used in college to authenticate entry of people without ID card",
//         url:"https://github.com/pushkar707/vipsStudents",
//         category:"frontend"
//     },
//     {
//         name:"Playlist Downloader",
//         description:"Allow you to download spotify playlists of",
//         url:"https://github.com/pushkar707/Spotify-downloader",
//         category:"frontend"
//     },
//     {
//         name:"Chat Application",
//         description:"Real-time chat application with nextJs, MERN and more",
//         url:"https://chat-app-express-frontend.vercel.app/chat/all",
//         category:"frontend"
//     },
//     // {
//     //     name:"Upwork for translators",
//     //     description:"A project that implements SPA partially from backend(flask) without any JS in frontend",
//     //     url:"https://github.com/pushkar707/Upwork-for-translators",
//     //     category:"frontend"
//     // }
// ]