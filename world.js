window.onload = function()
{
    var lookupBtn = document.querySelector('#lookup');
    var httprequest;

    lookupBtn.addEventListener('click', function(element){

        element.preventDefault();
        httprequest = new XMLHttpRequest();

        var countryQuery = document.getElementById('country').value;
        var url = "world.php?country=" + countryQuery;
        //var url = "http://localhost/info2180-lab5/world.php?country" + countryQuery;

        httprequest.onreadystatechange = getCountry;
        httprequest.open('GET', url, true);
        httprequest.send();    

    });

    function getCountry() {

        if (httprequest.readyState === XMLHttpRequest.DONE) {

            if(httprequest.status === 200) {

                var response = httprequest.responseText;
                var searchResult = document.querySelector('#result');
                searchResult.innerHTML = response;

            } else {
                alert('There was a problem with the request.');
            }
        }
    }

}