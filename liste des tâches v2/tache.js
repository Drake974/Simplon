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
var nb_check = 0; /*variable pour changer le chiffre de id*/
$(document).ready(function () {
  

    $('.ajouter').click(function () {

        nb_check++;
        if ($('.text_input').val().length != 0 && $('input[name=urgent]').is(":checked")) {
            /* alert("ok");*/
            var x = $("ul.list-group").html();
            var y = `<li class="row list2 ml-1 mr-1 pt-1 pb-1 rounded list-unstyled align-items-center border border-dark">
               
            <div class="col-1"><i class="fas fa-exclamation-triangle text-danger d-flex  justify-content-center align-items-center"> </i>
            </div>
            <div class="col-10 text-center "><p id="tache${nb_check}" style="text-decoration : none;">` + $('.text_input').val() + `</p>
            </div>
            <div class="col-1 form-check d-flex  justify-content-center align-items-center"> 
               
                <input class="form-check-input" name="barre" type="checkbox" value="" id="${nb_check}">
            
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
            <div class="col-10 text-center "><p id="tache${nb_check}" style="text-decoration: none;">` + $('.text_input').val() + `</p>
            </div>
            <div class="col-1 form-check d-flex  justify-content-center align-items-center"> 
               
                <input class="form-check-input" name="barre" type="checkbox" value="" id="${nb_check}">
            
            </div>
       
            </li>`;
            $("ul.list-group").html(x + y);

            $('.text_input').val("");  /*effacer la valeur dans le input*/
            



        };
        
    });
});
// $(document).ready(function () {
    
    // $('input[name=barre]').click(function () {
    //     console.log(this);
    //     if ($(this).is(":checked")) {
    //         $(".text_barre").css('text-decoration','line-through');
                
             
    //     }
    //     else if ($(this).is(":not(:checked)")) {
    //         $(".text_barre").css('text-decoration','none');
    //     };

    // });
// });
$(document).ready(function () {
    $("#content1").on("click", "input",function () {
         // console.log(this.id);
        if ($(this).is(":checked")) {
               $(`#tache${this.id}`).css('text-decoration','line-through');           
                       }
             else if ($(this).is(":not(:checked)")) {
                   $(`#tache${this.id}`).css('text-decoration','none');
              };
   //     $(`#tache${this.id}`).css('text-decoration','line-through');
    });
});


//  var numberLi = $('.list-group .list2').length;
// alert(numberLi)
$(document).ready(function () {
   


// $(".listefait").on( "click", function() {

var limitePage = 3;
var numberLi = $(".list-group .list2").length;
$(".list-group .list2:gt("+ (limitePage - 1) + ")").hide;


// alert(numberLi)


});  
// });
  
