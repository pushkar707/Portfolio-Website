import proofImg from '../img/proof-1.jpg'

module.exports.timeline = [
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
        sample_proof:[{proofImg,id:1},{proofImg,id:2},{proofImg,id:3},{proofImg,id:4}],
        proofs: [...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof]
    }
]