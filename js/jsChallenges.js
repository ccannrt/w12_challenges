//Challenge 1 pt 1
// document.querySelector('#subscribe').addEventListener("click", function(){
//     if (this.checked) {
//         document.querySelector('#emailDiv').style.display = "block";
//     }
//     else {
//         document.querySelector('#emailDiv').style.display = "none";
//     }
// })

//Challenge 1 pt2
// document.addEventListener('click', function(){
//     let currentTime = new Date();
//     alert("Current time:" + currentTime);
// })

//Challenge 2
document.querySelector('#sameAddress').addEventListener("click", function(){
    if (this.checked) {
        let address = document.querySelector("#home");
        let billing_address = document.querySelector("#bill");
        address.value = billing_address.value;
        address.disabled = true;
    }
    else {
        address = "";
        address.disabled = false;
    }
})