import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hmahawar460').then(response => response.json()).then(data => setData(data))
    // }, [])

  return (
    <div className='max-w-6xl mx-auto'>
        <div className='text-center m-4 text-black p-4 text-3xl font-semibold flex flex-col items-center'>
            <img className="rounded-lg py-2" src={data.avatar_url} alt="Git picture" width={250} />
            <div className='relative'>
                Github Username : <a className='md:hover:bg-transparent md:hover:text-fg-brand' href={`https://github.com/${data.login}`}>{data.login}</a>
            </div>
            Github Repositories : {data.public_repos}
        </div>
    </div>
  )
}

export default Github

export const githubLaoder = async () =>{
    const response = await fetch('https://api.github.com/users/hmahawar460')
    return response.json();
}