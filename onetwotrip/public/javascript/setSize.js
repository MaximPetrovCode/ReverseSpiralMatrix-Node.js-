$('button').on('click', function () {

    var textDescription = $('input').val();
    //console.log(textDescription);
    var data = { "text": textDescription };

    $.ajax({
        url: '/setSize',
        type: 'POST',
        dstaType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        success: function (data) {
            //console.log('upload successful!\n' + data);
        }
    });

    location.reload();
});
