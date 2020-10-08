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
var nb_page = 0;
var compteur = 0;
var limitePage = 3;
var page_actuelle = 1;
var tableau_liste = [];
//$(document).ready(function () {


    $('.ajouter').click(function () {
        
        if(compteur === 0 && nb_page < 1){
            nb_page ++;
            
            $('#pagination').append(`<li class="page-item" id="${nb_page}"><a class="page-link" href="#">${nb_page}</a></li>`)
        }
        nb_check++;
        compteur++;
        console.log(compteur);
        if(compteur === limitePage){
            nb_page ++;
            compteur = 0;
            $('#pagination').append(`<li class="page-item" id="${nb_page}"><a class="page-link" href="#">${nb_page}</a></li>`)
        }

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
            tableau_liste.push({id: nb_check, tache: $('.text_input').val(), urgent: true});
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
            tableau_liste.push({id: nb_check, tache: $('.text_input').val(), urgent: false});
            $('.text_input').val("");  /*effacer la valeur dans le input*/
            



        };
        
    });
//});
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
//$(document).ready(function () {
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
//});


//  var numberLi = $('.list-group .list2').length;
// // alert(numberLi)
// $(document).ready(function () {
   


// $(".ajouter").on( "click", function() {

// var limitePage = 3;
// var numberLi = $(".list-group .list2").length;
// console.log(numberLi);
// for (let i = 0; i < $(".list-group .list2").length; i++) {
//     const element = $(".list-group .list2")[i];
//     console.log(element);
//     if(i === limitePage){
//         $(`#${i}`).hide();
//     }
    
// }
// console.log("ICI", $(".list-group .list2:gt("+ (limitePage - 1) + ")"));
// $(".list-group .list2:gt("+ (limitePage - 1) + ")").hide();


// alert(numberLi)
//$(document).ready(function () {



    $(".ajouter").on( "click", function() {
    console.log(tableau_liste);
    tableau_liste.forEach(element => {
    console.log(tableau_liste);        
    });

    for (let i = 0; i < tableau_liste.length; i++) {
        const element = tableau_liste[i];
       
        if (i >= 3 && i <=5){
            console.log(tableau_liste[i]);
        
        }
    }
    


    var numberLi = $(".list-group .list2").length;
    $(".list-group .list2:gt("+ (limitePage) + ")").hide();
    // $(".list-group .list2:lt("+ (limitePage) + ")").hide();
    // $(".list-group .list2:gt("+ (limitePage + 2) + ")").show();
    // $(".list-group .list2:gt("+ (limitePage + 2) + ")").hide();
});  
//});

// $(document).ready(function () {

//         $(".list-group .list2:lt("+ (limitePage) + ")").hide();
//         $(".list-group .list2:gt("+ (limitePage + Number(this.id)) + ")").show();
//         $(".list-group .list2:gt("+ (limitePage + Number(this.id)) + ")").hide();

// })


