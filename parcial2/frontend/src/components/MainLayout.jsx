import Header from "./Header";
import Navig from "./Navig";
import Footer from "./Footer";

import { Outlet } from "react-router-dom"

const MainLayout = () => {
    


    return(
        <>
        <Header>
            <Navig/>
        </Header>
        <Outlet/>

        
      <Footer descripcion="DV - Parcial 2"/>
        
        </>
    )
}

export default MainLayout