document.getElementById("search-form").addEventListener('submit', handleSubmit);

async function handleSubmit(e) {


    const width =   window.innerWidth; ;
    var ap ;
    if( width < 500)
    {
        ap = 1 ;
    }
    else if( width < 800)
    {
        ap = 2 ;
    }
    else{
        ap = 3 ;
    }
    e.preventDefault();
    var search = document.getElementById('input').value ;
    console.log(search);
    const results = 21;

    if (!search) {
        alert("Please fill the filed")
    }

    const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${results}`
    await axios.get(URL).then(response => {

        const data = response.data;
        var myResults = document.getElementById("container");

        myResults.innerHTML = '';

        if (!data.totalItems) {
            alert("No Book Found")
        }
        else {
            for (let i = 0; i < data.items.length; i = i + 3) {
                var results = document.createElement('div');
                results.classList.add('row');
                for (let j = i; j < i + ap; j++) {

                    if (j == data.items.length) {
                        break;
                    }
                    var box = document.createElement('div');
                    box.classList.add('box');
                    var h1 = document.createElement('h2');
                    var h6 = document.createElement('h6');
                    var img = document.createElement('img');
                    var p = document.createElement('p');
                    var btn = document.createElement('a');

                    img.src = data.items[j].volumeInfo.imageLinks.smallThumbnail;

                    var title = document.createTextNode(data.items[j].volumeInfo.title);
                    h1.appendChild(title);

                    var author = document.createTextNode(`by ${data.items[j].volumeInfo.authors[0]}`);
                    h6.appendChild(author);

                    var des = document.createTextNode(data.items[j].volumeInfo.description.split(' ').slice(0, 30).join(' '));
                    p.appendChild(des);

                    btn.classList.add('btn');
                    btn.classList.add('btn-outline-secondary');
                    btn.classList.add('button')
                    btn.innerHTML = "Read More";
                    btn.href = data.items[i].volumeInfo.previewLink
                    btn.target = "blank"


                    box.appendChild(h1);
                    box.appendChild(h6);
                    box.appendChild(img);
                    box.appendChild(p);
                    box.appendChild(btn);
                    results.appendChild(box);
                }
                myResults.appendChild(results);
            }
        }
    }).catch(e => {
        console.log(e);
    })

}