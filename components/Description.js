import "../style/components/_description.scss";
import Projects from "../components/Projects";
import Link from 'next/link';

export default function Description(){

    return(

        <div className="container">
            <div className="resume">
                <div>
                    <h2 className="section">About</h2>
                    <p style={{lineHeight:"2"}}>
                    Dedicated, and knowledgeable Computer Science graduate with over three years of proven experience in network/system administration and network automation. <br/>
                    </p>
                    <p style={{lineHeight:"2"}}>
                    Highly skilled in critical thinking and problem solving with demonstrated knowledge related to software development using high level frameworks such as .NET core and Node.js/Express. Proficient in front end design using React.js/Next.js, HTML+CSS, and Sass.
                    </p>

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

                    <hr/>

                    {/* Work Experience */}
                    <h2 className="section">Work Experience</h2>
                    <h4 className="title">DBU Information Technology</h4> 
                    <h4 className="subsubsection">Networks/Systems Administrator</h4> 
                    <h4 className="date">March 2017 - Present</h4>
                    <ul className="listdesc">
                        <li><span> Increased web security by ensuring password-less Web App migration to Azure using Managed Service Identity and Key Vault.</span></li>
                        <li><span> Maintained Zabbix monitoring to monitor devices, generate email alerts and daily reports to locate and resolve issues promptly.</span></li>
                        <li><span> Developed Sharepoint Workflows in Power Automate to provide robust automated tasks for faculty across multiple departments.</span></li>
                        <li><span> Troubleshot network infrastructure to establish fast, stable and secure networks for 4,000+ clients across three campuses.</span></li>
                        <li><span> Migrated Palo Alto Virtual IP policies for thousands of clients significantly improving network security and performance.</span></li>
                        <li><span> Developed network automation tools using Python, and Azure Function for port security audits, reports, and configuration changes.</span></li>
                    </ul>
                    <br/>
                    <h4 className="title">Four Story Creative</h4>
                    <h4 className="subsubsection">Development Intern</h4> 
                    <h4 className="date">January 2020 - March 2020</h4>
                    <ul className="listdesc">
                        <li><span>Improved user experience to virtual reality simulations by refining swift locomotion and hand interaction.</span></li>
                        <li><span>Expanded software accessibility by porting virtual reality simulation to PC.</span></li>
                    </ul>

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

