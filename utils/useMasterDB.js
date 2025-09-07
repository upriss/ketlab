function format_output (reversd, kindOfOutput, inArray) {
    let lines = [];
    let linestring = "{";
    inArray.forEach(function (bindb) {
        if (reversd == "yes") {
            lines.push(bindb[1] +"|"+ bindb[0]);
            linestring += "["+bindb[1] +","+ bindb[0] +"],";
        } else {
            lines.push(bindb[0] +"|"+ bindb[1]);
            linestring += "[" +bindb[0] +","+ bindb[1] +"],";
        }
    });
    linestring = linestring.slice(0, -1);
    linestring += "}";
    if (kindOfOutput == "set_as_string") {
        return linestring
    } else if (kindOfOutput == "array_wth_pipe_delimit") {
        return lines
    }
}

function readRIT(db) {
//    var results = db.exec("select * from categnam where categnum = 3");
//    console.log(results[0].columns);
//    console.log(results[0].values[0]);
    if (s2g2 == "s2g1") {
    var querystring = "SELECT a.entry, a.cps from masterR a, masterR b WHERE a.cps = b.cps ";
        querystring += "and b.entry = '" + word + "'";
    }
    results = db.exec(querystring);
    if (results == "") {
        console.log("empty result set")
    } else {
      output = format_output(revers,"set_as_string",results[0].values)
      output = output.replace(/ /g, "_");
    document.getElementById("resultframe").src = uri+output
//console.log(output)
    }
}
