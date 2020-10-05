/*$(document).ready(function () {

    $('.ajouter').click(function () {
        if ($(".text_imput").on("keyup") {

            alert("ok");
        };
    });


});
*/
/*$(document).ready(function () {
    $('input[name=urgent]').click(function () {
        if ($(this).is(":checked")) {
            alert("Checkbox est coché.");
        }
        else if ($(this).is(":not(:checked)")) {
            alert("Checkbox n'est pas coché.");
        }
    });
});*/

$(document).ready(function () {
  



    $('.ajouter').click(function () {


        if ($('.text_input').val().length != 0 && $('input[name=urgent]').is(":checked")) {
            /* alert("ok");*/
            var x = $("ul.list-group").html();
            var y = `<li class="row list2 ml-1 mr-1 pt-1 pb-1 rounded list-unstyled align-items-center border border-dark">
               
            <div class="col-1"><i class="fas fa-exclamation-triangle text-danger d-flex  justify-content-center align-items-center"> </i>
            </div>
            <div class="col-10 text-center "><p class="text_barre">` + $('.text_input').val() + `</p>
            </div>
            <div class="col-1 form-check d-flex  justify-content-center align-items-center"> 
               
                <input class="form-check-input" name="barre" type="checkbox" value="" id="defaultCheck2">
            
            </div>
       
            </li>`;

            $("ul.list-group").html(x + y);

            $('.text_input').val("");  /*effacer la valeur dans le input*/
          


        }
        else if ($('.text_input').val().length != 0) {

            var x = $("ul.list-group").html();
            var y = `<li class="row list2 ml-1 mr-1 pt-1 pb-1 rounded list-unstyled align-items-center border border-dark">
               
            <div class="col-1">
            </div>
            <div class="col-10 text-center "><p class="text_barre">` + $('.text_input').val() + `</p>
            </div>
            <div class="col-1 form-check d-flex  justify-content-center align-items-center"> 
               
                <input class="form-check-input" name="barre" type="checkbox" value="" id="defaultCheck2">
            
            </div>
       
            </li>`;
            $("ul.list-group").html(x + y);

            $('.text_input').val("");  /*effacer la valeur dans le input*/
            



        };
        
    });
});
/*$(document).ready(function () {*/
    $('input[name=barre]').click(function () {
        if ($(this).is(":checked")) {
            $(".text_barre").css('text-decoration','line-through');
                
             
        }
        else if ($(this).is(":not(:checked)")) {
            $(".text_barre").css('text-decoration','none');
        };

    });
/*});*/
/*$("#listid").on("click","input",function () {
    console.log(this)
})*/
