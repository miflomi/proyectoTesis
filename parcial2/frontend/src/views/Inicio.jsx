import CardCursos from "../components/CardCursos";
import miFondo1 from '../assets/img/fondo1.jfif'

const Inicio = () => {

    const miFondo = {
        backgroundImage: `url(${miFondo1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgrounsRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    };

    return(
        <>
        <div style={miFondo} >
        <h1>HOME del CLUB</h1>
        </div>
        

        <div>
            {/* <img src={imgUrl} alt="fondo" /> */}
        </div>

        <CardCursos/>



        </>
    )
}

export default Inicio