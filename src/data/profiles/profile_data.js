import { faEnvelope, faUser, faTemperatureHalf, faPerson, faS, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faResearchgate, faOrcid, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'

import PlaceholderPic from './Placeholder.png'

import ProfPic from './Prof/Prof.jpeg'
// import ProfResume from './Prof/ProfResume.pdf'

import IlyasPic from "./Ilyas/Ilyas.jpg"
import IlyasResume from "./Ilyas/IlyasResume.pdf"

import AbrahamPic from "./Abraham/Abraham.jpeg"
// import AbrahamResume from "./Abraham/AbrahamResume.pdf"

const profile_data = [
    {
        "Principal Investigator": [
            {
                ProfileName: 'Jay',
                ProfileLink: "/team/jay",
                ProfilePic: ProfPic,
                Name: 'Jay Wang',
                Position: 'Assistant Professor at the University of Manitoba',
                Biography: 'Dr. Jie Wang is an Assistant Professor in the Department of Mechanical Engineering at the University of Manitoba and Director of the Robot Autonomy Lab. His research advances long-term autonomy for field robots and autonomous vehicles operating in uncertain, unstructured, and harsh environments. He develops learning-based control and physics-informed, data-driven modeling techniques to improve the safety, reliability, and adaptability of autonomous systems. Dr. Wang’s work is supported by NSERC and spans applications in mining automation, autonomous driving, Arctic exploration, and precision agriculture. He received his Ph.D. in Mechanical and Manufacturing Engineering from the University of Calgary and previously held research positions at Queen’s University, the University of Waterloo, and Concordia University.',
                Education: [
                    { degreeName: 'Bachelor of Engineering in xyz', degreeUniversity: "University of Manitoba", gradYear: "202x" },
                ],
                Awards: [
                    '',
                ],
                Featured_Publications: [
                    (
                        <>

                        </>
                    ),
                ],
                Links: [
                    { href: "mailto:xxx@myumanitoba.ca", icon: faEnvelope, text: "xxx@myumanitoba.ca" },
                    { href: '', icon: faGoogle, text: 'Google Scholar' },
                    { href: '', icon: faLinkedin, text: 'LinkedIn' },
                    { href: '', icon: faGithub, text: 'GitHub' },
                ],
                Interests: [
                    'Interest1',
                    'Interest2',
                    'Interest3',
                    'Interest4',
                ],
            },
        ],

        "Postdoctoral Researchers": [

        ],

        "Graduate Students (PhD)": [

        ],

        "Graduate Students (MSc)": [
            {
                ProfileName: 'Ilyas',
                ProfileLink: "/team/ilyas",
                ProfilePic: IlyasPic,
                Name: 'Ilyas Dawoodjee',
                Position: 'MSc Student',
                Biography: (
                    <>
                        I am <a href='https://blank-ed.github.io/ilyas_dawoodjee/#/' target_='blank' rel='noreferrer'>Ilyas Dawoodjee</a>, currently a MSc Mechanical Engineering student at University of Manitoba where I research in the Robot Autonomy Laboratory (RAL). My area of research involves computer vision and machine learning integrated with mobile robots. I have experience involving the detection of physiological signals using computer vision and digial signal processing. I previously worked as a Research Engineer in the <a href='https://building-robotics-lab.github.io/brlab/' target='_blank' rel='noreferrer'>Building Robotics Laboratory</a> at the <a href='http://www.nus.edu.sg/' target='_blank' rel='noreferrer'>National University of Singapore (NUS)</a>. I am constantly trying to learn new things and expand my knowledge base. My main language is Python.
                    </>
                ),
                Education: [
                    { degreeName: 'Master of Science in Mechanical Engineering', degreeUniversity: "University of Manitoba", gradYear: "2026" },
                    { degreeName: 'Bachelor of Engineering (First Class Honours w/ Distinction) in Mechatronics Engineering', degreeUniversity: "Asia Pacific University of Technology & Innovation", gradYear: "2022" },
                ],
                Awards: [
                    { awardName: "University of Manitoba Graduate Fellowship (UMGF)", awardPlace: "University of Manitoba", awardTime: "May 2024" },
                    { awardName: "International Graduate Student Entrance Scholarship (IGSES)", awardPlace: "University of Manitoba", awardTime: "Jan 2024" },
                    { awardName: "Outstanding Achievement Award", awardPlace: "Asia Pacific University of Technology & Innovation", awardTime: "May 2022" },
                    { awardName: "AI4S Program Inception Recipient", awardPlace: "Asia Pacific University of Technology & Innovation", awardTime: "April 2022" },
                    { awardName: "Valedictorian", awardPlace: "Asia Pacific University of Technology & Innovation", awardTime: "April 2022" }
                ],
                Featured_Publications: [
                    'Talami, R., Hu, X., Dawoodjee, I. and Ghahramani, A., 2025. <a href="https://www.tandfonline.com/doi/abs/10.1080/23744731.2025.2511555" target="_blank" rel="noreferrer">Examining different placement strategies for indoor environmental quality sensors in office environments</a>. Science and Technology for the Built Environment, pp.1-20',
                    'Dawoodjee, I. and Ghahramani, A., 2025. <a href="https://ieeexplore.ieee.org/abstract/document/10930958" target="_blank" rel="noreferrer">A Flexible Framework for Design and Validation of rPPG Methods</a>. IEEE Access',
                    'Talami, R., Dawoodjee, I. and Ghahramani, A., 2024. <a href="https://www.sciencedirect.com/science/article/pii/S2666123323000612" target="_blank" rel="noreferrer">Demystifying energy savings from dynamic temperature setpoints under weather and occupancy variability</a>. Energy and Built Environment, 5(6), pp.878-888',
                    'Talami, R., Dawoodjee, I. and Ghahramani, A., 2023. <a href="https://www.mdpi.com/2075-5309/13/12/2998" target="_blank" rel="noreferrer">Quantifying energy savings from optimal selection of HVAC temperature setpoints and setbacks across diverse occupancy rates and patterns</a>. Buildings, 13(12), p.2998'
                ],                
                Links: [
                    { href: "mailto:dawoodji@myumanitoba.ca", icon: faEnvelope, text: "Email" },
                    { href: IlyasResume, icon: faFile, text: 'Resume' },
                    { href: 'https://scholar.google.com/citations?user=FlonsoAAAAAJ&hl=en', icon: faGoogle, text: 'Google Scholar' },
                    { href: 'https://www.linkedin.com/in/ilyas-dawoodjee-858011195', icon: faLinkedin, text: 'LinkedIn' },
                    { href: 'https://github.com/blank-ed', icon: faGithub, text: 'GitHub' },
                    { href: 'https://blank-ed.github.io/ilyas_dawoodjee/#/', icon: faUser, text: "Personal Website" }
                ],
                Interests: [
                    'Computer Vision',
                    'Machine Learning',
                    'Deep Learning',
                    'Robotics',
                ],
            },
        ],

        "Undergraduate Students": [
            {
                ProfileName: 'Parker',
                ProfileLink: "/team/undergrad3",
                ProfilePic: PlaceholderPic,
                Name: 'Parker Prince',
                Position: 'BEng Student',
                Biography: 'I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. ',
                Education: [
                    { degreeName: 'Bachelor of Engineering in xyz', degreeUniversity: "University of Manitoba", gradYear: "202x" },
                ],
                Awards: [
                    '',
                ],
                Featured_Publications: [
                    (
                        <>

                        </>
                    ),
                ],
                Links: [
                    { href: "mailto:xxx@myumanitoba.ca", icon: faEnvelope, text: "xxx@myumanitoba.ca" },
                    { href: '', icon: faFile, text: 'Resume' },
                    { href: '', icon: faGoogle, text: 'Google Scholar' },
                    { href: '', icon: faLinkedin, text: 'LinkedIn' },
                    { href: '', icon: faGithub, text: 'GitHub' },
                    { href: '', icon: faUser, text: "Personal Website" }
                ],
                Interests: [
                    'Interest1',
                    'Interest2',
                    'Interest3',
                    'Interest4',
                ],
            },
            {
                ProfileName: 'Abraham',
                ProfileLink: "/team/abraham",
                ProfilePic: AbrahamPic,
                Name: 'Syed Abraham Ahmed',
                Position: 'BSc Student',
                Biography: 'My name is Abraham and I currently am a Computer Engineering Undergraduate student at the University of Manitoba. I am currently interested in topics regarding Deep Learning and Generative Models. My experience is vast with embedded systems, website development, applied machine learning, and systems engineering.',
                Education: [
                    { degreeName: 'Bachelor of Science in Computer Engineering, Minor in Computer Science', degreeUniversity: "University of Manitoba", gradYear: "2026" },
                ],
                Awards: [
                    // '1st in Senior Design @ UMEC 2025',
                    // '1st in Programming @ Canadian Engineering Competition 2024',
                    // ''
                ],
                Featured_Publications: [
                    (
                        <>

                        </>
                    ),
                ],
                Links: [
                    { href: "mailto:ahmeda16@myumanitoba.ca", icon: faEnvelope, text: "Email" },
                    // { href: '', icon: faFile, text: 'Resume' },
                    // { href: '', icon: faGoogle, text: 'Google Scholar' },
                    { href: 'https://www.linkedin.com/in/syed-abraham-ahmed', icon: faLinkedin, text: 'LinkedIn' },
                    { href: 'https://github.com/ahmeda16', icon: faGithub, text: 'GitHub' },
                    { href: 'https://ahmeda16.github.io', icon: faUser, text: "Personal Website" }
                ],
                Interests: [
                    'Machine Learning',
                    'Deep Learning',
                    'Robotics',
                    'Generative AI',
                    'System Design',
                    'Embedded Systems',
                    'Guitar',
                    'Photography'
                ],
            },
            {
                ProfileName: 'Edcel',
                ProfileLink: "/team/undergrad2",
                ProfilePic: PlaceholderPic,
                Name: 'Edcel Abanto',
                Position: 'BSc Student',
                Biography: 'I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. I am an Undergraduate studnet doing xyz at xyz. ',
                Education: [
                    { degreeName: 'Bachelor of Engineering in xyz', degreeUniversity: "University of Manitoba", gradYear: "202x" },
                ],
                Awards: [
                    '',
                ],
                Featured_Publications: [
                    (
                        <>

                        </>
                    ),
                ],
                Links: [
                    { href: "mailto:xxx@myumanitoba.ca", icon: faEnvelope, text: "xxx@myumanitoba.ca" },
                    { href: '', icon: faFile, text: 'Resume' },
                    { href: '', icon: faGoogle, text: 'Google Scholar' },
                    { href: '', icon: faLinkedin, text: 'LinkedIn' },
                    { href: '', icon: faGithub, text: 'GitHub' },
                    { href: '', icon: faUser, text: "Personal Website" }
                ],
                Interests: [
                    'Interest1',
                    'Interest2',
                    'Interest3',
                    'Interest4',
                ],
            },
        ],

        "Engineers": [
            {
                ProfileName: 'Ehsan',
                ProfileLink: "/team/ehsan",
                ProfilePic: PlaceholderPic,
                Name: 'Ehsan Jalayeri',
                Position: 'Technologist',
                Biography: 'Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here Ehsan bio here ',
                Education: [
                    { degreeName: 'Bachelor of Engineering in xyz', degreeUniversity: "University of Manitoba", gradYear: "202x" },
                ],
                Awards: [
                    '',
                ],
                Featured_Publications: [
                    (
                        <>

                        </>
                    ),
                ],
                Links: [
                    { href: "mailto:xxx@myumanitoba.ca", icon: faEnvelope, text: "xxx@myumanitoba.ca" },
                    { href: '', icon: faFile, text: 'Resume' },
                    { href: '', icon: faGoogle, text: 'Google Scholar' },
                    { href: '', icon: faLinkedin, text: 'LinkedIn' },
                    { href: '', icon: faGithub, text: 'GitHub' },
                    { href: '', icon: faUser, text: "Personal Website" }
                ],
                Interests: [
                    'Interest1',
                    'Interest2',
                    'Interest3',
                    'Interest4',
                ],
            },
        ],

        "Alumnis": [

        ]
    },
]

export default profile_data;