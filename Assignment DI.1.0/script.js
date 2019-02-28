var jsonData = JSON.parse(JSON.stringify(data));
console.log(jsonData.colors);

for (var i = 0; i < jsonData.colors.length; i++) {
      var x = document.createElement("INPUT");
      x.setAttribute("type", "color");
      x.setAttribute("value", jsonData.colors[i].code.hex);
      x.setAttribute("id", jsonData.colors[i].color);
      x.setAttribute("class", "colors");

      var colorcaption = document.createElement("div");
      colorcaption.setAttribute("id", jsonData.colors[i].color);
      colorcaption.setAttribute("class", "colorsclass");
      colorcaption.style.margin = "10px";
      colorcaption.style.color = jsonData.colors[i].code.hex;
      colorcaption.innerHTML = "<p>" + jsonData.colors[i].color + "</p>";
      document.getElementById("colorsdiv").appendChild(colorcaption);

      document.getElementById(jsonData.colors[i].color).appendChild(x);
}
