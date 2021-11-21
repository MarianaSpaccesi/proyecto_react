
import { ItemList } from "../itemList/itemList"

export const ItemListContainer = ({greeting}) =>{
    const [loading,setLoading] = useState(false)
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        setLoading(true)
        pedirDatos()
            .then( (resp) =>{
                setProductos(resp)
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    })


    return (

        <>
            {
                loading
                    ?<h2>Cargando...</h2>
                    :<ItemList productos={productos}/>
            }
            
        </>
        
    )
}