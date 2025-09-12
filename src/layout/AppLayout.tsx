import Home from "../parts/home"
import About from "../parts/about"
import Connect from "../parts/connect"
import Projects from "../parts/projects"
import Stack from "../parts/stacks"

import NavBar from "./navbar"


const AppLayout = () => {
    return(
        <>
        <h1>This is AppLayout</h1>
        <NavBar/>
        <Home/>
        <About/>
        <Stack/>
        <Projects/>
        <Connect/>

        
        </>
    )
}
export default AppLayout
