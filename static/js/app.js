// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var filter_button = d3.select("#filter-btn");

filter_button.on("click",function(){
  var filter_input = d3.select("#datetime").property("value");

  if(filter_input != null)
  {
    var filteredData = tableData.filter(thing => thing.datetime === filter_input)

    tbody.html("")
    filteredData.forEach((item) => {
      var row = tbody.append("tr");
      Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  else{}
  })

