import Link from "next/link";



export default function Movie ({movie}){

    const imgPath =  `https://image.tmdb.org/t/p/original/${movie.poster_path}`

    return(
        <div>
            <hr></hr>
            <h1> {movie.title} </h1>
            <h2> {movie.release_date}</h2>
            <img src={imgPath} width={400} height={500} alt='movie'/>
            <Link href={`/${movie.id}`} className="text-sm bg-yellow-600 inline-block my-2 py-2 px-4 rounded-md"> See More </Link>
            <hr></hr>
        </div>
    )
}