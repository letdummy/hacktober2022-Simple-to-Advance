const container = document.querySelector(".movie-container");
const api = "fa6fbfe6495abf62c7a7a07dd9339871";
const BASE_URL = "https://image.tmdb.org/t/p/w200/";
let template = "";

for (let i = 10000; i <= 10099; i++) {
  let url = `https://api.themoviedb.org/3/movie/${i}?api_key=${api}`;

  const loadMovies = async () => {
    //Async funtions are more cleaner and to handle errors in async funtions, You should use try catch
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // if (!data) {
      //     template = null;
      // }
      let img = `${BASE_URL}${data.backdrop_path}`;
      if (data.backdrop_path === null) {
        //checking if image is available, if not display a default image
        img =
          "./112815904-no-image-available-icon-flat-vector-illustration.webp";
      }
      if (res.status === 404) {
        //some movies are not available in the database of tmdb so a check is a must have.
        template += "";
      } else {
        template += `<div class="card shadow bg-body rounded" style="width: 25rem;">
                                <img src="${img}" class="card-img-top" alt="..." height="300px">
                                <div class="card-body">
                                    <h5 class="card-title">${data.original_title}</h5>
                                    <div class="details d-flex justify-content-between">
                                        <p class="card-text">${data.overview}</p>
                                        <button class="rating">${data.vote_average}</button>
                                    </div>
                                </div>
                            </div>`;
        container.innerHTML = template;
      }
    } catch (err) {
      console.log(err);
    }
  };
  window.addEventListener("DOMContentLoaded", () => loadMovies());
}
