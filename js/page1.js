fetch('./page1.html')
const input = document.querySelector('input');
input.addEventListener('change', updateValue);

function updateValue(e) {
plantedCalculate = e.target.value;

carbonCalculateTotal = plantedCalculate * 0.0217724;
  
document.getElementById("calculateCarbon").innerHTML =
  "Carbon Offset: " +
  parseFloat(carbonCalculateTotal).toFixed(2) +
  "T / " +
  parseFloat(carbonCalculateTotal * 1000).toFixed(2) +
  "KG";
 }

function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(), now.getMonth(), now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(
    dateString.substring(6, 10),
    dateString.substring(3, 5)-1,
    dateString.substring(0, 2)
  );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";

  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };

  if (age.years > 1) yearString = " years";
  else yearString = " year";
  if (age.months > 1) monthString = " months";
  else monthString = " month";
  if (age.days > 1) dayString = " days";
  else dayString = " day";

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString =
      age.years +
      yearString +
      ", " +
      age.months +
      monthString +
      ", " +
      age.days +
      dayString;
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = age.days + dayString;
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + yearString + " * Happy Birthday! *";
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + yearString + ", " + age.months + monthString;
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + monthString + ", " + age.days + dayString;
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + yearString + ", " + age.days + dayString;
  else if (age.years == 0 && age.months > 0 && age.days == 0)
    ageString = age.months + monthString;
  else ageString = "Just planted!";

  return ageString;
}

function getImage(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(), now.getMonth(), now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(
    dateString.substring(6, 10),
    dateString.substring(3, 5)-1,
    dateString.substring(0, 2) 
  );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var imageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";

  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };

  if (age.years >= 3) imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/tree_02.png";
//"3 Year+ !";
  else if (age.years >= 1)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/tree_01.png";
    //"1 Year+ !";
  else if (age.years == 0 && age.months >= 8 && age.months < 12)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_05.png";
    //"8 Months+ !";
  else if (age.years == 0 && age.months >= 6 && age.months < 8)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_04.png";
    //"6 Months+ !";
  else if (age.years == 0 && age.months >= 4 && age.months < 6)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_03.png";
    //"4 Months+ !";
  else if (age.years == 0 && age.months >= 2 && age.months < 4)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_02.png";
    //"2 Months+ !";
  else if (age.years == 0 && age.months == 0 && age.days > 0 && age.months < 2)
    imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_01.png";     //"Less than 2 months!";
  else imageString = "https://raw.githubusercontent.com/OnlyAnderson/web/master/seedling_01.png";

  return imageString;
}

var user = document.getElementById("user").innerHTML;
var RandomFactTotalCount = 0;
var plantedTotalCount = 0;
var carbonTotal = 0;
var forestOutput = "";
var locationOutput = "";
var dateOutput = "";
var i;

const listItems = document.querySelectorAll(".treesplanted li");
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].id == "count") {
    plantedTotalCount = plantedTotalCount + Number(listItems[i].textContent);
    locationOutput = listItems[i + 1].textContent;
    dateOutput = listItems[i + 2].textContent;
    sourceOutput = listItems[i + 3].textContent;

    var countTrees = Number(listItems[i].textContent);
    //var RandomSVG = ListSVG[Math.floor(Math.random() * ListSVG.length)];

    for (let i = 0; i < countTrees; i++) {
      var size = Number(42 + getAge(dateOutput));

      forestOutput =
        forestOutput +
        '<div class="tooltip"><img src="' +
        getImage(dateOutput) +
        '" height="40" width="40"><span class="tooltiptext"> #' +
        Number(plantedTotalCount - countTrees + i + 1) +
        "</br>Age: " +
        getAge(dateOutput) +
        "</br>Date Planted: " +
        dateOutput +
        "</br>Location: " +
        locationOutput +
        "</br></br>Source: " +
        sourceOutput +
        "</span></div>";
    }
  }
}

document.getElementById("totalPlantedCount").innerHTML = plantedTotalCount;

carbonTotal = plantedTotalCount * 0.0217724;
//A tree sequesters about 48 lbs of CO2 per year (0.0217724) tonne(s). Source: http://onetreeplanted.org/pages/tree-facts

var pickRandomFactList = [
  "Did you know? " +
    plantedTotalCount +
    " trees offset enough CO2 as " +
    parseFloat(carbonTotal / 0.092).toFixed(0) +
    " flights from London to Paris.", //A flight from London to Paris generates 92 kg CO2 of CO2 per flight (0.092) tonne(s). Source: https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year
  "Did you know? " +
    plantedTotalCount +
    " trees offset enough CO2 as " +
    parseFloat(carbonTotal / 0.986).toFixed(0) +
    " flights from New York to London.", //A flight from London to Paris generates 986 kg CO2 of CO2 per flight (0.986) tonne(s). Source: https://www.theguardian.com/environment/ng-interactive/2019/jul/19/carbon-calculator-how-taking-one-flight-emits-as-much-as-many-people-do-in-a-year
  "Did you know? " +
    plantedTotalCount +
    " trees offset enough CO2 as " +
    parseFloat((carbonTotal / 0.00043) / 414).toFixed(0) +
    " cars driving from London to Edinburgh (414 Miles / 666.26 KM).",
  
  "Did you know? " +
    plantedTotalCount +
    " trees offset enough CO2 as " +
    parseFloat((carbonTotal / 0.00043) / 8.4).toFixed(0) +
    " cars driving 8.4 Miles / 13.5185 KM (The average journey in the UK by car)."
];
var pickRandomFact =
  pickRandomFactList[Math.floor(Math.random() * pickRandomFactList.length)];

document.getElementById("randomFact").innerHTML = pickRandomFact;

document.getElementById("totalPlantedCount").innerHTML =
  "<b>" + plantedTotalCount + "</b><br> Trees Planted";
document.getElementById("totalCarbon").innerHTML =
  "<b>" +
  parseFloat(carbonTotal).toFixed(2) +
  "<font size=4>T</font> / " +
  parseFloat(carbonTotal * 1000).toFixed(2) +
  "<font size=4>KG</font> </b><br> Carbon Offset";

document.getElementById("forest").innerHTML =
  "" + user + "'s Forest</br> </br>" + forestOutput;

//------------------------------------ Google Map ------------------------------------   
      google.charts.load('current', {
        'packages':['geochart'],
        // Note: Because this chart requires geocoding, you'll need mapsApiKey.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country',   'Trees'],
          ['Peru', 60],
          ['United States', 25],
          ['Indonesia', 50],
          ['Ghana', 10],
          ['Kenya', 10],
          ['Ethiopia', 10],
          ['Vietnam', 25], 
          ['Thailand', 50], 
          ['Canada', 25],
          ['Australia', 50],
          ['Philippines', 25],
          ['Iceland', 25],
          ['Denmark', 10],
          ['India', 25],
          ['United Kingdom', 150],
          ['New Zealand', 50],
          ['Haiti', 10],
          ['Costa Rica', 10],
          ['Guatemala', 10],
          ['Honduras', 10],
          ['Mexico', 25],
          ['Colombia', 60],
          ['Brazil', 60],
          ['Spain', 50],
          ['Portugal', 50],
          ['Tanzania', 10],
          ['Malawi', 10],
          ['Ivory Coast', 10],
          ['Uganda', 10],
          ['Romania', 10]
        ]);

        var options = {
          colorAxis: {colors: ['#a4c99c', '#538547']},
          backgroundColor: '#78a96e',
          datalessRegionColor: '#B0B0B0',
          defaultColor: '#f5f5f5',
          title: 'center alignment'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
        chart.draw(data, options);
      };