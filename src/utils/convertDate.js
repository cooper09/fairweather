
export {convertDate};

function convertDate(date) {
    console.log("convertDate: ", date );
    date = date.split("");
    console.log("date: ", date )
    var d = new Date(date);
    return date;
}

