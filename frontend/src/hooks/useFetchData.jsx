import {useEffect , useState} from 'react'
import { token } from '../config'
import {toast} from 'react-toastify';

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const FetchData = async ()=> {
        try{
                const res = await fetch(url,{
                    headers:{Authorization:`Bearer ${token}`}
                })

                const result = await res.json()

                if(!res.ok){
                    return toast.error(result.message)
                }
            }
        catch(err){

        }
    }
    },[])

  return (
    <div>useFetchData</div>
  )
}

export default useFetchData