
$("button").click(function(event) {
    event.preventDefault();
    
    var fields = {
        "id": parseInt($("input[name='id']").val()),
        "title": $("input[name='title']").val(),
        "description": $("textarea").val(),
        "created_at": new Date().toLocaleString(),
        "is_contact_available":true,
        "is_active":true,
        "hirer":{
            "id": 202020,
            "name":"Victor Municelli Dario",
            "account_type":"pf",
            "cnpj":null,
            "company_contact_name":null,
            "phone":"(21) 99870-0327",
            "email":"victor.munidario@gmail.com",
            "mobile_phone":"(21) 93234-8378",
            "is_plan_active":true
        },
        "location":{
            "neighborhood": $("input[name='neighborhood']").val(),
            "address": $("input[name='address']").val(),
            "address_type": $("input[name='address_type']").val(),
            "latitude":-22.9851707,
            "longitude":-43.2071601,
            "city_id":"6861",
            "city": $("input[name='city']").val(),
            "zipcode":"22420043",
            "state": $("input[name='state']").val()
        },
        "frequency": $("input[name='frequency']").val(),
        "is_automatic":false,
        "score":3,
        "category":{
            "id":1,
            "name": $("input[name='category_name']").val()
        },
        "salary_requirements": parseInt($("input[name='salary']").val()),
        "characteristics":[

        ],
        "starts":"esse_mes",
        "amount_candidates":19,
        "amount_visualizations":58,
        "feedback":"",
        "salary_research":"",
        "relevancy":""
    };

    console.log(fields);

    $.ajax({
        url: "http://ec2-35-164-223-211.us-west-2.compute.amazonaws.com/opportunities", 
        data: fields,
        method: "POST",
        dataType: 'json',
        crossDomain: true,
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },

        success: function(data) {
            alert("Done");
        },
        error: function (rs) {
            console.log(rs);
            alert("Error");
        }
    });
});