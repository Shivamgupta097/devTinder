const Connections = () => {

  const [connections , setConnection] = useState([])

 async function getUserConnection(){
  const data = await axios.get()
  }

  useEffect(() =>{
    getUserConnection()
  },[])
  return (
    <div>Connections</div>
  )
}

export default Connections