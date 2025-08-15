import one from './1.png'
import two from './2.png'
import three from './3.jpg'

const news_data = [
    // {
    //     newsTitle: 'RAL Wins Research Manitoba',
    //     newsDate: '',
    //     newsPic: three,
    //     newsData: ''
    // },
    {
        newsTitle: 'The First Robot Has Arrived at RAL',
        newsDate: 'April 4, 2025',
        newsPic: three,
        newsData: 'Meet Mini Niu, our first lab robot at the Robot Autonomy Lab! This AgileX Scout Mini wheeled robot features a 32-beam RS-Helios LiDAR, ZED2i stereo camera, and Fixposition V-RTK2 for precise localization. Powered by an NVIDIA Orin and ROS2, Mini Niu will drive our research in autonomous navigation, control, and perception. Stay tuned for updates!'
    },
    {
        newsTitle: 'RAL Awarded NSERC Discovery Grant',
        newsDate: 'April 9, 2025',
        newsPic: two,
        newsData: 'Dr. Jay Wang secured an NSERC Discovery Grant and Launch Supplement for his 5-year program, “Advancing Safe Control of Autonomous Mobile Robots in Uncertain Environments Using Machine Learning.” The research will develop AI-enhanced, physics-informed control strategies with safety guarantees for robots in smart agriculture, Arctic exploration, and mining, supporting graduate training and field experiments.'
    },
    {
        newsTitle: 'RAL Awarded URGP Grant',
        newsDate: 'Feb. 18, 2025',
        newsPic: one,
        newsData: 'Dr. Jay Wang received a University of Manitoba URGP grant for his project, “AI-Enhanced Mobile Robotic Arms for Precision and Efficiency in Greenhouse Harvesting.” The project develops AI-based control systems for mobile robotic arms to enhance precision and efficiency in harvesting delicate crops like tomatoes, advancing smart agriculture.'
    },
]

export default news_data;