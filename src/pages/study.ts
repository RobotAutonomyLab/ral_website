import { watch } from "fs"

// create new typescript project
npx create-react-app taiv-interview --template typescript

// System Design Architecture
// Question: Design Youtube
Functional Requirements:
    1. Users can upload videos
    2. Users can watch videos

Non Functional Requirements:
    1. Reliability: when user upload video, we don't want it corrupted or disappeared
    2. Scalability: system should be able to handle millions of users uploading and watching videos simultaneously
    3. Availability > Consistency: If user upload a video one second ago, its ok if it takes a few seconds for the video to be available for watching. We want the system to be available for watching videos even if there are some issues with uploading videos.
    4. Low latency: video should start immediately

1 billion daily active users
watching -> 5 videos per day
Ratio of upload to watching -> 1:1000

High level design (Uploading):
    - Load balancer --> App server x 10 (or whatever): since we are dealing with 50 mil vids per day, its a massive scale so we need a load balancer that connects to a bunch of app servers
        - App server --> Object Store (raw): We are using object store because its better for media and large files like videos (e.g., AWS S3 - handles replication of data and dont have worry about being deleted)
            - Queue: It takes time to encode a video (up to minutes) so we need the videos uploaded to go to messageQueue
                - Encoding: we will have a ton of servers to encode the video since there are a lot of videos being uploaded and you dont want one at a time (if you have billions)
                    - Object Store (Encoded): still an object store since its still a video
        - App server --> NoSQL database (you can use whatever database you want too): also store metadata such as title, description, video, and user id and much more. Also store reference file to object store too so if a video is being watched, the meta data is referenced toolbar
        - App server --> Cache: So that data can be loaded immediately
    - CDN based on geographcial location so that its stored as close to user as possible

// Some code stuff
interface NewsItem {
  newsTitle: string;
  newsDate: string;
  newsPic: string;
  newsData: string;
}

// 2. Define the Main Data structure
interface NewsPageData {
  newsPageTitle: string;
  newsPageSubtitle: string;
  news: NewsItem[]; // Array of NewsItems
}

const news_data: NewsPageData = {
    "newsPageTitle": "News",
    "newsPageSubtitle": "Stay updated with the latest from the [Robot Autonomy Lab](/)! From groundbreaking research breakthroughs to exciting collaborations and events, explore our recent highlights!",
    "news": [
        {
            "newsTitle": "RAL Welcomes First MSc Student",
            "newsDate": "January 1, 2025",
            "newsPic": "/public/news_images/1.jpg",
            "newsData": "We’re excited to welcome [Ilyas Dawoodjee](#/team/ilyas) as the first MSc student in the Robot Autonomy Lab. Ilyas will focus on learning-based control and field-robotics autonomy with applications in agricultural robotics. He holds a B.Eng. in Mechatronics (First Class Honours with Distinction, APU, 2022) and brings prior research experience from the [Building Robotics Laboratory](https://building-robotics-lab.github.io/brlab/) at the [National University of Singapore](https://www.nus.edu.sg/). Supported by the [University of Manitoba Graduate Fellowship (UMGF)](https://umanitoba.ca/graduate-studies/funding-awards/university-manitoba-graduate-fellowship-umgf) and International Graduate Student Entrance Scholarship (IGSES) awards, Ilyas is a fantastic addition to the team!"
        },
        {
            "newsTitle": "RAL Awarded URGP Grant",
            "newsDate": "February 18, 2025",
            "newsPic": "/public/news_images/2.png",
            "newsData": "Dr. Jay Wang received a University of Manitoba URGP grant for his project, “AI-Enhanced Mobile Robotic Arms for Precision and Efficiency in Greenhouse Harvesting.” The project develops AI-based control systems for mobile robotic arms to enhance precision and efficiency in harvesting delicate crops like tomatoes, advancing smart agriculture."
        },
        {
            "newsTitle": "RAL Awarded NSERC Discovery Grant",
            "newsDate": "April 9, 2025",
            "newsPic": "/public/news_images/3.png",
            "newsData": "Dr. Jay Wang secured an NSERC Discovery Grant and Launch Supplement for his 5-year program, “Advancing Safe Control of Autonomous Mobile Robots in Uncertain Environments Using Machine Learning.” The research will develop AI-enhanced, physics-informed control strategies with safety guarantees for robots in smart agriculture, Arctic exploration, and mining, supporting graduate training and field experiments."
        }
    ]
}

// sort by date descending
news_data.news.sort((a, b) => Date.parse(b.newsDate) - Date.parse(a.newsDate));  // to sort by ascending date, use: new Date(a.newsDate) - new Date(b.newsDate)

// if i want to slice
news_data.news.slice(0, 2)  // to get the top 2 news items

// if i want to map through each of the news to use the stuff
news_data.news.map((each_news, index) => {
    console.log(each_news.newsTitle);
})

// writing an arrow function (the id is the inputs to the function)
const findProfileById = (id: string) => {
    if (!id) return null;

    for (const section of profile_data.ourTeam) {
        const members = section.teamMembers;
        if (!Array.isArray(members)) continue;  // if teamMembers is not an array, skip to the next section

        const profile = members.find(
            (p) => p?.ProfileName && p.ProfileName.toLowerCase() === id.toLowerCase()
        );

        if (profile) return profile;
    }

    return null;
};

// classic function
function findProfileById2(id) {
    if (!id) return null;  // !id checks for any falsy values (false, 0, "", null, undefined, NaN)

    // Loop through ourTeam
    for (const section of profile_data.ourTeam) {
        const members = section.teamMembers;

        // Now check if teamMembers exists and is an array. If not continue
        if (!Array.isArray(members)) continue;
        
        // .find() loops through an array and returns the first item that matches your condition.
        // So in my case .find() loops through the members and find the value ProfileName that matches with the id (both in lower case)
        const profile = members.find((p) => {
            return p.ProfileName.toLowerCase() === id.toLowerCase();
        });

        return profile  // return the profile
    }

    return null  // if not return null
}

// function for switch cases
function typeOfLink(type, link) {
    let iconFA;
    let iconLink = link;  // default will be link

    switch (type) {
        case "Email":
            iconFA = icon1;
            break
        case "LinkedIn":
            iconFA = icon2;
            iconLink = rink2
            break
        case "Instagram":
            iconFA = icon3;
            break
    }

    return (
        <a href={iconLink} target='_blank' data-tooltip={type} rel='noreferrer'>
            <FontAwesomeIcon icon={iconFA} /> {type}
        </a>
    )
}

// remove blank spaces
const test = '  Ilyas  ';
test.trim();  // 'Ilyas'

// split by specific character
const test2 = 'Ilyas is a Python programmer'
test2.split('is')  // Output is ['Ilyas ', ' a Python programmer']

// replace
const test3 = '/public/team/ilyas'
test3.replace('/public', '')  // Ouptut is '/team/ilyas'


