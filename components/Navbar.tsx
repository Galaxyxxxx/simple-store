import Navbarbtn from "./Navbarbtn"

interface Navbardivrodivs {
    
}


export default function Navbar({}: Navbardivrodivs) {
    return <div className="flex-row justify-evenly flex-wrap">
        <div className="content-start"> <Navbarbtn isImage={true} text="/logo.jpg" link="#" /> </div>
        <div className="self-auto">  <Navbarbtn isImage={false} text="Nic" link="#" /> </div>
        <div className="self-auto">  <Navbarbtn isImage={false} text="Nic" link="#" /> </div>
    </div>
}