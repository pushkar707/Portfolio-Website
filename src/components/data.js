import proofImg from '../img/proof-1.jpg'

const makeRepeated = (arr, repeats) => {
    return [].concat.apply([], Array(repeats).fill(arr));
}

export default [
    {
        time:"January 2022 - July 2022",
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
        proofs:makeRepeated([{proofImg,id:1},{proofImg,id:2},{proofImg,id:3},{proofImg,id:4},{proofImg,id:5}],6),
        // proofs: [...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof]
    },
    {
        time:"July 2022 - FEB 2023",
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
        proofs:makeRepeated([{proofImg,id:1},{proofImg,id:2},{proofImg,id:3},{proofImg,id:4},{proofImg,id:5}],6),
        // proofs: [...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof]
    },
]