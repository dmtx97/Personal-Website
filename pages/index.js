import Layout from '../components/layout/Layout';
import Hero from '../components/layout/Hero';
import Links from '../components/Links';
import Description from '../components/Description';
import Contact from '../components/Contact';
import "../style/pages/home.scss";
import Fab from "../components/CreateBlog";

export default function Home(){

    return(
        <Layout>
            <Hero/>
            <div className="content">
                <div className="mainparent">
                    <aside className="sidebarright">
                        <div className="column">
                            <div className="links">
                                <Links/>
                            </div>
                                <div className="contact"><Contact/></div>
                            </div>
                    </aside>
                    <section className="main">
                        <Description/>   
                    </section>
                </div>
            </div>
        </Layout>
    );

}