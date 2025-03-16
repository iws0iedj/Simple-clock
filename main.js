

function updateCode() {
    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();



    let hour = document.querySelector(".rotate-h");
    let min =  document.querySelector(".rotate-m");
    let second = document.querySelector(".rotate-s");

    hour.style.rotate = h* 30 + "deg";
    min.style.rotate = m * 6 + "deg";
    second.style.rotate = s * 6 + "deg";

    document.querySelector(".hour").textContent = h;
    document.querySelector(".min").textContent = " : "+m+" : ";
    document.querySelector(".sec").textContent = s;

    let soon = 31 - time.getDate();

    document.querySelector(".soon").textContent = "Remaining until Eid "+soon+" days" ;

}

// 0000/3/31 => 12:00

setInterval(updateCode, 0);


