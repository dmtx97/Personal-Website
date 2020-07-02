import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
// import "../../style/layout/_layout.scss";


export default function Layout(props){

    return(
        <div>
            <Head>
                <title>Daniel Mendez</title>
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
            </Head>
            <Navbar/>
            {props.children}
            <hr width="40%"/>
            <Footer/>
            <style jsx global>{`

                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
                body{
                    clear: both;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    outline: 0;
                    background: #F6F9FC;
                    -webkit-font-smoothing: antialiased;
                    font-family: 'Roboto', sans-serif ;
                }
            `}</style>
        </div>
    );
}


