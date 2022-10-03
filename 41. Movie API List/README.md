
# MOVIES DB APP

A brief description of what this project does and who it's for


## 🔗 Video URL
[Youtube URL](https://youtu.be/_Zoe_VtBp7Q)



## Authors

- [@SamareshDas](https://github.com/Samaresh-Das)


## API Reference

#### Get all Movies

```http
  GET /movie/{movie_id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


Returns Movies as objects with particular IDs




## Documentation

A movie db app which fetches Movies and TV shows from TMDB api and shows them on the page.
It uses HTML, CSS, JS and boostrap to make this project. 


I used an async function to fetch the api in a loop in a try catch block. Now why I used a loop? As
tmdb movie api contains ***781,504*** movies and ***136,523*** shows, and if I show all of those 
details and load them, it'll crash the viewers or the client's browser. So I used for loop to display
only certain movies in a range
See the code below

```bash
for (let i = 10001; i <= 10099; i++) {
    let url = `https://api.themoviedb.org/3/tv/${i}?api_key=${api}&language=en-US`

    const loadMovies = async () => {
        //Async funtions are more cleaner and to handle errors in async funtions, You should use try catch
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
```
Next I used an IMG variable to get the image path as there is a seperate url to get the images.
Consider the api docs [TMDB API](https://developers.themoviedb.org/3/getting-started/images) and the code below

```let img = `${BASE_URL}${data.poster_path}`;```

Next I checked if the images path is available on the object that I am getting after
fetching data, if not or if it is null, then I am giving it a default image.

```
if(data.poster_path === null){                         
img="../112815904-no-image-available-icon-flat-vector-illustration.webp"
}
```
Next I checked if I am getting any 404 status code, as tmdb api is a little bit weird.
It doesn't have all the api objects according to the ID in a serial way else render the template
which I will come into in a bit

```
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

```  
Now coming to that template, at the top of the file I included a variable with empty string
named template. If all the conditions match then render a HTML code for each results.
The HTML code is a card that I used from Bootstrap. I rendered all the movies in a card
format.

Coming to the 404 status code problem, the logic is, if the status is not 404 then render 
the template, otherwise if the status code is 404 then render the template with empty string
otherwise a null template. It will not be visible on the page

Now all this will not work until we include a event listener. Why? Because we want to load
all this on page load. So we used this

```
    window.addEventListener('DOMContentLoaded', () => loadMovies());
```

On page load it'll render the function.

I also have the same logic applied for the TV database.