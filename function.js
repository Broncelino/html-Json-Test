function dataGet() {
    fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        /*for(var i=0; i<data.length; i++) {
            document.getElementById("data").innerHTML +=
            data[0].bronze.defence + " " + data[1].VirtusArmor.ring_id + " " + data[0].bronze.damage + "<br />";
        }*/
        document.getElementById("data").innerHTML +=
        data[0].bronze.defence + " " + data[1].VirtusArmor.ring_id + " " + data[0].bronze.damage + "<br />";
    })
    .catch(function (err) {
        console.log(err);
    });}



    function dataGet2() {
        var x = document.getElementById("input");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("data").innerHTML +=
            data[x[0]].bronze.defence + " " + data[x[0]].bronze.health + " " + data[x[0]].bronze.magicBonus + "<br />";
        })
        .catch(function (err) {
            console.log(err);
        });}