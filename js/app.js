window.onload = function () {
    
    // je crée mon container 
    let container = document.createElement("div");
    container.setAttribute("class","container");
    document.body.appendChild(container);

    // je crée ma row
    let row = document.createElement("div");
    row.setAttribute("class","row");
    container.appendChild(row);
    
    // je crée ma colone 
    let col = document.createElement("div");
    col.setAttribute("class","col");
    row.appendChild(col);
    
    
    //je crée ma row pour mon titre 
    let rowTitre = document.createElement("div");
    rowTitre.setAttribute("class","row");
    container.appendChild(rowTitre);
    // je crée ma col pour mon titre
    let colTitre = document.createElement("div");
    colTitre.setAttribute("class","col");
    rowTitre.appendChild(colTitre);
    
    
    // je crée mon h1 titre 
    let titre = document.createElement("h1");
    titre.innerHTML = "Acceuil";
    colTitre.appendChild(titre);
    
    
    // je crée mon boutton
    let boutton = document.createElement("button");
    boutton.setAttribute("id","valider");
    boutton.setAttribute("type","button");
    boutton.setAttribute("class","btn btn-danger");
    boutton.innerHTML="Valider";
    col.appendChild(boutton);


    boutton.addEventListener("click",function(){
        // Default export is a4 paper, portrait, using millimeters for units
        var doc = new jsPDF();
        doc.text(`hello`, 10, 10);
        doc.save('new.pdf');
    });
    /* 
    */    
   
};