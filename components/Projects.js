import '../style/components/_projects.scss';
import Link from 'next/link';

export default function Projects(){

    return(
        <div className="grid-container">

            <div className="item" id="jester">
                    <h4 className="projectTitle">Jester</h4>
                    <h4 className="status">WIP</h4>
                    <h4 className="project-date">June 2020-Present</h4>
                    <p className="summary">Discord bot that displays popular jokes from <a href="https://reddit.com/r/jokes">r/jokes</a>.</p>
                    <h5 className="githublink">
                        <a href="https://github.com/dmtx97/Jester" target="_blank">View on GitHub</a>    
                    </h5>
            </div>

            <div id="d2b">
                <h4 className="projectTitle">Dough To Bread</h4>
                <h4 className="status">PRIVATE REPO</h4>
                <h4 className="project-date">January 2020-Present</h4>
                <p className="summary">Tracks manual/bank transactions, lists connected accounts, displays account balance. Adopts a Microservices model in Spring Boot,
                Docker Compose to deploy each microservice and MySQL image, and a React.js-based UI which makes API calls to endpoints created in the backend.</p>
            </div>

           <div className="item" id="advising-scheduler">
                    <h4 className="projectTitle">Advising Scheduler</h4>
                    <h4 className="project-date">September 2019 - December 2019</h4>                     
                    <p className="summary">Adds student degree plans, documents completed courses, and creates recurring calendar schedules with reminders based on class
                    selections. Developed in C# using ASP.NET MVC 5 and Entity Framework.</p>

                    <h5 className="githublink">
                        <a href="https://github.com/javiSauce/DBU-Advising-Scheduler" target="_blank">View on GitHub</a>    
                    </h5>
            </div>
        </div>
    );
}