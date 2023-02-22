const result = document.getElementById("result")
getmoviedetails()

getseriesdetails()

// deatils of movie 

async function getmoviedetails() {

    let movieid = localStorage.getItem('movieid')
    console.log(movieid)

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)

    const data = await res.json()
    console.log(data)
    result.innerHTML = `
    <div style="background-image:url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path}
    );"class="imagecontainer">
    <div   class="imagesdetails">
        <img src="https://image.tmdb.org/t/p/w154${data.poster_path}" alt="">
        <div class="cardsdetails">
            <div class="percent"> 
            ${(data.vote_average * 10).toFixed(1)}%
            </div>

            <div class="relase">
                <p>${data.release_date}</p>
                <p>${data.runtime} mins</p>
                <p>${data.spoken_languages[0].english_name}</p>
            </div>
            <div class="title">
                <p>Drama</p>
                <h2>${data.title}</h2>
                
            </div>
           

        </div>
    </div>
   


</div>
<div class="castcontanier">
<div class="plot">
<h1>Plot</h1>
<hr/>
<p>${data.overview}</p>
</div>
<div id="cast"class="cast">
<h1>Cast</h1>
<hr/>
</div>
                
</div>`

    const cast = document.getElementById("cast")
    console.log(cast)
    const castres = await fetch(` https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
    console.log(castres)
    const castdata = await castres.json()
    console.log(castdata.cast)
    castdata.cast.map((castname, index) => {
        // console.log(castname)
        // console.log(index)
        // console.log(castname.name)
        if (index <= 3) {
            cast.innerHTML += ` <div class="castdetails">
        <img src="	https://image.tmdb.org/t/p/w45${castname.profile_path}" >
        <p>${castname.name}</p> </div>`
        }




    })

    localStorage.removeItem('movieid');


}


//  details of tv
async function getseriesdetails() {

    let seriesid = localStorage.getItem('seriesid')
    console.log(seriesid)

    const res = await fetch(`https://api.themoviedb.org/3/tv/${seriesid}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)

    const data = await res.json()
    console.log(data)
    result.innerHTML = `
    <div style="background-image:url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path}
    );"class="imagecontainer">
    <div   class="imagesdetails">
        <img src="https://image.tmdb.org/t/p/w154${data.poster_path}" alt="">
        <div class="cardsdetails">
            <div class="percent"> 
            ${(data.vote_average * 10).toFixed(1)}%
            </div>

            <div class="relase">
                <p>${data.first_air_date}</p>
                <p>${data.episode_run_time} mins</p>
                <p>${data.spoken_languages[0].english_name}</p>
                <p>${data.number_of_seasons} Season</p>


               

            </div>
            <div class="title">
                <p>Drama</p>
                <h2>${data.name}</h2>
                
            </div>
           

        </div>
    </div>
   


</div>

<div class="castcontanier">
<div class="plot">
<h1>Plot</h1>
<hr/>
<p>${data.overview}</p>
</div>
<div id="cast"class="cast">
<h1>Cast</h1>
<hr/>
  
</div>
                
</div>`

    const cast = document.getElementById("cast")
    console.log(cast)
    const castres = await fetch(` https://api.themoviedb.org/3/tv/${seriesid}/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
    console.log(castres)
    const castdata = await castres.json()
    console.log(castdata.cast)
    castdata.cast.map((castname, index) => {
        // console.log(castname)
        // console.log(index)
        // console.log(castname.name)
        if (index <= 3) {
            cast.innerHTML += ` <div class="castdetails">
        <img src="	https://image.tmdb.org/t/p/w45${castname.profile_path}" >
        <p>${castname.name}</p> </div>`
        }




    })

    localStorage.removeItem('seriesid');


}