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

const makeRepeated = (arr, repeats) => {
    return [].concat.apply([], Array(repeats).fill(arr));
}

module.exports.proofs = [
    {
        time:"July 2022 - January 2023",
        heading:"<span className='position'>Full Stack web developer</span> - Stickman Technologies",
        description:`
        <ul>
            <li>Worked on existing websites, and created websites and web solution from complete scratch for various brands and companies.</li>
            <li>Created <span className='fw-bold'>admin dashboard</span> for a testing products for <a href="https://geogroup.in/">geogroup</a></li>
            <li>Made full stack changes to <span className="fw-bold">ecommerce</span> website  - <a href="https://online.marvansmobile.com/">Marvans Mobile</a></li>
            <li>Wrote backend for <span className="fw-bold">inventory management</span> for marvans stock</li>
            <li>Worked on ecommerce and admin dashboard for <a href="https://store.usarocks.biz/">USA Rocks</a></li>
            <li>Any many more small projects.</li>
        </ul>
        `,
        proofs:makeRepeated(internshipImages,6)
    },
    {
        time:"January 2022 - Current",
        heading:"<span className='position'>Freelancer</span> - Upwork, linkedin",
        description:`
        <ul>
            <li>Created a mini <span className="fw-bold">web-page builder</span>(django) - <a href="http://vcard-env-last.eba-pbkqwgqd.ap-south-1.elasticbeanstalk.com/">vCard</a></li>
            <li>Created a website for people to get their texts translated by professionals - SPA through backend (flask), no JS because used in TOR browser <a href="http://pushkar707.pythonanywhere.com/">View (not completed)</a></li>
            <li>A python compiler project in django - <a href="#">View</a></li>
            <li>Electronics Site for <a href="https://newaggarwalelectricals.netlify.app/">New Aggarwal Electricals</a></li>
            <li>Pizza page for - <a href="https://toppers-pizza.netlify.app/">Toppers pizza</a></li>
        </ul>
        `,
        proofs:makeRepeated(freelanceImgs,6)
    },
]

module.exports.projects = [
    {
        name:"Personal portfolio",
        description: "My portfolio website to represent my skills, projects, experiences and more",
        url:"https://portfolio-website-pushkar.netlify.app/",
        category:"frontend"
    },
    {
        name:"i-Dragon",
        description: "A game made using html,css,js",
        url:"https://i-dragon.netlify.app/",
        category:"frontend"
    },
    {
        name:"vCard",
        description:"webpage builder for businesses created using Django",
        url:"http://vcard-env-last.eba-pbkqwgqd.ap-south-1.elasticbeanstalk.com/",
        category:"frontend"
    },
    {
        name: "Watch List",
        description: "A basic website to maintain a watch list of your favorite movies and shows made with react",
        url:"https://watch-list-by-pushkar.netlify.app/",
        category:"frontend"
    },
    {
        name:"Yelpcamp",
        description:"A responsive website to explore camping grounds",
        url:"https://yelpcamp-pushkar.cyclic.app",
        category:"frontend"
    },
    {
        name:"Gym Webiste",
        description:"A static single page website for a gym",
        url:"https://gym-website-pushkar.netlify.app/",
        category:"frontend"
    },
    {
        name:"Toppers Pizza",
        description:"SPA made with react and Tailwind CSS for demo purposes",
        url:"https://toppers-pizza.netlify.app/",
        category:"frontend"
    },
    {
        name:"Electronics Site",
        description:"Simple HTML,CSS website to create online presence for electronics shop",
        url:"https://newaggarwalelectricals.netlify.app/",
        category:"frontend"
    },
    {
        name:"vCard",
        description:"Webpage builder for businesses created using Django",
        url:"http://vcard-env-last.eba-pbkqwgqd.ap-south-1.elasticbeanstalk.com/",
        category:"full-stack"
    },
    {
        name:"vCard",
        description:"Webpage builder for businesses created using Django",
        url:"http://vcard-env-last.eba-pbkqwgqd.ap-south-1.elasticbeanstalk.com/",
        category:"python"
    },
    {
        name:"Marvans Mobile Ecommerce",
        description: "Worked over website  and inventory management system",
        url:"https://online.marvansmobile.com/",
        category:"full-stack"
    },
    {
        name:"Geo Group",
        descriptiion:"Created an admin dashbaord to work over tests and reports of a testing company",
        url:"https://geogroup.in/",
        category:"full-stack"
    },
    {
        name:"Yelpcamp",
        description:"A website to explore camping grounds made using express, mongoDb and many more.",
        url:"https://yelpcamp-pushkar.cyclic.app",
        category:"full-stack"
    },
    {
        name:"Billing App",
        description:"A billing app for single user made with express, mongodb and more.",
        url:"https://billing-app-pushkar.cyclic.app/",
        category:'full-stack'
    },
    {
        name:"Blog Website",
        description:"A blog website made for multiple users using flask and many more",
        url:"https://multi-user-flask-blog-pushkar.onrender.com/",
        category:'python'
    },
    {
        name:"Decision Review System",
        description:"A app that replicated functionality of DRS system of cricket, made with tkinter",
        url:"",
        category:"python"
    },
    {
        name:"BlackJack",
        description:"A program to replicate blackJack game",
        url:"https://github.com/pushkar707/Leetcode-Python/blob/master/blackJack.py",
        category:"python"
    },
    {
        name:"TicTacToe",
        description:"A program to replicate tictactoe game",
        url:"https://github.com/pushkar707/Leetcode-Python/blob/master/ticTacToe.py",
        category:"python"
    },
    {
        name:"Problem Solving",
        description:"Some leetcode problems that I solved using python",
        url:"https://github.com/pushkar707/Leetcode-Python",
        category:"Python"
    }
]
