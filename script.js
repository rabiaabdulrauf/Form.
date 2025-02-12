async function getData() {
    const response = await fetch ("https://api.nationalize.io/?name=nathaniel");
    var data= await response.json();

    console.log(data);
    document.querySelector("#Company").innerHTML = data.country[0].country_id;
    document.querySelector("#Company").innerHTML = data.country[0].country_id;

    // document.getElementById("#Country").innerHTML = data.result[0].CountryName;
    document.getElementById("#Contact").innerHTML = data.name[0].ContactName;
}
getData();

 

  