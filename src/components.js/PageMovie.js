import AddMovie from "./Addmovie"
import ListMovies from "./ListMovie"
import SearchMovie from "./Searchmovie"

const PageMovie=({rateT,searchT,setRateT,setSearchT,movies,setMovies})=>{
    return(
        <div>
            <div className='searchAdd'>
                 <SearchMovie searchT={searchT} rateT={rateT} setSearchT={setSearchT} setRateT={setRateT}/>
                <AddMovie movies={movies} setMovies={setMovies}/>
            </div>
            <ListMovies movies={movies} searchT={searchT} rateT={rateT}/>
        </div>
    )
}
export default PageMovie