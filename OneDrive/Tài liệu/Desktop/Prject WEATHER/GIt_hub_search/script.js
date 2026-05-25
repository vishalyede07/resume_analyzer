let input = document.querySelector("input");

let button = document.querySelector("button");

let image = document.querySelector("img");

let usernameText = document.querySelector("h2");

let paragraphs = document.querySelectorAll("p");


// Main Function
async function getProfile() {

    let username = input.value;

    
    // Empty input check
    if(username === ""){

        alert("Please enter username");

        return;
    }


    // Loading text
    usernameText.innerText = "Loading...";


    // API call
    let response = await fetch(`https://api.github.com/users/${username}`);

    let data = await response.json();

    console.log(data);


    // Error handling
    if(data.message === "Not Found"){

        usernameText.innerText = "User Not Found";

        paragraphs[0].innerText = "";

        paragraphs[1].innerText = "";

        return;
    }


    // Show data on screen
    image.src = data.avatar_url;

    usernameText.innerText = data.login;

    paragraphs[0].innerText = `Followers: ${data.followers}`;

    paragraphs[1].innerText = `Repositories: ${data.public_repos}`;

}



// Button click event
button.addEventListener("click", () => {

    getProfile();

});



// Enter key event
input.addEventListener("keypress", (event) => {

    if(event.key === "Enter"){

        getProfile();

    }

});