import "../style/components/_description.scss";
import Projects from "../components/Projects";

export default function Description(){

    return(

        <div className="container">

            {/* <div className="about">
                <h3>About</h3>
                <p> I am a recent Computer Science Graduate from Dallas, Texas. I have extensive experience working with Software Development and Information Technology.
                </p>
            </div> */}


            <div className="resume">
                <div>
                    <h2 className="section">Summary</h2>
                    <p style={{lineHeight:"2"}}>
                    Dedicated, passionate, and knowledgable Computer Science graduate with over three years of proven experience in Networks/Systems administration. Highly skilled in critikal thinking and problem solving with demonstrated knowledge related to software development. Seeking positions related to Software Development to challenge myself in a field that is rapidly changing.                    </p>

                    <h2 className="section">Education</h2>
                    {/* Education */}
                    <div>
                        <h4 className="school">Dallas Baptist University</h4> 
                        <h4 className="fl">GPA: 3.625</h4>
                    </div>

                    <div>
                        <h4 className="school">B.S. Computer Science</h4> 
                        <h4 className="fl">Dean's List</h4>
                    </div>                    

                    <hr/>

                    {/* Work Experience */}
                    <h2 className="section">Work Experience</h2>
                    <h4 className="title">DBU Information Technology</h4> 
                    <h4 className="subsubsection">Networks/Systems Administrator</h4> 
                    <h4 className="date">March 2017 - Present</h4>
                    <ul className="listdesc">
                        <li><span>Maintain Zabbix infrastructure to monitor devices, generate email alerts and daily reports to locate and resolve issues rapidly.</span></li>
                        <li><span>Significantly improved web security by ensuring password-less Visual Basic Web App migration to Azure using key vaults.</span></li>
                        <li><span>Manage network infrastructure establishing fast, stable and secure networks for over 4,000 clients across three campuses.</span></li>
                        <li><span>Migrated Palo Alto Virtual IP policies for thousands of clients significantly improving network security and performance.</span></li>
                        <li><span>Develop Workflows using Power Automate to provide advanced automated tasks for staff across multiple departments.</span></li>
                    </ul>
                    <br/>
                    <h4 className="title">Four Story Creative</h4>
                    <h4 className="subsubsection">Development Intern</h4> 
                    <h4 className="date">January 2020 - March 2020</h4>
                    <ul className="listdesc">
                        <li><span>Improved user experience to virtual reality demo by refining swift locomotion and hand interaction.</span></li>
                        <li><span>Expanded software accessibility by porting virtual reality simulation to PC.</span></li>
                    </ul>

                    <hr/>

                    <h2 className="section">Technical Skills</h2>
                    <div className="row">
                    <div className="techcolumn" id="languages">
                    <h4 className="subsubsection" >Languages</h4>
                    <p>C#, Java, JavaScript, Python, PowerShell, SQL, HTML+CSS, Sass, LaTeX</p>
                    </div>
                    <div className="techcolumn" id="frameworks">
                        <h4 className="subsubsection" >Libraries/Frameworks</h4>
                        <p>.NET Core, ASP.NET MVC, Flask, React.js w/ Next.js, Node.js w/ Express.js, Unity</p>
                    </div>
                    </div>

                    <h4 className="subsubsection">Tools</h4>
                    <p>Microsoft Azure, Microsoft SharePoint, Runbook Designer, Power Automate, Aruba Airwave, Junos Space, Palo Alto Firewall
                    Solutions, Zabbix, PostgreSQL, MySQL w/ Workbench, Docker, Docker-Compose, git</p>
                
                    <hr/>
                    <div>
                    <h2 className="section">Projects</h2>
                    <Projects/>
                    </div>
                </div>
            </div>
        </div>
    );
}

