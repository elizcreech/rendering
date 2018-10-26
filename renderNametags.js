
function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
        <div style="margin:auto; background-color:#3843d8; width:200px; height:100px;">Hello My Name is:</div>    
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}