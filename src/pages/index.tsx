import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import db from '../../db.json'

export default function Home() {
  return (
  <>
    <div className='container'>
      <div className='h-40 w-96 p-10 ml-60 mt-40'>
        <div>
          <h1 className='text-5xl text-orange-600'>Hello, my name is Symi</h1>
          <button className='bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-md w-40 text-white flex mt-3 shadow-md'>
            <FontAwesomeIcon className='w-7 h-7 ml-3' icon={faGithub} />
            <p className='ml-3'>github</p>
          </button>
        </div>
      </div>
      <div className='mt-60'>
        <h1 className='text-orange-600 text-5xl text-center'>My favorite Tools</h1>
        <div className='flex flex-row flex-wrap place-content-center'>
        {db.map((item) => (
          <div key={item.id} className="w-80 h-20 m-3 p-5 rounded-lg shadow-md transition hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:text-white">
            <p className='mx-24'>{item.name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  </>
  )
}
