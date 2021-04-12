d3.json("../../data/samples.json").then((data) => {

    var dropDown = d3.select("#selDataset");
    data.names.forEach(function(value) {
        var option = dropDown.append("option");
        option.attr("value", value);
        option.text(value);
    });

    data.samples.forEach(function(value) {
        if (value.id === "940") {
            var yAxis = value.otu_ids.map(y => "OTU ID:" + y);
            var traceBarDefault = {
                x: value.sample_values.slice(0,10).reverse(),
                y: yAxis.slice(0,10).reverse(),
                type: "bar",
                orientation: "h",
                text: value.otu_labels.slice(0,10).reverse(),
            };

            var layout = {
                title: "Frequency of Top 10 Microbes",
                };

            plotDefault = [traceBarDefault];
            Plotly.newPlot("bar", plotDefault, layout)

            var traceBubbleDefault = {
                x: value.otu_ids,
                y: value.sample_values,
                mode: 'markers',
                marker: {
                    size: value.sample_values.map(d => (d/2)),
                    color: value.otu_ids,
                },
                text: value.otu_labels
            };

            layout = {
                title: "title of this plot"

            };

            plotBubbleDefault = [traceBubbleDefault];
            Plotly.newPlot("bubble", plotBubbleDefault, layout)
        };


    });

    // var demoInfo = d3.select("panel-body");
    // data.metadata.forEach(function(value) {
    //     var number = value.id.toString()
    //     if (number === "940") {
    //         var 
    //     }
    // })
});

