'use strict';

angular.module('InfoRetrievalApp')
    .controller('MainCtrl', function($scope, $http) {

    	$scope.type = "Location";
    	$scope.timeVal = "Full Time Span";

        $scope.activeButton = "location";
        $scope.isActive = function(button) {
            return (button === $scope.activeButton);
        }
        String.prototype.contains = function(it) { return this.indexOf(it) != -1; };


        $scope.operation = function(category) {
            var url;
            
            if (category === "location") {
            	$scope.type = "Location";
				$scope.activeButton = "location";
		        jQuery.ajax({
		            url: "http://localhost:8983/solr/collection1/select?q=*%3A*&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+geoLocation&wt=json&group=true&group.field=location2&indent=true",
		            success: locationCallback,
		            dataType: 'jsonp',
		            jsonp: 'json.wrf'
		        });

            } else if (category === "company") {
            	$scope.activeButton = "company";
            	$scope.type = "Company";
            	jQuery.ajax({
		            url: "http://localhost:8983/solr/collection1/select?q=*%3A*&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=location2&indent=true",
		            success: companyCallback,
		            dataType: 'jsonp',
		            jsonp: 'json.wrf'
		        });

            } else if (category === "salary") {
            	$scope.activeButton = "salary";
            	$scope.type = "Salary";
            	jQuery.ajax({
		            url: "http://localhost:8983/solr/collection1/select?q=salary%3A/[0-9]{1%2C}/&rows=10000&fl=salary%2C+latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=salary&indent=true",
		            success: salaryCallback,
		            dataType: 'jsonp',
		            jsonp: 'json.wrf'
		        });
            	

            } else if (category === "jobtype") {
            	$scope.activeButton = "jobtype";
            	$scope.type = "Job Type";
         		jQuery.ajax({
		            url: "http://localhost:8983/solr/collection1/select?q=*%3A*&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=location2&indent=true",
		            success: jobTypeCallback,
		            dataType: 'jsonp',
		            jsonp: 'json.wrf'
		        });

            } else if (category === "category") {
            	$scope.activeButton = "category";
            	$scope.type = "Category";
         		jQuery.ajax({
		            url: "http://localhost:8983/solr/collection1/select?q=NOT+category%3AOthers&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+category%2C+company&wt=json&group=true&group.field=location2&indent=true",
		            success: categoryCallback,
		            dataType: 'jsonp',
		            jsonp: 'json.wrf'
		        });

            }
            updateTimeVal(15);

        }

       	var updateTimeVal = function(i) {
       		if(i==0) {
       			$scope.timeVal = "Oct 2012";
       		} else if(i==1) {
       			$scope.timeVal = "Nov 2012";
       		} else if(i==2) {
       			$scope.timeVal = "Dec 2012";
       		} else if(i==3) {
       			$scope.timeVal = "Jan 2013";
       		} else if(i==4) {
       			$scope.timeVal = "Feb 2013";
       		} else if(i==5) {
       			$scope.timeVal = "Mar 2013";
       		} else if(i==6) {
       			$scope.timeVal = "Apr 2013";
       		} else if(i==7) {
       			$scope.timeVal = "May 2013";
       		} else if(i==8) {
       			$scope.timeVal = "Jun 2013";
       		} else if(i==9) {
       			$scope.timeVal = "Jul 2013";
       		} else if(i==10) {
       			$scope.timeVal = "Aug 2013";
       		} else if(i==11) {
       			$scope.timeVal = "Sep 2013";
       		} else if(i==12) {
       			$scope.timeVal = "Oct 2013";
       		}  else if(i==13) {
       			$scope.timeVal = "Nov 2013";
       		} else if(i==15) {
       			$scope.timeVal = "Full Time Span";
       		}

       		d3.select(".dataType").html($scope.type);
       		d3.select(".dataTimeSpan").html($scope.timeVal);
       	}


        $scope.timelineData = [{
                    times: [{
                        "starting_time": 1349074800000,
                        "ending_time": 1351753201000
                    }]
                }, {
                    times: [{
                        "starting_time": 1351753201000,
                        "ending_time": 1354348801000
                    }]
                }, {
                    times: [{
                        "starting_time": 1354348801000,
                        "ending_time": 1357027201000
                    }]
                }, {
                    times: [{
                        "starting_time": 1357027201000,
                        "ending_time": 1359705601000
                    }]
                }, {
                    times: [{
                        "starting_time": 1359705601000,
                        "ending_time": 1362124801000
                    }]
                }, {
                    times: [{
                        "starting_time": 1362124801000,
                        "ending_time": 1364799601000
                    }]
                }, {
                    times: [{
                        "starting_time": 1364799601000,
                        "ending_time": 1367391601000
                    }]
                }, {
                    times: [{
                        "starting_time": 1367391601000,
                        "ending_time": 1370070001000
                    }]
                }, {
                    times: [{
                        "starting_time": 1370070001000,
                        "ending_time": 1372662001000
                    }]
                }, {
                    times: [{
                        "starting_time": 1372662001000,
                        "ending_time": 1375340401000
                    }]
                }, {
                    times: [{
                        "starting_time": 1375340401000,
                        "ending_time": 1378018801000
                    }]
                }, {
                    times: [{
                        "starting_time": 1378018801000,
                        "ending_time": 1380610801000
                    }]
                }, {
                    times: [{
                        "starting_time": 1380610801000,
                        "ending_time": 1383289201000
                    }]
                }, {
                    times: [{
                        "starting_time": 1383289201000,
                        "ending_time": 1383289201000
                    }]
                }];

        var tooltip = d3.select("body").append("div")
    		.attr("class", "tooltip") 
    		.attr("id", "tooltip")              
    		.style("opacity", 0);

        var locationCallback = function(response) {
            var width = 1000,
                height = 450;

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
            ]);

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
                .on("zoom", function() {
                    g.attr("transform", "translate(" +
                        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
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
                    return "https://www.google.com/search?q=" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude
                })
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
                .attr("name", function(d) {return d.doclist.docs[0].geoLocation})
                .attr("data-legend",function(d) { return d.doclist.docs[0].geoLocation})
   				.on("mouseover", function(d) { 
   								tooltip.transition()        
                				.duration(200)      
                				.style("opacity", .9);      
            					tooltip.style("left", (1150) + "px")     
                				.style("top", (150) + "px");
                				 d.r = 10;
   								getLatLong(d.doclist.docs[0].latitude, d.doclist.docs[0].longitude, "(" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude + ") -> " 
   											+ "\n  Location:" + d.doclist.docs[0].location2 , document.getElementById("tooltip"))})
   				.on("mouseout", function(d) { 
   					d.r = 3;
   				});


            function timelineCircle() {

                var chart = d3.timeline()
                    .tickFormat({ //
                        format: d3.time.format("%b %Y"),
                        tickTime: d3.time.months,
                        tickInterval: 1,
                        tickSize: 25
                    })
                    .display("circle")
                    .click(function(d, i, datum) {
                    	updateTimeVal(i);
                        jQuery.ajax({
                            url: "http://localhost:8983/solr/collection1/select?q=range%3A" + (i + 1) + "&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+geoLocation&wt=json&group=true&group.field=location2&indent=true",
                            success: locationCallback,
                            dataType: 'jsonp',
                            jsonp: 'json.wrf'
                        });
                    }); // toggle between rectangles and circles

                //d3.select("#timeline2").append("svg").attr("width", width)
                d3.select("div.timeline.ng-scope svg").remove();
                d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum($scope.timelineData).call(chart);
            };

             var legend = svg.append("g")
    		.attr("class","legend")
    		.attr("transform","translate(10,120)")
    		.style("font-size","12px")
    		.call(d3.legend)

            timelineCircle();

        }



        var companyCallback = function(response) {


            var width = 1000,
                height = 450;

            var projection = d3.geo.mercator()
                .center([0, 3])


            d3.select("div.jumbotron.ng-scope svg").remove();
            var svg = d3.select("div.jumbotron.ng-scope").append("svg")
                .attr("width", width)
                .attr("height", height);

            var path = d3.geo.path()
                .projection(projection);

            var g = svg.append("g");


            var colors = d3.scale.category10().domain([])

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
                .on("zoom", function() {
                    g.attr("transform", "translate(" +
                        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
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
                    return "https://www.google.com/search?q=" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude
                })
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[1];
                })
                .attr("r", 3)
                .style("fill", function(d) {

                	if (d.doclist.docs[0].company.contains("Manpower"))

                           		return colors("Manpower");

                	else if (d.doclist.docs[0].company.contains("Activos"))
                		return colors("Activos");

                	else if (d.doclist.docs[0].company.contains("Adecco"))
                		return colors("Adecco");

                	else if (d.doclist.docs[0].company.contains("Sertempo"))
                		return colors("Sertempo");

					else if (d.doclist.docs[0].company.contains("Columbia"))
                		return colors("Columbia");

                	return colors("Others");
		
                })
                .attr("name", function(d) {

                	if (d.doclist.docs[0].company.contains("Manpower"))
                		return "Manpower";

                	else if (d.doclist.docs[0].company.contains("Activos"))
                		return "Activos";

                	else if (d.doclist.docs[0].company.contains("Adecco"))
                		return "Adecco";

                	else if (d.doclist.docs[0].company.contains("Sertempo"))
                		return "Sertempo";

					else if (d.doclist.docs[0].company.contains("Columbia"))
                		return "Columbia";

                	return "Others";

               })
                .attr("data-legend",function(d) { 
                  	if (d.doclist.docs[0].company.contains("Manpower"))
                		return "Manpower";

                	else if (d.doclist.docs[0].company.contains("Activos"))
                		return "Activos";

                	else if (d.doclist.docs[0].company.contains("Adecco"))
                		return "Adecco";

                	else if (d.doclist.docs[0].company.contains("Sertempo"))
                		return "Sertempo";

					else if (d.doclist.docs[0].company.contains("Columbia"))
                		return "Columbia";

                	return "Others";
				})
                .on("mouseover", function(d) { 
   								tooltip.transition()        
                				.duration(200)      
                				.style("opacity", .9);  
            					tooltip.style("left", (1150) + "px")     
                				.style("top", (150) + "px"); 
   								getLatLong(d.doclist.docs[0].latitude, d.doclist.docs[0].longitude, "(" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude + ") -> " 
   											+ "\n  Company:" + d.doclist.docs[0].company , document.getElementById("tooltip"))});


            function timelineCircle() {

                var chart = d3.timeline()
                    .tickFormat({ //
                        format: d3.time.format("%b %Y"),
                        tickTime: d3.time.months,
                        tickInterval: 1,
                        tickSize: 30
                    })
                    .display("circle")
                    .click(function(d, i, datum) {
                    	updateTimeVal(i);
                        jQuery.ajax({
                        	url: "http://localhost:8983/solr/collection1/select?q=range%3A" + (i + 1) + "&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=location2&indent=true",
                            success: companyCallback,
                            dataType: 'jsonp',
                            jsonp: 'json.wrf'
                        });
                    }); 
                d3.select("div.timeline.ng-scope svg").remove();
                d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum($scope.timelineData).call(chart);
            };

			var legend = svg.append("g")
    		.attr("class","legend")
    		.attr("transform","translate(10,120)")
    		.style("font-size","12px")
    		.call(d3.legend)

    		d3.selectAll("circle[name]").filter("[name=Others]")
                    .style("opacity", 0);

            timelineCircle();
        }

         var salaryCallback = function(response) {


            var width = 1000,
                height = 450;

            var projection = d3.geo.mercator()
                .center([0, 3])


            d3.select("div.jumbotron.ng-scope svg").remove();
            var svg = d3.select("div.jumbotron.ng-scope").append("svg")
                .attr("width", width)
                .attr("height", height);

            var path = d3.geo.path()
                .projection(projection);

            var g = svg.append("g");


            var colors = d3.scale.category10().domain([]);

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
                .on("zoom", function() {
                    g.attr("transform", "translate(" +
                        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
                    g.selectAll("circle")
                        .attr("d", path.projection(projection));
                    g.selectAll("path")
                        .attr("d", path.projection(projection));

                });

            svg.call(zoom);

            // load and display the cities

            g.selectAll("circle")
                .data(response.grouped.salary.groups)
                .enter()
                .append("a")
                .attr("xlink:href", function(d) {
                    return "https://www.google.com/search?q=" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude
                })
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[1];
                })
                .attr("r", 3)
                .style("fill", function(d) {
                	var c = d.doclist.docs[0].salary.charAt(0);
                	if (c == '1' || c == '2' )
                		return colors("< 10,000");

                	else if (c == '3' || c == '4' )
                		return colors("10,000 - 50,000");
                	
                	else if (c == '5' || c == '6' )
                		return colors("50,000 - 100,000");
                	
                	else if (c == '7' || c == '8' )
                		return colors("> 100,000");
                	
                    return colors("Undetermined");
                })
                .attr("data-legend",function(d) { 

                	var c = d.doclist.docs[0].salary.charAt(0);
                	if (c == '1' || c == '2' )
                		return "< 10,000";

                	else if (c == '3' || c == '4' )
                		return "10,000 - 50,000";
                	
                	else if (c == '5' || c == '6' )
                		return "50,000 - 100,000";
                	
                	else if (c == '7' || c == '8' )
                		return "> 100,000";
                	
                    return "Undetermined";

                })
                .attr("name", function(d) {
					var c = d.doclist.docs[0].salary.charAt(0);
                	if (c == '1' || c == '2' )
                		return colors("< 10,000");

                	else if (c == '3' || c == '4' )
                		return colors("10,000 - 50,000");
                	
                	else if (c == '5' || c == '6' )
                		return colors("50,000 - 100,000");
                	
                	else if (c == '7' || c == '8' )
                		return colors("> 100,000");
                	
                    return colors("Undetermined");
                })
                .on("mouseover", function(d) { 
   								tooltip.transition()        
                				.duration(200)      
                				.style("opacity", .9);   
            					tooltip.style("left", (1150) + "px")     
                				.style("top", (150) + "px"); 
   								getLatLong(d.doclist.docs[0].latitude, d.doclist.docs[0].longitude, "(" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude + ") -> " 
   											+ "\n  Salary:" + d.doclist.docs[0].salary , document.getElementById("tooltip"))});

            function timelineCircle() {

                var chart = d3.timeline()
                    .tickFormat({ //
                        format: d3.time.format("%b %Y"),
                        tickTime: d3.time.months,
                        tickInterval: 1,
                        tickSize: 30
                    })
                    .display("circle")
                    .click(function(d, i, datum) {
                    	updateTimeVal(i);
                        jQuery.ajax({
                        	url: "http://localhost:8983/solr/collection1/select?q=salary%3A/[0-9]{1%2C}/%2C+range%3A" + (i + 1) + "&rows=10000&fl=salary%2C+latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=salary&indent=true",               
                            success: salaryCallback,
                            dataType: 'jsonp',
                            jsonp: 'json.wrf'
                        });
                    }); 
                d3.select("div.timeline.ng-scope svg").remove();
                d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum($scope.timelineData).call(chart);
            };

            var legend = svg.append("g")
    		.attr("class","legend")
    		.attr("transform","translate(10,120)")
    		.style("font-size","12px")
    		.call(d3.legend);

            timelineCircle();
        }

        var jobTypeCallback = function(response) {


            var width = 1000,
                height = 450;

            var projection = d3.geo.mercator()
                .center([0, 3])


            d3.select("div.jumbotron.ng-scope svg").remove();
            var svg = d3.select("div.jumbotron.ng-scope").append("svg")
                .attr("width", width)
                .attr("height", height);

            var path = d3.geo.path()
                .projection(projection);

            var g = svg.append("g");


            var colors = d3.scale.category10().domain([]);

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
                .on("zoom", function() {
                    g.attr("transform", "translate(" +
                        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
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
                    return "https://www.google.com/search?q=" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude
                })
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[1];
                })
                .attr("r", 3)
                .style("fill", function(d) {
                    return colors(d.doclist.docs[0].jobtype.substring(0,15));
                })
                .attr("name", function(d) {return d.doclist.docs[0].jobtype.substring(0,15)})
                .attr("data-legend",function(d) { return d.doclist.docs[0].jobtype.substring(0,15)})
                .on("mouseover", function(d) { 
   								tooltip.transition()        
                				.duration(200)      
                				.style("opacity", .9); 
            					tooltip.style("left", (1150) + "px")     
                				.style("top", (150) + "px"); 
   								getLatLong(d.doclist.docs[0].latitude, d.doclist.docs[0].longitude, "(" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude + ") -> " 
   											+ "\n  Job Type:" + d.doclist.docs[0].jobtype , document.getElementById("tooltip"))});


            function timelineCircle() {

                var chart = d3.timeline()
                    .tickFormat({ 
                        format: d3.time.format("%b %Y"),
                        tickTime: d3.time.months,
                        tickInterval: 1,
                        tickSize: 30
                    })
                    .display("circle")
                    .click(function(d, i, datum) {
                    	updateTimeVal(i);
                        jQuery.ajax({
                        	url: "http://localhost:8983/solr/collection1/select?q=range%3A" + (i + 1) + "&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+jobtype%2C+company&wt=json&group=true&group.field=location2&indent=true",
                            success: jobTypeCallback,
                            dataType: 'jsonp',
                            jsonp: 'json.wrf'
                        });
                    }); 
                d3.select("div.timeline.ng-scope svg").remove();
                d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum($scope.timelineData).call(chart);
            };

            var legend = svg.append("g")
    		.attr("class","legend")
    		.attr("transform","translate(10,120)")
    		.style("font-size","12px")
    		.call(d3.legend);

            timelineCircle();
        }

      	var categoryCallback = function(response) {


            var width = 1000,
                height = 450;

            var projection = d3.geo.mercator()
                .center([0, 3])


            d3.select("div.jumbotron.ng-scope svg").remove();
            var svg = d3.select("div.jumbotron.ng-scope").append("svg")
                .attr("width", width)
                .attr("height", height);

            var path = d3.geo.path()
                .projection(projection);

            var g = svg.append("g");


            var colors = d3.scale.category10().domain([]);

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
                .on("zoom", function() {
                    g.attr("transform", "translate(" +
                        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
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
                    return "https://www.google.com/search?q=" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude
                })
                .append("circle")
                .attr("cx", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.doclist.docs[0].longitude, d.doclist.docs[0].latitude])[1];
                })
                .attr("r", 3)
                .style("fill", function(d) {
                    return colors(d.doclist.docs[0].category);
                })
                .attr("name", function(d) {return d.doclist.docs[0].category})
                .attr("data-legend",function(d) { return d.doclist.docs[0].category})
                .on("mouseover", function(d) { 
   								tooltip.transition()        
                				.duration(200)      
                				.style("opacity", .9); 
            					tooltip.style("left", (1150) + "px")     
                				.style("top", (150) + "px"); 
   								getLatLong(d.doclist.docs[0].latitude, d.doclist.docs[0].longitude, "(" + d.doclist.docs[0].latitude + "," + d.doclist.docs[0].longitude + ") -> " 
   											+ "\n  Category:" + d.doclist.docs[0].category , document.getElementById("tooltip"))});


            function timelineCircle() {

                var chart = d3.timeline()
                    .tickFormat({ 
                        format: d3.time.format("%b %Y"),
                        tickTime: d3.time.months,
                        tickInterval: 1,
                        tickSize: 30
                    })
                    .display("circle")
                    .click(function(d, i, datum) {
                    	updateTimeVal(i);
                        jQuery.ajax({
                        	url: "http://localhost:8983/solr/collection1/select?q=range%3A" + (i + 1) + "+AND+NOT+category%3AOthers&rows=10000&fl=latitude%2C+longitude%2C+location2%2C+category%2C+company&wt=json&group=true&group.field=location2&indent=true",
                            success: categoryCallback,
                            dataType: 'jsonp',
                            jsonp: 'json.wrf'
                        });
                    }); 
                d3.select("div.timeline.ng-scope svg").remove();
                d3.select("div.timeline.ng-scope").append("svg").attr("width", width).datum($scope.timelineData).call(chart);
            };

            var legend = svg.append("g")
    		.attr("class","legend")
    		.attr("transform","translate(10,120)")
    		.style("font-size","12px")
    		.call(d3.legend);

            timelineCircle();
        }

		var getLatLong = function(latitude, longitude, text, id) {
	        var mapOptions = {
	          center: new google.maps.LatLng(latitude, longitude),
	          zoom: 6,
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	        var map = new google.maps.Map(id,
	            mapOptions);
	     	
	        var myLatlng = new google.maps.LatLng(latitude, longitude);
	        var marker = new google.maps.Marker({
	            position: myLatlng,
	            map: map,
	            title: text
	        });

	        var tooltip = new Tooltip({map: map}, marker);
	        tooltip.bindTo("text", marker, "tooltip");
	        google.maps.event.addListener(marker, 'mouseover', function() {
	            tooltip.addTip();
	            tooltip.getPos2(marker.getPosition());
	        });
	  	
	        google.maps.event.addListener(marker, 'mouseout', function() {
	            tooltip.removeTip();
	        });
      	}       

      	updateTimeVal(15);
        $scope.operation('location');

    });