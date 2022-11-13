window.onload = function()
{
    const lookupBtn = document.getElementById('lookup');
    lookupBtn.addEventListener('click', lookupFunc);
    
    function lookupFunc()
    {
        
        var searchInput = document.getElementById('country').value;
        var httprequest = new XMLHttpRequest();

        httprequest.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("result").innerHTML = this.responseText;
                alert(this.responseText.replace(/<\/?[^>]+(>|$)/g, " "));
            }
        };
              
        httprequest.open("GET", 'world.php?country='+searchInput ,true);
        httprequest.send();

    };

}
