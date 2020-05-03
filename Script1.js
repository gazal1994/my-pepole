const renderUsers = function (users) {
    $("#results").empty()
    const source = $('#store-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ users });
    $("#results").append(newHTML);
    console.log(newHTML)

}
$.ajax({

    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
        //Matrix containing names and e-mails
        const users = data.results.map(b => ({ name: b.name.title + " " + b.name.first + " " + b.name.last, email: b.email }))
        renderUsers(users)
        
    }
});
