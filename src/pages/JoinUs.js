import React from 'react'
import './JoinUs.scss'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function JoinUs() {
    return (
        <div className='JoinUsPage'>
            <NavBar />
            <div className="JoinUs container">
                <div className="JoinUs section">
                    <h1>Join Us</h1>
                    <p>The <Link to='/'>Robot Autonomy Lab</Link> is seeking passionate students, researchers, and engineers to join our mission of advancing mobile-robot autonomy. Opportunities include graduate and undergraduate research positions, internships, and collaborative projects. Check out our other pages or contact us to explore how you can contribute to cutting-edge robotics innovation!</p>
                </div>

                <div className="JoinUs section">
                    <div className="each-join-section">
                        <h3>Current Opportunities</h3>
                        <div>
                            {/* <p>The <a href="/">Robot Autonomy Lab</a> invites applications for <b>one fully funded PhD position</b> and <b>one fully funded MSc position</b>. We are looking for passionate and driven individuals with a keen interest in robotics, machine learning, and autonomous systems. To apply, please follow the application instructions outlined in the relevant sections above. For more details or to discuss these opportunities, feel free to visit Professor Wang in person at <b>E1-406</b>.</p> */}
                            {/* <p>At this time, there are <b>no open positions</b> available. Please check back later! If you have any questions or are interested please email <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"RAL - [Your Surname]"</b>.</p> */}
                            <p>The <Link to="/">Robot Autonomy Lab</Link> is recruiting motivated graduate students: <b>1 MSc</b> and <b>1 PhD</b> positions for <b>Winter 2026</b> with full scholarships. The application deadlined for international and local students are <b>July 1st, 2025</b> and <b>October 1st, 2025</b>, respectively. Please make sure to follow the procedure by submitting the following documents to <a href="mailto:j.wang@umanitoba.ca">j.wang@umanitoba.ca</a> with the subject line <b>"RAL2025 - [Your Name]"</b>:</p>
                            <ul>
                                <p>CV <b>(max 2 pages)</b></p>
                                <p>Statement of Research Interest</p>
                                <p>Academic Transcripts</p>
                                <p>Relevant <b>Project</b> or <b>Research Experience</b></p>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="each-join-section">
                        <h3>Postdoctoral Scholars</h3>
                        <div >
                            <p>The <Link to='/'>Robot Autonomy Lab</Link>, led by <Link to='/team'>Professor Jay Wang</Link>, invites applications for a postdoctoral researcher position focused on advancing mobile-robot autonomy. We seek highly motivated candidates who have recently completed or are nearing completion of their doctoral studies in robotics, autonomous systems, machine learning, or related fields. Ideal candidates should have a strong research portfolio with expertise in areas such as mobile robotics, machine learning for robotic systems, multi-physics based modeling, human-robot interaction, or multi-robot coordination and experience in simulation tools.</p>
                            <p>As a postdoctoral researcher, you will be expected to work independently, explore innovative research directions, contribute to grant proposals, and mentor graduate and undergraduate students. The lab fosters a collaborative, hands-on environment with an emphasis on real-world applications of robotic autonomy. Candidates with experience listed above are particularly encouraged to apply.</p>
                            <p>The position is initially for one year, with the possibility of renewal based on performance and funding availability. Candidates with external funding or an interest in co-developing funding proposals are welcome. To apply, please send an email to <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"Postdoctoral Researcher Application - [Your Surname]"</b> with your <b>CV/Resume</b> accompanied by any <b>supporting documents</b> (e.g., link to your GitHub repository), and a <b>cover letter</b> outlining your research interests and fit for the lab.</p>
                        </div>
                    </div>
                    <div className="each-join-section">
                        <h3>PhD Applicants</h3>
                        <div>
                            <p>Prospective PhD students should apply to the <a href="https://umanitoba.ca/explore/programs-of-study/mechanical-engineering-phd" target='_blank' rel='noreferrer'>Mechanical Engineering PhD program</a> at the <a href="https://umanitoba.ca/" target='_blank' rel='noreferrer'>University of Manitoba</a>. In your application, please mention <Link to='/team'>Professor Jay Wang</Link> as your preferred advisor in your statement of purpose to ensure your application is routed for review. Candidates with interests in mobile robotics, machine learning for robotic systems, physics-based modeling, human-robot interaction, or multi-robot coordination are particularly encouraged to apply.</p>
                            <p>To express interest, email <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"Prospective PhD Student - [Your Surname]"</b>. Please include a detailed <b>CV/Resume</b> highlighting your research experience and interests and a <b>statement</b> explaining how your background aligns with the lab's research themes.</p>
                            <p><b>Generic emails that do not demonstrate a clear fit with the lab's focus will not receive a response.</b></p>
                        </div>
                    </div>
                    <div className="each-join-section">
                        <h3>Graduate Applicants</h3>
                        <div>
                            <p>Graduate students interested in joining the lab should apply to the <a href="https://catalog.umanitoba.ca/graduate-studies/engineering/mechanical-engineering-msc/" target='_blank' rel='noreferrer'>Mechanical Engineering MSc program</a> at the <a href="https://umanitoba.ca/" target='_blank' rel='noreferrer'>University of Manitoba</a>. Please indicate your interest in working with <Link to='/team'>Professor Jay Wang</Link> in your application. We encourage students to take one of Professor Wang's courses, such as <Link to='/teaching'>MECG 7740 - Mobile Robotics</Link> or <Link to='teaching'>xxx xxxx - xxxxxx</Link>, to become familiar with our research and approach. If you are from other disciplines, such as Computer Science, Electrical Engineering, or Applied Mathematics and demonstrate a strong interest in mobile-robot autonomy, you will also be considered.</p>
                            <p>To inquire about research opportunities, email <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"Prospective MSc Student - [Your Surname]"</b>. Please include your <b>CV/Resume</b> detailing relevant coursework and research experiences, and a <b>brief summary</b> on how your interests aligns with the lab's work.</p>
                            <p><b>Generic emails that do not demonstrate a clear fit with the lab's focus will not receive a response.</b></p>
                        </div>
                    </div>
                    <div className="each-join-section">
                        <h3>Undergraduate Students</h3>
                        <div>
                            <p>Undergraduate students from all engineering and science disciplines interested in exploring research opportunities in mobile-robot autonomy are encouraged to join the lab. We welcome students from robotics, Mechanical Engineering, Electrical Engineering, Computer Science, or related fields who are eager to contribute to cutting-edge projects in areas such as autonomous navigation, machine learning for robotics, and human-robot interaction.</p>
                            <p>To inquire about research opportunities, please email <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"Undergraduate Research Opportunity - [Your Surname]"</b>. Please include a <b>brief description</b> of your academic background, relevant coursework, and research interests and a <b>CV/Resume</b> highlighting any prior projects, technical skills, or experiences that align with the lab’s focus.</p>
                            <p>Opportunities may include research for academic credit, paid positions, or project-based roles, depending on availability and funding. We foster a collaborative, hands-on environment and particularly encourage applications from diverse and underrepresented backgrounds. Join us to gain valuable research experience and contribute to the future of robotic autonomy!</p>
                        </div>
                    </div>
                    <div className="each-join-section">
                        <h3>Visiting Graduate Students</h3>
                        <div>
                            <p>The lab welcomes visiting PhD and MSc students from other institutions with established visiting scholar programs. If interested, email <a href='mailto:J.Wang@umanitoba.ca'>J.Wang@umanitoba.ca</a> with the subject line <b>"Prospective Visiting Graduate Student - [Your Surname]"</b>. Please include A <b>CV/Resume</b> outlining your research background, a <b>short proposal (1-2 pages)</b> describing the research you plan to conduct in the lab, and a brief explanation of how your work aligns with our research themes.</p>
                        </div>
                    </div> */}

                    {/* <div className="each-join-section">
                        <h3>Industrial Collaborations</h3>
                        <div>
                            <p>Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section Some text here for this section </p>
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default JoinUs
