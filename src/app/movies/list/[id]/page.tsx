import { use } from 'react'


async function getMovie(id: number){
    const res = await fetch(`http://localhost:4001/movies/${id}`)

    return res.json()
}

export default function MovieDetails({ params }: { params: { id: number } }) {

    const movie = use(getMovie(params.id))

  return (
    <div>
        <h3 className='text-2xl font-bold text-black'>{movie.Title}</h3>
        <p>{movie.Plot}</p>
    
    </div>
  )
}
