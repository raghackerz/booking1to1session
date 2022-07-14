import ppLogo from "../../assets/Signup/Group 4.png"
import ppTitle from "../../assets/Signup/Programming Pathshala.png"

const Navbar = () =>{
    return(
        <div className="flex flex-row justify-center align-middle bg-white h-20 p-4 border-b">
            <img className="h-12 w-10 mx-2" src={ppLogo}/>
            <img className="h-9 w-100 my-2" alt="Programming Pathshala" src={ppTitle}/>
    </div>
   
    );
}

export default Navbar;

