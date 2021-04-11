d3.json("../../data/samples.json").then((data) => {

    var dropDown = d3.select("#selDataset");
    data.names.forEach(function(value) {
        var option = dropDown.append("option");
        option.attr("value", value);
        option.text(value);
    });

    console.log(data.samples)
});