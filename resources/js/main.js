//console.log("hello");
let a = 10;
if (a > 2) {
    console.log('хоёроос их');
}
else {
    console.log('хоёроос бага');
}
//document.write(a);

anychart.onDocumentLoad(function () {
        // create an instance of a pie chart
        var chart = anychart.pie();
        // set the data
        chart.data([
          ["Профессор", 5],
          ["Дэд профессор", 2],
          ["Ахлах багш", 2],
          ["Багш", 2],
          ["Дадлагжигч багш", 2],
	  ["Сургалтын мастер", 5]
        ]);
        // set chart title
        chart.title("Албан тушаалын ангилал");
        // set the container element 
        chart.container("container");
        // initiate chart display
        chart.draw();
      });
