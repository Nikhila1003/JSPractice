var database = [
    {
        username: "Nikhila",
        password: "Secret"
    },
    {
        username: "Akhila",
        password: "Secre"
    },
    {
        username: "Avinash",
        password: "Secr"
    }
];

var newsFeed = [
    {
        username: "Avinash",
        timeline: "Let's get the work done!"
    },

    {
        username: "Harsha",
        timeline: "Javascript is so cool :)"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
        
    }
    return false;
    }


function signIn(username, password) {
        if ( isUserValid(username, password) ) {
            console.log(newsFeed);
            displayFeed();
        }
        else {
            alert("Uh-oh, incorrect login credentials :(");
        }

    }
   
function displayFeed() {
    var feedDiv = document.getElementById("feed");
    feedDiv.innerHTML = ""; // Clear any existing content in the div
    newsFeed.forEach(function(post) {
        var postElement = document.createElement("div"); // Create a new div for each post
        postElement.innerHTML = `<strong>${post.username}</strong>: ${post.timeline}`;
        postElement.style.marginBottom = "10px"; // Add some spacing between posts
        feedDiv.appendChild(postElement); // Append the post to the feed div
    });
}

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(usernamePrompt, passwordPrompt);