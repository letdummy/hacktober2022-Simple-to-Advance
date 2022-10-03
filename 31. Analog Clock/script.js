setInterval(() => {
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sc = date.getSeconds();

    hrotation = 30*hr + hr/2 + ((hr/2)/60);
    mrotation = 6*min + min/60;
    srotation = 6*sc;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);