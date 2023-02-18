import MainHome from "../../common/mainHome/MainHome";
import Navbar from "../../common/navbar/Navbar";

export const Home = () =>{

    let nombre = "pepito";
    let apellido = "perez";

    return {
        <>
            <Navbar />
            <MainHome nombre={nombre} apellido= {apellido}/>
        </>
    };
};