// Have a button that when clicked, will show the user a new random activity to try (done with JS)
function randomActivitySuccess(res) {
    let randomData = res.data;
    let actContainer = document.getElementById("randomActContainer");
    // Note: the variable above is targeting a long Id
    actContainer.innerText = `${randomData.activity}`;
}
// The function above will only happen if the getRandomActivity function actually works when it's clicked
function randomActivityFailure(err) {
    console.log(err);
    let errorContainer = document.getElementById("randomActContainer");
    errorContainer.innerText = `Fail`;
}
// The function above will get called when getRandomActivity fails
function getRandomActivity(eventDetails) {
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity/",
    }).then(randomActivitySuccess).catch(randomActivityFailure);
}
let randomActivityButton = document.getElementById("randomActivity");
randomActivityButton.addEventListener("click", getRandomActivity);
// Easiest one. Just have to GET an activity from the API and then inject the data to the HTML file

// dropdown menu function: 
function yourActivitySuccess(res) {
    let participantDataAct = res.data.activity;
    let actContainer = document.getElementById("participantActivityContainer");
    // Note: disregard what I said about "randomActContainer" being long
    actContainer.innerText = `Your Activity: ${participantDataAct}`;
}
function yourActivityFailure(err) {
    console.log(err);
    let errorContainer = document.getElementById("participantActivityContainer");
    errorContainer.innerText = `Nope, sorry mate`;
}
function participantActivity(eventDetails) {
    let numparticipants = document.getElementById("selector").value;
    // Note: had to get the value for the selection made by the user from the html
    axios.request({
        method: "GET",
        url: `http://www.boredapi.com/api/activity?participants=${numparticipants}`,
        // Inserted value of user's option to the url via veriable
    }).then(yourActivitySuccess).catch(yourActivityFailure);
}
let submitNum = document.getElementById("submitNumButton");
submitNum.addEventListener("click", participantActivity);