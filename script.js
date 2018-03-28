window.onload = function() {

    const button = document.querySelector("#form button");
    button.addEventListener("click", send);
}

function send(event) {

    event.preventDefault();
    console.log("Button clicked");

    // get the category
    const category = document.querySelector("select").value;
    // get the search
    const search = document.querySelector("textarea").value;

    const url = `https://tastedive.com/api/similar?q=${search}&k=303777-recommen-Z9BY1TA9&type=${category}`;

    const settings = {
        method: "GET"
    };

    fetch(url, settings) 
    .then(response => response.json())
    .then(json => {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    // loop json object
    // find results div
    const tempDiv = document.getElementById("results-list");
    const resultsDiv = document.querySelector("#results");
    if(tempDiv !== null){
        tempDiv.remove();
    }
    // create <span> for each result
    const div1 = document.createElement("div");
    div1.id = "results-list";
    resultsDiv.appendChild(div1);
    // get results from json
    json.Similar.Results.forEach(function(result) {
        console.log(result.Name);
        let div = document.createElement("div");
        div.innerText = result.Name;
        div1.appendChild(div);
    })
    // add span to results


    // add name of result to innerText of <span>
}
