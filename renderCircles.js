
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    return `
        <div class="text-center mt-5">
            <div style="margin: 20px auto; background-color:${circles[0].color}; height:${circles[0].radius}px; width:${circles[0].radius}px; border-radius:50%"></div>
            <div style="margin: 20px auto; background-color:${circles[1].color}; height:${circles[1].radius}px; width:${circles[1].radius}px; border-radius:50%"></div>
            <div style="margin: 20px auto; background-color:${circles[2].color}; height:${circles[2].radius}px; width:${circles[2].radius}px; border-radius:50%"></div>
            <div style="margin: 20px auto; background-color:${circles[3].color}; height:${circles[3].radius}px; width:${circles[3].radius}px; border-radius:50%"></div>
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}