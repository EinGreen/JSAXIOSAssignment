// Have a button that when clicked, will show the user a new random activity to try (done with JS)
function randomActivitySuccess(res) {
    let randomData = res.data;
    let actContainer = document.getElementById("randomActContainer");
    actContainer.innerText = `${randomData.activity}`;
}
function randomActivityFailure(err) {
    console.log(err);
}
function getRandomActivity(eventDetails) {
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity/",
    }).then(randomActivitySuccess).catch(randomActivityFailure);
}
let randomActivityButton = document.getElementById("randomActivity");
randomActivityButton.addEventListener("click", getRandomActivity);

// dropdown menu function: 
