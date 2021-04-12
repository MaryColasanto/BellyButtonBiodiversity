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
            console.log(value.otu_labels[0])
            var traceDefault = {
                x: value.sample_values.slice(0,10).reverse(),
                y: yAxis.slice(0,10).reverse(),
                type: "bar",
                orientation: "h",
                text: value.otu_labels.slice(0,10).reverse(),
            };

            plotDefault = [traceDefault];
            Plotly.newPlot("bar", plotDefault)
        };

    });
});