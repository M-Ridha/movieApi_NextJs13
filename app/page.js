import Movie from "./Movie"
import style from './home.module.css'


export default async function Home() {
   const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  
    const res = await data.json()
    
    
  
   return (
    <main className={style.homePage}>
      <h1 className={style.title}> hello next Js 13 </h1>

      <div className="grid gap-16 grid-cols-fluid p-5">
        {res.results.map((movie , i) =>  <Movie key={i} movie={movie}/> )}
      </div>
    </main>
  )
}
