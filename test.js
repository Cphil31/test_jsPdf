window.onload = function () {

    let boutton = document.querySelector('#valider');
    console.log(boutton);

    // j'initialise la variable page 
    let page = 1; 

    //j'appelles ma fonction 
    numerotation();

    console.log(page);


    //je cree ma fonction numerotation
    function numerotation () {
        page += 30;
    }
    
    let resultat = `${page} pages`;
    console.log(resultat);

    // j'ajoutes au html
    let pnum = document.querySelector('.num');
    console.log(pnum);
    pnum.innerHTML = resultat ;

    boutton.addEventListener("click",function(){

        // Default export is a4 paper, portrait, using millimeters for units
        var doc = new jsPDF();
        
        doc.text(`${resultat}`, 10, 10);
        doc.save('new.pdf');
    });

}
