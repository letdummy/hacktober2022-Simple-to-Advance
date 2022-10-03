//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
const container = document.querySelector('.tv-container');
const api = "fa6fbfe6495abf62c7a7a07dd9339871";
const BASE_URL = "https://image.tmdb.org/t/p/w200"
let template = '';

for (let i = 10001; i <= 10099; i++) {
    let url = `https://api.themoviedb.org/3/tv/${i}?api_key=${api}&language=en-US`

    const loadMovies = async () => {
        //Async funtions are more cleaner and to handle errors in async funtions, You should use try catch
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            // if (!data) {
            //     template = null;
            // }
            let img = `${BASE_URL}${data.poster_path}`;
            if(data.poster_path === null){                                //checking if image is available, if not display a default image
                img="../112815904-no-image-available-icon-flat-vector-illustration.webp"
            }
            if(res.status === 404){  //some movies are not available in the database of tmdb so a check is a must have.
                template += ''
            }else{
                template += `<div class="card shadow bg-body rounded" style="width: 25rem;">
                                <img src="${img}" class="card-img-top" alt="Profile Image">
                                <div class="card-body">
                                    <p class='card-title'>${data.name}</p>
                                    <p class="card-text">${data.overview}</p>
                                    <p class="card-text fs-2">Episodes - <span class='fs-4'>${data.number_of_episodes}</span></p>
                                </div>
                            </div>`
                container.innerHTML = template
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    window.addEventListener('DOMContentLoaded', () => loadMovies());
}
