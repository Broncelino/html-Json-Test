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
        var x = document.getElementById("table");
        var y = document.getElementById("armor");
        var z = document.getElementById("stat");
        fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("data").innerHTML +=
            data[x.value][y.value][z.value] + "<br />";
            /*"Defence:" + data[x.value][y.value].defence + " Health Bonus: " + data[x.value][y.value].health + " Magic Bonus: " + data[x.value][y.value].magicBonus + "<br />";*/
        })
        .catch(function (err) {
            console.log(err);
        });}