document.addEventListener("DOMContentLoaded", function () {
    let city = ["New York", " London", " Paris", " Tokyo", " Sydney", " Mumbai", " Shanghai", " Dubai", " Singapore", " Los Angeles", " Berlin", " Moscow", " Rome", " Madrid", " Toronto", " Beijing", " Istanbul", " Bangkok", " Cape Town", " Seoul"]
    let inputBox = document.getElementById('search');
    let results = document.getElementById('suggestion');
    console.log(inputBox.value)
    
    if (inputBox.value.length>=0) {
        let s = []
        inputBox.addEventListener('keyup', function (e) {
            console.log(inputBox.value.length);
            s = city.filter(function (city) {
                return city.toLowerCase().includes(inputBox.value.toLowerCase())
                
            })
            console.log(s);
            results.innerHTML="";
            s.forEach((ss)=>{
                let li = document.createElement("li")
                li.innerHTML=ss;
                li.onclick=()=>{
                    inputBox.value=""
                   inputBox.value= ss
                }
                results.appendChild(li)
            })
            
            if (e.key === 'Backspace' && inputBox.value == "") {
                results.innerHTML="";
                e.preventDefault();
            }
        })
    }
  
});

