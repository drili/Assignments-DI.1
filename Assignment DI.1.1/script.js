var jsonData = JSON.parse(JSON.stringify(data));
console.log(jsonData);

function distance(lat1, lon1, lat2, lon2) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
      }
      else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                  dist = 1;
            }

            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.609344;
            dist = dist.toFixed(2);
            return dist;
      }
}

for (var i = 1; i < jsonData.length; i++) {

      var x = document.createElement("TR");
      x.setAttribute("id", jsonData[i].id);
      document.getElementById("tbody").appendChild(x);

      var tableids = document.createElement("th");
      tableids.setAttribute("scope", "row");
      tableids.innerHTML = jsonData[i].id;
      document.getElementById(jsonData[i].id).appendChild(tableids);

      var tabletr2 = document.createElement("td");
      tabletr2.innerHTML = jsonData[i].city;
      document.getElementById(jsonData[i].id).appendChild(tabletr2);

      var tablelat = document.createElement("td");
      tablelat.innerHTML = jsonData[i].lat;
      document.getElementById(jsonData[i].id).appendChild(tablelat);

      var tablelon = document.createElement("td");
      tablelon.innerHTML = jsonData[i].lon;
      document.getElementById(jsonData[i].id).appendChild(tablelon);

      var tabletr = document.createElement("td");
      tabletr.setAttribute("id", jsonData[i].id);
      tabletr.innerHTML = distance(jsonData[0].lat, jsonData[0].lon, jsonData[i].lat, jsonData[i].lon) + ' kilometers';
      document.getElementById(jsonData[i].id).appendChild(tabletr);
}

var city = document.createElement("p");
city.innerHTML = jsonData[0].city + ' (' + 'lat: ' + jsonData[0].lat + ' lon: ' + jsonData[0].lon + ')';
document.getElementById("cityspan").appendChild(city);
