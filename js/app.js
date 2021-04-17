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
function yourActivitySuccess(res) {
    let participantDataAct = res.data.activity;
    let actContainer = document.getElementById("participantActivityContainer");
    actContainer.innerText = `Your Activity: ${participantDataAct}`;
}
function yourActivityFailure(err) {
    console.log(err);
    let errorContainer = document.getElementById("participantActivityContainer");
    errorContainer.innerText = `Nope, sorry mate`;
}
function participantActivity(eventDetails) {
    let numparticipants = document.getElementById("selector").value;
    axios.request({
        method: "GET",
        url: `http://www.boredapi.com/api/activity?participants=${numparticipants}`,
    }).then(yourActivitySuccess).catch(yourActivityFailure);
}

let submitNum = document.getElementById("submitNumButton");
submitNum.addEventListener("click", participantActivity);