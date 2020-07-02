import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Blog(){
    
    return(
        <Layout>
            <div>
                {/* <Hero/> */}
                    <div className="content">

                    </div>
                    <style jsx>{`

                        h1{
                            margin: 0;
                        }
                    
                        .content{
                            padding-top: 0;
                            pading-bottom: 0;
                            margin: 0 auto;
                            margin-top: 60px;
                            // width: 1024px;

                            padding: 20px;
                            // position: absolute;
                            height: 90vh;
                        }
                        
                        //Tablet
                        @media screen and (max-width: 1024px){
                            .content{
                                padding-left: 50px;
                                padding-right: 50px;
                            }
                        }

                        //mobile
                        @media screen and (max-width: 400px){
                            .content{
                                padding-left: 25px;
                                padding-right: 25px;
                            }

                        }

                    `}</style>
            </div>
        </Layout>
    );
}
