function generateWish(){

    let name = document.getElementById("name").value;
    let occasion = document.getElementById("occasion").value;

    if(name === ""){
        alert("Please enter name");
        return;
    }

    let link = window.location.href + 
    "?name=" + encodeURIComponent(name) +
    "&occasion=" + encodeURIComponent(occasion);


    document.getElementById("result").innerHTML =
    `
    <h3>Your Wish Link:</h3>
    <p>${link}</p>
    <button onclick="copyLink('${link}')">
    Copy Link
    </button>
    `;
}


function copyLink(link){

    navigator.clipboard.writeText(link);

    alert("Link Copied!");
}
