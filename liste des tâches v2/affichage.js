
tableau_liste.forEach(element => {
    console.log(tableau_liste);        
    });






$('#content1').append(`<li class="row list2 ml-1 mr-1 pt-1 pb-1 rounded list-unstyled align-items-center border border-dark">
               
    <div class="col-1"><i class="fas fa-exclamation-triangle text-danger d-flex  justify-content-center align-items-center"> </i>
    </div>
    <div class="col-10 text-center "><p id="tache${nb_check}" style="text-decoration : none;">` + $('.text_input').val() + `</p>
     </div>
    <div class="col-1 form-check d-flex  justify-content-center align-items-center"> 
               
        <input class="form-check-input" name="barre" type="checkbox" value="" id="${nb_check}">
            
    </div>
       
 </li>`);