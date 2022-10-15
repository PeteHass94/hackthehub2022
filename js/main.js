
$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://petehass94.github.io/hackthehub2022/js/complaintsPriority.json", 
            function (data) {
        var complaints = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {
            console.log(key)
            console.log('value:');
            console.log(value);
            console.log(Object.values(value));

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            complaints += '<tr>';

            complaints += '<td>' + 
                Object.values(value) + '</td>';

            complaints += '<td>' + 
                value + '</td>';

            // complaints += '<td>' + 
            //     value.Articles + '</td>';

            complaints += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(complaints);
    });
});




