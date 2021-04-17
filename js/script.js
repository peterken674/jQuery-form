$(document).ready(function(){
    // All our JS will go inside here.
    $('.alert').hide();

    $('.birthday-form').submit(function(event){
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // When submit event is triggered.
        let userName = $('#userName').val();
        let bDay = $('#dateOfBirth').val();
        let dateOfBirth = new Date(bDay);
        let bDayofWeek = dateOfBirth.getDay();
        let day = daysOfWeek[bDayofWeek];
        let gender = $('input.gender[name = "gender"]:checked').val();
        let wish = $('#wish').val();
        let gifts = [];
        $('input.gifts[name = "gifts"]:checked').each(function(){
            gifts.push(this.value);
        });

        // Output the results
        $('#user').html(userName);
        $('#userBDay').html(day);
        $('#userGender').html(gender);
        $('#userWish').html(wish);
        $('#userGifts').html(gifts.join(", "));


        $('.alert').show();
        event.preventDefault();
    });
});