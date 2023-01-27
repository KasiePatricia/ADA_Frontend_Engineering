const jokeImg = document.getElementById("joke-img");
const setup = document.getElementById("setUp");
const punchline = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const resetbtn = document.getElementById("resetBtn");
const loader = document.querySelector(".loader");

let joke = {};

const tellAJoke = () =>{
    loader.style.display = "block";
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(
        data => (
            loader.style.display = "none",
            (setup.innerHTML = data.setup), (punchlineBtn.style.display = 'block'), (joke = data)
        )
    )
    
    .catch(err => console.log(err));
};

const tellPunchline = () => {
    punchline.innerHTML = joke.punchline;
    jokeImg.src = "https://media.tenor.com/WMl9mhz4pDgAAAAM/cute-laugh.gif";
    resetbtn.style.display = 'block';
}

const resetAll = () => {
    jokeImg.src = "https://thumbs.gfycat.com/BestGoodnaturedBlesbok-size_restricted.gif";
    setup.innerHTML = "";
    punchlineBtn.style.display = "none";
    punchline.innerHTML = "";
    resetbtn.style.display = 'none';
}
