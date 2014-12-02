'use strict';

angular.module('InfoRetrievalApp')
  .controller('MainCtrl', function ($scope,$http) {

  	
	var successCallback = function(response) {
 				
 	 	
		var width = 1000,
		    height = 400;

		var projection = d3.geo.mercator()
		    .center([0, 3])
		    

		d3.select("div.jumbotron.ng-scope svg").remove();
		var svg = d3.select("div.jumbotron.ng-scope").append("svg")
		     .attr("width", width)
		     .attr("height", height);

		var path = d3.geo.path()
		    .projection(projection);

		var g = svg.append("g");


		var colors = d3.scale.category10().domain([
			"Argentina",
			"Peru",
			"Colombia",
			"Mexico",
			"SantoDomigo",
			"Honduras",
			"Venezuala",
			"Spain",
			"USA"
		])

		// load and display the World
		d3.json("Boundary/world-topo-min.json", function(error, topology) {


			g.selectAll("path")
			      .data(topojson.feature(topology, topology.objects.countries)
			          .features)
			    .enter()
			      .append("path")
			      .attr("d", path)
			});

					//zoom and pan
			var zoom = d3.behavior.zoom()
			    .on("zoom",function() {
			        g.attr("transform","translate("+ 
			            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
			        g.selectAll("circle")
			            .attr("d", path.projection(projection));
			        g.selectAll("path")  
			            .attr("d", path.projection(projection)); 

			  });

			svg.call(zoom);

			// load and display the cities

			g.selectAll("circle")
			       .data(response.grouped.location2.groups)
			       .enter()
			       .append("a")
							  .attr("xlink:href", function(d) {
								  return "https://www.google.com/search?q="+d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude}
					)
			       .append("circle")
			       .attr("cx", function(d) {
			               return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[0];
			       })
			       .attr("cy", function(d) {
			               return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[1];
			       })
			       .attr("r", 3)
			       .style("fill", function(d) {
			               return colors(d.doclist.docs[0].geoLocation);
			       })
			    

			//d3.json(response.response, function(error, data) {
			    
			//});





			function timelineCircle() {

				var testData = [
					{times: [{"starting_time": 1349074800000, "ending_time": 1351753201000}]},
					{times: [{"starting_time": 1351753201000, "ending_time": 1354348801000}]},
					{times: [{"starting_time": 1354348801000, "ending_time": 1357027201000}]},
					{times: [{"starting_time": 1357027201000, "ending_time": 1359705601000}]},
					{times: [{"starting_time": 1359705601000, "ending_time": 1362124801000}]},
					{times: [{"starting_time": 1362124801000, "ending_time": 1364799601000}]},
					{times: [{"starting_time": 1364799601000, "ending_time": 1367391601000}]},
					{times: [{"starting_time": 1367391601000, "ending_time": 1370070001000}]},
					{times: [{"starting_time": 1370070001000, "ending_time": 1372662001000}]},
					{times: [{"starting_time": 1372662001000, "ending_time": 1375340401000}]},
					{times: [{"starting_time": 1375340401000, "ending_time": 1378018801000}]},
					{times: [{"starting_time": 1378018801000, "ending_time": 1380610801000}]},
					{times: [{"starting_time": 1380610801000, "ending_time": 1383289201000}]},
					{times: [{"starting_time": 1383289201000, "ending_time": 1383289201000}]}
				];

		        var chart = d3.timeline()
		        .tickFormat({ //
		        	format: d3.time.format("%d %m %Y"),
		            tickTime: d3.time.months,
		            tickInterval: 1,
		            tickSize: 30})
		        	.display("circle")
		        	.click(function (d, i, datum) {
            			jQuery.ajax({
	  						//url: "http://localhost:8983/solr/collection1/select?q=*%3A*&fl=jobtype%2Clatitude%2Clongitude&wt=json&indent=true",
	  						//data: myQueryParameters,
	  						url: "http://localhost:8983/solr/collection1/select?q=range%3A" + (i+1) + "&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+geoLocation&wt=json&group=true&group.field=location2&indent=true",
	  						success: successCallback,
	  						dataType: 'jsonp',
	  						jsonp: 'json.wrf'	
						});
          			}); // toggle between rectangles and circles

		        //d3.select("#timeline2").append("svg").attr("width", width)
		        d3.select("div.timeline.ng-scope svg").remove();
		        d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum(testData).call(chart);
      		};
      		timelineCircle();

		}

		jQuery.ajax({
	  		//url: "http://localhost:8983/solr/collection1/select?q=*%3A*&fl=jobtype%2Clatitude%2Clongitude&wt=json&indent=true",
	  		//data: myQueryParameters,
	  		url: "http://localhost:8983/solr/collection1/select?q=*%3A*&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+geoLocation&wt=json&group=true&group.field=location2&indent=true",
	  		success: successCallback,
	  		dataType: 'jsonp',
	  		jsonp: 'json.wrf'	
		});
	});
	// d3.json("Boundary/world-110m2.json", function(error, us) {
 //  		if (error) return console.error(error);

 //  		// svg.append("path")
 //    //   	.datum(topojson.mesh(us))
 //    //   	.attr("d", path);

 //      	svg.append("path")
 //    	.datum(topojson.feature(us, us.objects.nation))
 //    	.attr("class", "land")
 //    	.attr("d", path);

	// 	svg.append("path")
 //    	.datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
 //    	.attr("class", "border border--state")
 //    	.attr("d", path);

 //    // 	svg.append("g")
 //    // 	.attr("class", "bubble")
 //  		// .selectAll("circle")
 //    // 	.data(topojson.feature(us, us.objects.counties).features)
 //  		// .enter().append("circle")
 //    // 	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
 //    // 	.attr("r", 1.5);

 //    	var radius = d3.scale.sqrt()
 //    	.domain([0, 1e6])
 //    	.range([0, 15]);

 //    	svg.append("g")
 //    	.attr("class", "bubble")
 //  		.selectAll("circle")
 //    	.data(topojson.feature(us, us.objects.counties).features
 //      	.sort(function(a, b) { return b.properties.population - a.properties.population; }))
 //  		.enter().append("circle")
 //   	 	.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
 //    	.attr("r", function(d) { return radius(d.properties.population); });

 //    	var legend = svg.append("g")
	//     .attr("class", "legend")
	//     .attr("transform", "translate(" + (width - 50) + "," + (height - 20) + ")")
	//   	.selectAll("g")
	//     .data([1e6, 3e6, 6e6])
	//   	.enter().append("g");

	// 	legend.append("circle")
	//     .attr("cy", function(d) { return -radius(d); })
	//     .attr("r", radius);

	// 	legend.append("text")
	//     .attr("y", function(d) { return -2 * radius(d); })
	//     .attr("dy", "1.3em")
	//     .text(d3.format(".1s"));
	// });




