import Image from "next/image"


   export async function generateStaticParams(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

    const res = await data.json()
    
    /* console.log(res.results) */
    return res.results.map((movie) => ({movie: toString(movie.id),})) 
}  
 


export default async function movieDetail({params}) {
    
    const {movie} = params
    
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`/* ,{next : {revalidate:0}} */)
    
    
    const res = await data.json()
    
    const imgPath =  `https://image.tmdb.org/t/p/original/${res.poster_path}` 
    return(
        <div>
            <div>
                <h2 className="text-2xl"> {res.title} </h2>
                <h2 className="text-lg"> {res.release_date}  </h2>
                <h2> RunTime : {res.runtime} minutes </h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md"> {res.status} </h2>
                <Image src={imgPath} alt={res.title} width="600" height="600" className="my-12 w-full"  />
                <p> {res.overview} </p>
            </div>
        </div>
    )
}