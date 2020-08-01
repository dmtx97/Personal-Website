import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import "../../style/layout/_layout.scss";
import bg from "../../public/main_bg.png";
import favicon from "../../public/favicon.ico";

export default function Layout(props){

    return(
        <div>
            <Head>
                <title>Daniel Mendez</title>
                <link rel='shortcut icon' type='image/x-icon' href={favicon} />
                <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
            </Head>
            <Navbar/>
            {props.children}
            {/* <hr/> */}
            <Footer/>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
                body{
                    clear: both;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    outline: 0;
                    background: #F5F5F5;
                    background-image: url(${bg});
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    -webkit-font-smoothing: antialiased;
                    font-family: 'Roboto', sans-serif ;
                    // min-height: 100vh;
                    // position:relative;
                }
            `}</style>
        </div>
    );
}


