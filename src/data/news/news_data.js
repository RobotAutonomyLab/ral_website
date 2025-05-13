import one from './1.png'
import two from './2.png'
import three from './3.jpg'

const news_data = [
    {
        newsTitle: 'The First Robot Has Arrived at RAL',
        newsDate: 'April 4, 2025',
        newsPic: three,
        // newsData: 'Meet Mini Niu, our very first lab robot at the Robot Autonomy Lab! Mini Niu is a AgileX Scout Mini wheeled robot equipped with a state-of-the-art sensor suite, including a 32-beam RS-Helios LiDAR, ZED2i stereo camera, and Fixposition V-RTK2 module for high-precision localization. Powered by an NVIDIA Orin computer and integrated with ROS2, Mini Niu will be central to our work on autonomous navigation, control, and perception. Stay tuned for updates and exciting progress!'
        newsData: 'Meet Mini Niu, our first lab robot at the Robot Autonomy Lab! This AgileX Scout Mini wheeled robot features a 32-beam RS-Helios LiDAR, ZED2i stereo camera, and Fixposition V-RTK2 for precise localization. Powered by an NVIDIA Orin and ROS2, Mini Niu will drive our research in autonomous navigation, control, and perception. Stay tuned for updates!'
    },
    {
        newsTitle: 'Dr. Jay Wang Awarded NSERC Discovery Grant',
        newsDate: 'April 9, 2025',
        newsPic: two,
        // newsData: 'Dr. Jay Wang has received an NSERC Discovery Grant for his program titled “Advancing Safe Control of Autonomous Mobile Robots in Uncertain Environments Using Machine Learning.” As an Early Career Researcher, he has also been awarded the NSERC Discovery Launch Supplement to support the establishment of his research program. This 5-year initiative will develop AI-enhanced control strategies and physics-informed modeling techniques with formal safety guarantees, enabling mobile robots to operate reliably in complex, uncertain, real-world environments. Target applications include smart agriculture, Arctic exploration, and mining robotics. The funding will support graduate student training, field experimentation, and foundational research in safety-critical autonomous systems.'
        newsData: 'Dr. Jay Wang secured an NSERC Discovery Grant and Launch Supplement for his 5-year program, “Advancing Safe Control of Autonomous Mobile Robots in Uncertain Environments Using Machine Learning.” The research will develop AI-enhanced, physics-informed control strategies with safety guarantees for robots in smart agriculture, Arctic exploration, and mining, supporting graduate training and field experiments.'
    },
    {
        newsTitle: 'RAL Wins URGP Grant for Greenhouse Robotics',
        newsDate: 'Feb. 18, 2025',
        newsPic: one,
        // newsData: 'Dr. Jay Wang has been awarded a University Research Grants Program (URGP) grant from the University of Manitoba for his project, “AI-Enhanced Mobile Robotic Arms for Precision and Efficiency in Greenhouse Harvesting.” The project will develop hybrid AI-based control systems for mobile robotic arms to improve the precision and efficiency of harvesting delicate crops, such as tomatoes, while minimizing damage. This work will explore to advancing smart agriculture technologies in Manitoba and beyond.'
        newsData: 'Dr. Jay Wang received a University of Manitoba URGP grant for his project, “AI-Enhanced Mobile Robotic Arms for Precision and Efficiency in Greenhouse Harvesting.” The project develops AI-based control systems for mobile robotic arms to enhance precision and efficiency in harvesting delicate crops like tomatoes, advancing smart agriculture.'
    },
]

export default news_data;