// Under Review Papers


// Journal Papers
import j_2024_5 from './journal/j_2024_5.pdf'
import j_2024_4 from './journal/j_2024_4.pdf'
import j_2024_3 from './journal/j_2024_3.pdf'
import j_2024_2 from './journal/j_2024_2.pdf'
import j_2024_1 from './journal/j_2024_1.pdf'
import j_2023_2 from './journal/j_2023_2.pdf'
import j_2023_1 from './journal/j_2023_1.pdf'
import j_2022_1 from './journal/j_2022_1.pdf'
import j_2021_1 from './journal/j_2021_1.pdf'
import j_2019_1 from './journal/j_2019_1.pdf'

// Conference Papers
import c_2020_1 from './conference/c_2020_1.pdf'
import c_2019_1 from './conference/c_2019_1.pdf'
import c_2017_1 from './conference/c_2017_1.pdf'
import c_2016_1 from './conference/c_2016_1.pdf'

// Theses Papers
import t_2017_1 from './theses/t_2017_1.pdf'

// Patent Papers

const publications_data = [
    {
        "Under Review": {

        },

        "Journal Papers": {
            "2024": [
                {
                    title: "Improving safety in mixed traffic: A learning-based model predictive control for autonomous and human-driven vehicle platooning",
                    journal: 'Knowledge-Based Systems',
                    volume: '293',
                    issue: '',
                    page: '111673',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Zhihao Jiang' },
                        { name: 'Yash Vardhan Pant' },
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2024_5 },
                        { type: "Cite", url: "/" },
                        { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S0950705124003083" },
                        { type: "Code", url: "https://github.com/CL2-UWaterloo/GP-MPC-of-Platooning" }
                    ],
                    keywords: [
                        "Autonomous vehicle",
                        "Human-driven vehicle",
                        "Mixed-vehicle platooning",
                        "Gaussian process",
                        "Model predictive control"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "As autonomous vehicles (AVs) become more common on public roads, their interaction with human-driven vehicles (HVs) in mixed traffic is inevitable. This requires new control strategies for AVs to handle the unpredictable nature of HVs. This study focused on safe control in mixed-vehicle platoons consisting of both AVs and HVs, particularly during longitudinal car-following scenarios. We introduce a novel model that combines a conventional first-principles model with a Gaussian process (GP) machine learning-based model to better predict HV behavior. Our results showed a significant improvement in predicting HV speed, with a 35.64% reduction in the root mean square error compared with the use of the first-principles model alone. We developed a new control strategy called GP-MPC, which uses the proposed HV model for safer distance management between vehicles in the mixed platoon. The GP-MPC strategy effectively utilizes the capacity of the GP model to assess uncertainties, thereby significantly enhancing safety in challenging traffic scenarios, such as emergency braking scenarios. In simulations, the GP-MPC strategy outperformed the baseline MPC method, offering better safety and more efficient vehicle movement in mixed traffic.",
                    displayImage: "",
                    citationLink: "wang2024improving",
                    citation: `@article{wang2024improving,
                            title={Improving safety in mixed traffic: A learning-based model predictive control for autonomous and human-driven vehicle platooning},
                            author={Wang, Jie and Jiang, Zhihao and Pant, Yash Vardhan},
                            journal={Knowledge-Based Systems},
                            volume={293},
                            pages={111673},
                            year={2024},
                            publisher={Elsevier}
                            }`
                },
                {
                    title: "Learning-based modeling of human-autonomous vehicle interaction for improved safety in mixed-vehicle platooning control",
                    journal: 'Transportation Research Part C: Emerging Technologies',
                    volume: '162',
                    issue: '',
                    page: '104600',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Yash Vardhan Pant' },
                        { name: 'Zhihao Jiang' }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2024_4 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: "https://www.sciencedirect.com/science/article/pii/S0968090X24001219" },
                        { type: "Code", url: 'https://github.com/CL2-UWaterloo/GP-MPC-of-Platooning' },
                        { type: "Video", url: 'https://youtu.be/mfPzYDQrvV4' }
                    ],
                    keywords: [
                        "Human-Autonomous vehicle interaction",
                        "Modeling uncertainty",
                        "Mixed vehicle platoon",
                        "Gaussian process",
                        "Model predictive control"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "The rising presence of autonomous vehicles (AVs) on public roads necessitates the development of advanced control strategies that account for the unpredictable nature of human-driven vehicles (HVs). This study introduces a learning-based method for modeling HV behavior, combining a traditional first-principles approach with a Gaussian process (GP) learning component. This hybrid model enhances the accuracy of velocity predictions and provides measurable uncertainty estimates. We leverage this model to develop a GP-based model predictive control (GP-MPC) strategy to improve safety in mixed vehicle platoons by integrating uncertainty assessments into distance constraints. Comparative simulations between our GP-MPC approach and a conventional model predictive control (MPC) strategy reveal that the GP-MPC ensures safer distancing and more efficient travel within the mixed platoon. By incorporating sparse GP modeling for HVs and a dynamic GP prediction in MPC, we significantly reduce the computation time of GP-MPC, making it only marginally longer than standard MPC and approximately 100 times faster than previous models not employing these techniques. Our findings underscore the effectiveness of learning-based HV modeling in enhancing safety and efficiency in mixed-traffic environments involving AV and HV interactions.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
                {
                    title: "Enhancing safety in mixed traffic: Learning-based modeling and efficient control of autonomous and human-driven vehicles",
                    journal: 'IEEE Transactions on Intelligent Transportation Systems',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Yash Vardhan Pant' },
                        { name: 'Lei Zhao' },
                        { name: 'Michał Antkiewicz' },
                        { name: 'Krzysztof Czarnecki' }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2024_3 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://arxiv.org/pdf/2404.06732' },
                        { type: 'Code', url: 'https://github.com/jwangjie/Mixed-Traffic-GP-MPC' },
                        { type: 'Video', url: 'https://youtu.be/mfPzYDQrvV4' }
                    ],
                    keywords: [
                        "Human-driven vehicle modeling",
                        "Modeling uncertainty",
                        "Gaussian process",
                        "Mixed vehicle platoon",
                        "Model predictive control"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "With the increasing presence of autonomous vehicles (AVs) on public roads, developing robust control strategies to navigate the uncertainty of human-driven vehicles (HVs) is crucial. This paper introduces an advanced method for modeling HV behavior, combining a first-principles model with Gaussian process (GP) learning to enhance velocity prediction accuracy and provide a measurable uncertainty. We validated this innovative HV model using real-world data from field experiments and applied it to develop a GP-enhanced model predictive control (GP-MPC) strategy. This strategy aims to improve safety in mixed vehicle platoons by integrating uncertainty assessment into distance constraints. Comparative simulation studies with a conventional model predictive control (MPC) approach demonstrated that our GP-MPC strategy ensures more reliable safe distancing and fosters efficient vehicular dynamics, achieving notably higher speeds within the platoon. By incorporating a sparse GP technique in HV modeling and adopting a dynamic GP prediction within the MPC framework, we significantly reduced the computation time of GP-MPC, marking it only 4.6% higher than that of the conventional MPC. This represents a substantial improvement, making the process about 100 times faster than our preliminary work without these approximations. Our findings underscore the effectiveness of learning-based HV modeling in enhancing both safety and operational efficiency in mixed-traffic environments, paving the way for more harmonious AV-HV interactions.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
                {
                    title: "A Tutorial on Gaussian Process Learning-based Model Predictive Control",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Youmin Zhang' }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2024_2 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://arxiv.org/pdf/2404.03689' } // https://doi.org/10.1145/nnnnnnn.nnnnnnn (double check)
                    ],
                    keywords: [
                        "Gaussian process",
                        "Model predictive control",
                        "Learning-based control",
                        "Mobile robotics",
                        "Dynamic modeling"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "This tutorial provides a systematic introduction to Gaussian process learning-based model predictive control (GP-MPC), an advanced approach integrating Gaussian process (GP) with model predictive control (MPC) for enhanced control in complex systems. It begins with GP regression fundamentals, illustrating how it enriches MPC with enhanced predictive accuracy and robust handling of uncertainties. A central contribution of this tutorial is the first detailed, systematic mathematical formulation of GP-MPC in literature, focusing on deriving the approximation of means and variances propagation for GP multi-step predictions. Practical applications in robotics control, such as path-following for mobile robots in challenging terrains and mixed-vehicle platooning, are discussed to demonstrate the real-world effectiveness and adaptability of GP-MPC. This tutorial aims to make GP-MPC accessible to researchers and practitioners, enriching the learning-based control field with in-depth theoretical and practical insights and fostering further innovations in complex system control.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
                {
                    title: "Autonomous locomotion mode transition in quadruped track-legged robots: A simulation-based analysis for step negotiation",
                    journal: 'Simulation Modelling Practice and Theory',
                    volume: '132',
                    issue: '',
                    page: '102893',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Krispin Davies' }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2024_1 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://arxiv.org/pdf/1905.04235' },
                        { type: "Video", url: "https://youtu.be/PGgzRK59ZZI" }
                    ],
                    keywords: [
                        "Track-Legged quadruped robot",
                        "Rolling locomotion",
                        "Walking locomotion",
                        "Locomotion mode transition",
                        "Climbing gaits"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "Hybrid track/wheel-legged robots combine the advantages of wheel-based and leg-based locomotion, granting adaptability across varied terrains through efficient transitions between rolling and walking modes. However, automating these transitions remains a significant challenge. In this paper, we introduce a method designed for autonomous mode transition in a quadruped hybrid robot with a track/wheel-legged configuration, especially during step negotiation. Our approach hinges on a decision-making mechanism that evaluates the energy efficiency of both locomotion modes using a proposed energy-based criterion. To guarantee a smooth negotiation of steps, we incorporate two climbing gaits designated for the assessment of energy usage in walking locomotion. Simulation results validate the method’s effectiveness, showing successful autonomous transitions across steps of diverse heights. Our suggested approach has universal applicability and can be modified to suit other hybrid robots of similar mechanical configuration, provided their locomotion energy performance is studied beforehand.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2023": [
                {
                    title: "An intuitive tutorial to Gaussian process regression",
                    journal: 'Computing in Science & Engineering',
                    volume: '25',
                    issue: '4',
                    page: '4-11',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2023_2 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://arxiv.org/pdf/2009.10862' },
                        { type: "Code", url: 'https://github.com/jwangjie/Gaussian-Process-Regression-Tutorial' }
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "This tutorial aims to provide an intuitive introduction to Gaussian process regression (GPR). GPR models have been widely used in machine learning applications due to their representation flexibility and inherent capability to quantify uncertainty over predictions. The tutorial starts with explaining the basic concepts that a Gaussian process is built on, including multivariate normal distribution, kernels, non-parametric models, and joint and conditional probability. It then provides a concise description of GPR and an implementation of a standard GPR algorithm. In addition, the tutorial reviews packages for implementing state-of-the-art Gaussian process algorithms. This tutorial is accessible to a broad audience, including those new to machine learning, ensuring a clear understanding of GPR fundamentals.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
                {
                    title: "Learning-based model predictive control for improved mobile robot path following using Gaussian processes and feedback linearization",
                    journal: 'Journal of Field Robotics',
                    volume: '40',
                    issue: '5',
                    page: '1014-1033',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Michael TH Fader' },
                        { name: "Joshua A Marshall" }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2023_1 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/rob.22165' },
                        { type: "Video", url: 'https://youtu.be/tC09jJQ0OXM' },
                        { type: "Data", url: 'http://jiewang.name/publications/GP-FBLMPC2022/' }
                    ],
                    keywords: [
                        "Field robotics",
                        "Machine learning",
                        "Path planning of mobile robot",
                        "Predictive control",
                        "Wheeled robotics"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "This paper proposes a high-performance path following algorithm that combines Gaussian processes (GP) based learning and feedback linearization (FBL) with model predictive control (MPC) for ground mobile robots operating in off‐road terrains, referred to as GP‐FBLMPC. The algorithm uses a nominal kinematic model and learns unmodeled dynamics as GP models by using observation data collected during field experiments. Extensive outdoor experiments using a Clearpath Husky A200 mobile robot show that the proposed GP‐FBLMPC algorithm's performance is comparable to existing GP learning‐based nonlinear MPC (GP‐NMPC) methods with respect to the path following errors. The advantage of GP‐FBLMPC is that it is generalizable in reducing path following errors for different paths that are not included in the GP models training process, while GP‐NMPC methods only work well on exactly the same path on which GP models are trained. GP‐FBLMPC is also computationally more efficient than the GP‐NMPC because it does not conduct iterative optimization and requires fewer GP models to make predictions over the MPC prediction horizon loop at every time step. Field tests show the effectiveness and generalization of reducing path following errors of the GP‐FBLMPC algorithm. It requires little training data to perform GP modeling before it can be used to reduce path‐following errors for new, more complex paths on the same terrain (see video at https://youtu.be/tC09jJQ0OXM).",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2022": [
                {
                    title: "How to pick a mobile robot simulator: A quantitative comparison of CoppeliaSim, Gazebo, MORSE and Webots with a focus on accuracy of motion",
                    journal: 'Simulation Modelling Practice and Theory',
                    volume: '120',
                    issue: '102629',
                    page: '',
                    authors: [
                        { name: 'Andrew Farley' },
                        { name: 'Jay Wang', link: '/' },
                        { name: 'Joshua A Marshall' }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2022_1 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: 'https://www.researchgate.net/profile/Jay-Wang-22/publication/361876364_How_to_pick_a_mobile_robot_simulator_A_quantitative_comparison_of_CoppeliaSim_Gazebo_MORSE_and_Webots_with_a_focus_on_the_accuracy_of_motion_simulations/links/62d763fc55922e121b7c87cc/How-to-pick-a-mobile-robot-simulator-A-quantitative-comparison-of-CoppeliaSim-Gazebo-MORSE-and-Webots-with-a-focus-on-the-accuracy-of-motion-simulations.pdf' },
                        { type: "Code", url: 'https://github.com/offroad-robotics/Robot-Simulator-Comparison' },
                    ],
                    keywords: [
                        "Robot simulation",
                        "Quantitative analysis",
                        "Robot software",
                        "Robot Operating System (ROS)"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "The number of available tools for dynamic simulation of robots has been growing rapidly in recent years. However, to the best of our knowledge, there are very few reported quantitative comparisons of the most widely-used robot simulation tools. This article attempts to partly fill this gap by providing quantitative and objective comparisons of four widely-used simulation packages for mobile robots. The comparisons reported here were conducted by obtaining data from a real Husky A200 mobile robot driving on mixed terrains as ground truth and by simulating a 3D mobile robot model in a developed identical simulation world of these terrains for each simulator. We then compared the simulation outputs with real, measured results by weighted metrics. Based on our experiments and selected metrics, we conclude that CoppeliaSim is currently the best performing simulator, although Gazebo is not far behind and is a good alternative.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2021": [
                {
                    title: "An intuitive tutorial to Gaussian processes regression",
                    journal: 'arXiv:2009.10862',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2021_1 },
                        { type: "Cite", url: "/" },
                        { type: "DOI", url: 'https://www.biostat.wisc.edu/bmi776/papers/GPR2.pdf' },
                        { type: "Code", url: 'https://github.com/jwangjie/Gaussian-Processes-Regression-Tutorial' }
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "This tutorial aims to provide an intuitive understanding of the Gaussian processes regression. Gaussian processes regression (GPR) models have been widely used in machine learning applications because of their representation flexibility and inherently uncertainty measures over predictions. The basic concepts that a Gaussian process is built on, including multivariate norma distribution, kernels, non-parametric models, joint and conditional probability were explained first. Next, the GPR was described concisely together with an implementation of a standard GPR algorithm. Beyond the standard GPR, packages to implement state-of-the-art Gaussian processes algorithms were reviewed. This tutorial was written in an accessible way to make sure readers without a machine learning background can obtain a good understanding of the GPR basics.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2019": [
                {
                    title: "Orientation-and scale-invariant multi-vehicle detection and tracking from unmanned aerial videos",
                    journal: 'Remote Sensing',
                    volume: '11',
                    issue: '18',
                    page: '2155',
                    authors: [
                        { name: 'Jay Wang', link: '/' },
                        { name: "Sandra Simeonova" },
                        { name: "Mozhdeh Shahbazi" }
                    ],
                    minRead: "",
                    profiles: ["Jay"],
                    links: [
                        { type: "PDF", url: j_2019_1 },
                        { type: "Cite", url: '/' },
                        { type: "DOI", url: "https://www.mdpi.com/2072-4292/11/18/2155" },
                        { type: "Data", url: "https://github.com/jwangjie/UAV-vehicle-tracking" }
                    ],
                    keywords: [
                        "Traffic monitoring",
                        "Vehicle detection",
                        "Multi-vehicle tracking",
                        "Vehicle Re-identification",
                        "Unmanned ariel vehicles",
                        "Deep convolutional neural network"
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "Along with the advancement of light-weight sensing and processing technologies,
unmanned aerial vehicles (UAVs) have recently become popular platforms for intelligent traffic
monitoring and control. UAV-mounted cameras can capture traffic-flow videos from various perspectives providing a comprehensive insight into road conditions. To analyze the traffic flow from remotely captured videos, a reliable and accurate vehicle detection-and-tracking approach is required. In this paper, we propose a deep-learning framework for vehicle detection and tracking from UAV videos for monitoring traffic flow in complex road structures. This approach is designed to be invariant to significant orientation and scale variations in the videos. The detection procedure is performed by fine-tuning a state-of-the-art object detector, You Only Look Once (YOLOv3), using several custom-labeled traffic datasets. Vehicle tracking is conducted following a tracking-by-detection paradigm, where deep appearance features are used for vehicle re-identification, and Kalman filtering is used for motion estimation. The proposed methodology is tested on a variety of real videos collected by UAVs under various conditions, e.g., in late afternoons with long vehicle shadows, in dawn with vehicles lights being on, over roundabouts and interchange roads where vehicle directions change considerably, and from various viewpoints where vehicles’ appearance undergo substantial perspective distortions. The proposed tracking-by-detection approach performs efficiently at 11 frames per second on color videos of 2720p resolution. Experiments demonstrated that high detection accuracy could be achieved with an average F1-score of 92.1%. Besides, the tracking technique performs accurately, with an average multiple-object tracking accuracy (MOTA) of 81.3%. The proposed approach also addressed the shortcomings of the state-of-the-art in multi-object tracking regarding frequent identity switching, resulting in a total of only one identity switch over every 305 tracked vehicles.",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
        },

        "Conferences": {
            "2020": [
                {
                    title: "",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: '', link: '' },
                    ],
                    minRead: "",
                    profiles: ["", ""],
                    links: [
                        { type: "", url: "" },
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2019": [
                {
                    title: "",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: '', link: '' },
                    ],
                    minRead: "",
                    profiles: ["", ""],
                    links: [
                        { type: "", url: "" },
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2017": [
                {
                    title: "",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: '', link: '' },
                    ],
                    minRead: "",
                    profiles: ["", ""],
                    links: [
                        { type: "", url: "" },
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
            "2016": [
                {
                    title: "",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: '', link: '' },
                    ],
                    minRead: "",
                    profiles: ["", ""],
                    links: [
                        { type: "", url: "" },
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
        },

        "Theses": {
            "2022": [
                {
                    title: "",
                    journal: '',
                    volume: '',
                    issue: '',
                    page: '',
                    authors: [
                        { name: '', link: '' },
                    ],
                    minRead: "",
                    profiles: ["", ""],
                    links: [
                        { type: "", url: "" },
                    ],
                    keywords: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    highlights: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    abstract: "",
                    displayImage: "",
                    citationLink: "",
                    citation: ``
                },
            ],
        },

        "Patents": {

        },
    }
]

// // Function to generate ID from the title
// const generateIdFromTitle = (title) => {
//     // Take the first two words from the title
//     const firstTwoWords = title.split(" ").slice(0, 3).join("_").toLowerCase();
//     return firstTwoWords;
// };

// ConferenceData.forEach((yearData) => {
//     yearData.publications.forEach((publication) => {
//         publication.id = generateIdFromTitle(publication.title);
//         publication.individual_paper_link = "/publication/" + generateIdFromTitle(publication.title);
//     });
// });

// const getWordsPerMinute = (title, keyword, abstract) => {
//     let title_word_count = title.split(' ').length;
//     let keyword_word_count = keyword.length;
//     let abstract_word_count = abstract.split(' ').length;

//     const wordCount = title_word_count + keyword_word_count + abstract_word_count;
//     const wordsPerMinute = 200;
//     const readingTime = Math.ceil(wordCount / wordsPerMinute);

//     return readingTime;
// }

// ConferenceData.forEach((yearData) => {
//     yearData.publications.forEach((publication) => {
//         let readingTime = getWordsPerMinute(publication.title, publication.keywords, publication.abstract);
//         publication.minRead = `${readingTime}-minute read`
//     });
// });

export default publications_data;