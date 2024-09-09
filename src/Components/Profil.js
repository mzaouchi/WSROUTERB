import { Link, useNavigate, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} = useParams()
    const found =  users.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()
    // console.log(found)
    return(
        <div>
            <h1>Profil</h1>
            <h2>{found.name}</h2>
            <h3>{found.age}</h3>
            {/* <Link to='/'><button>Home</button></Link> */}
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default Profil