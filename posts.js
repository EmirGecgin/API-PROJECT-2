async function fetchuserDataDetailed() {
    const params = new URLSearchParams(window.location.search);
    const getUserId = params.get("userId");
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${getUserId}`);
    const userData = await response.json();
    console.log(userData);
    displayDetailedUserData(userData);
}

function displayDetailedUserData(users) {
    const userCardSection = document.getElementById("user-card-post");
    users.forEach((user) => {
        userCardSection.innerHTML += `
<div class="col-md-12 text-center mt-3 mb-2">
    <div class="card w-100">
        <div class="card-body">
            <h3>${user.id}</h3>
            <p>${user.title}</p>
            <p>${user.body}</p>
        </div>
    
    </div>

</div>

`
    });
}
fetchuserDataDetailed();