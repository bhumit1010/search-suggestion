document.addEventListener("DOMContentLoaded", function () {
    let city = ["New York", " London", " Paris", " Tokyo", " Sydney", " Mumbai", " Shanghai", " Dubai", " Singapore", " Los Angeles", " Berlin", " Moscow", " Rome", " Madrid", " Toronto", " Beijing", " Istanbul", " Bangkok", " Cape Town", " Seoul"]
    let inputBox = document.getElementById('search');
    let results = document.getElementById('suggestion');
    if (inputBox.value.length >= 0) {
        let s = []
        inputBox.addEventListener('keypress', function () {
            console.log(inputBox.value.length);
             s = city.filter(function (city) {
                return city.includes(inputBox.value)
                
            })
            console.log(s);
            s.forEach(function (city) {

                let li = document.createElement('li');
                li.textContent = city;
                results.appendChild(li);
                
            })
        })
    }
});

