
function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
        <div style="margin:auto; background-color:#3843d8; width:300px; height:50px; color:#ffffff">Hello My Name is:</div>
        <div style="margin:auto; border-style:solid; background-color:#ffffff; width:300px; height:150px">${nametags[0]}</div>
        <div style="margin:auto; background-color:#ffffff; width:300px; height:20px"></div>
        <div style="margin:auto; background-color:#3843d8; width:300px; height:50px; color:#ffffff">Hello My Name is:</div>
        <div style="margin:auto; border-style:solid; background-color:#ffffff; width:300px; height:150px">${nametags[1]}</div>
        <div style="margin:auto; background-color:#ffffff; width:300px; height:20px"></div>
        <div style="margin:auto; background-color:#3843d8; width:300px; height:50px; color:#ffffff">Hello My Name is:</div>
        <div style="margin:auto; border-style:solid; background-color:#ffffff; width:300px; height:150px">${nametags[2]}</div>
        <div style="margin:auto; background-color:#ffffff; width:300px; height:20px"></div>
        <div style="margin:auto; background-color:#3843d8; width:300px; height:50px; color:#ffffff">Hello My Name is:</div>
        <div style="margin:auto; border-style:solid; background-color:#ffffff; width:300px; height:150px">${nametags[3]}</div>
        <div style="margin:auto; background-color:#ffffff; width:300px; height:20px"></div>
        <div style="margin:auto; background-color:#3843d8; width:300px; height:50px; color:#ffffff">Hello My Name is:</div>
        <div style="margin:auto; border-style:solid; background-color:#ffffff; width:300px; height:150px">${nametags[4]}</div>  
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