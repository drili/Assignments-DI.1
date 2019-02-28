var jsonData = JSON.parse(JSON.stringify(speakers));
console.log(jsonData);

var languageCount = 0;
var language;

function myLanguage() {
      var x = document.getElementById("select").selectedIndex;
      var y = document.getElementById("select").options;

      console.log("Index: " + y[x].index + " is " + y[x].text);;

      totalsum = 0;

      for (var i = 0; i < jsonData.length; i++) {
            var language = jsonData[i].language;
            var languageSpeakers = jsonData[i].speakers;
            if (language == y[x].text) {
                  languageCount++;
                  languageSpeakers++;
                  // console.log(language + ' ' + languageCount);
                  // console.log(languageSpeakers);

                  totalsum += languageSpeakers;
                  // console.log(totalsum);
                  // console.log(languageSpeakers);
            }
      }

      var languageCounted = document.createElement("p");
      languageCounted.setAttribute("id", "select-p");
      languageCounted.innerHTML = y[x].text + ' appears ' + '<b>' + languageCount + '</b>' + ' times and ' + '<b>' + totalsum + '</b>' + ' people speaks this language.';
      document.getElementById("countedlanguages").appendChild(languageCounted);

      var selectList = document.getElementById("countedlanguages");

      if (selectList.hasChildNodes()) {
            selectList.removeChild(selectList.childNodes[0]);
      }

      if (!languageCount >= 0) {
            languageCount = 0;
      }
}

var select = document.getElementById("select");

for(var i = 0; i < jsonData.length; i++) {
      var option = document.createElement("OPTION"),
      txt = document.createTextNode(jsonData[i].language);
      option.appendChild(txt);
      option.setAttribute("value",jsonData[i]);
      select.insertBefore(option,select.lastChild);
}

console.log(languageCount);
