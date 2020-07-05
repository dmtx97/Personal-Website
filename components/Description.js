import "../style/components/_description.scss";
// import Projects from "../components/Projects";

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
                    <h2 className="section">Education</h2>
                    {/* Education */}
                    <h4 className="school">Dallas Baptist University</h4> 
                    <h4 className="fl">GPA: 3.63</h4>

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
                    <ul>
                        <li><span>Manage network infrastructure establishing fast, stable and secure networks for over 4,000 clients across three campuses.</span></li>
                        <li><span>Significantly improved website security by ensuring password-less WebApp migration to Microsoft Azure using key vaults.</span></li>
                        <li><span>Maintain Zabbix infrastructure utilizing its API to monitor servers, create email alerts, and generate daily reports.</span></li>
                        <li><span>Reduce manual labor by automating Sharepoint Workflows for travel approval requests.</span></li>
                        <li><span>Responsible for Palo Alto firewall virtual IP auditing and configuration.</span></li>
                    </ul>
                    <br/>
                    <h4 className="title">Four Story Creative</h4>
                    <h4 className="subsubsection">Development Intern</h4> 
                    <h4 className="date">January 2020 - March 2020</h4>
                    <ul>
                        <li><span>Improved user experience to virtual reality demo by refining swift locomotion and hand interaction.</span></li>
                        <li><span>Expanded software accessibility by porting virtual reality simulation to PC.</span></li>
                    </ul>

                    <hr/>

                    <h2 className="section">Technical Skills</h2>
                    <div className="row">
                    <div className="column" id="languages">
                    <h4 className="subsubsection" >Languages</h4>
                    <p>C#, Java, Python, R, JavaScript, PowerShell, bash, HTML+CSS, Sass, LaTeX</p>
                    </div>
                    <div className="column" id="frameworks">
                        <h4 className="subsubsection" >Frameworks</h4>
                        <p>ASP.NET MVC 5, ASP.NET Core, Flask, Node.js, Express.js, React.js, Unity</p>
                    </div>
                    </div>

                    <h4 className="subsubsection">Tools</h4>
                    <p>Microsoft Azure, Microsoft SharePoint, Runbook Designer, Power Automate, Aruba Airwave, JunosSpace, Palo Alto
                    Firewall Solutions, Zabbix, MySQL w/ Workbench, git</p>
                
                    <hr/>
                    <div>

                    <h2 className="section">Projects</h2>
                    {/* <Projects/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

