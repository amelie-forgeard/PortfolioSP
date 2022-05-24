import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            strings: ['Développeuse Web Front End'],
            showCursor: true,
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/af.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Bienvenue ! Je m'appelle</h2>
                    <h1>Amélie FORGEARD</h1>
                    <h3>Je suis <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

