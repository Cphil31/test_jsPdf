window.onload = function () {
    
    function structure (){
        // je crée mon container 
        let container = document.createElement("div");
        container.setAttribute("class","container");
        document.body.appendChild(container);
  

        //je crée ma row pour mon titre 
        let rowTitre = document.createElement("div");
        rowTitre.setAttribute("class","row rowTitre");
        container.appendChild(rowTitre);
    
        // je crée ma col pour mon titre
        let colTitre = document.createElement("div");
        colTitre.setAttribute("class","col");
        rowTitre.appendChild(colTitre);
        
        
        // je crée mon h1 titre 
        let titre = document.createElement("h1");
        titre.innerHTML = "Acceuil";
        colTitre.appendChild(titre);

        // je crée ma row
        let row = document.createElement("div");
        row.setAttribute("class","row");
        container.appendChild(row);
        
        // je crée ma colone 
        let col = document.createElement("div");
        col.setAttribute("class","col content");
        row.appendChild(col);
    }
    
    function createButton (){

        let content = document.querySelector(".content");
        
        // je crée mon boutton
        let boutton = document.createElement("button");
        boutton.setAttribute("id","valider");
        boutton.setAttribute("type","button");
        boutton.setAttribute("class","btn btn-danger");
        boutton.innerHTML="Valider";
        content.appendChild(boutton);  
    
    }

    structure();  
    createButton();
    let download = document.querySelector("#valider");
    let titre = "Baby shark ";
    let sousTitre = "Dessin animé ";
    let ml = 60 ;
    let mt = 0 ;
    download.addEventListener("click",function(){
        // Default export is a4 paper, portrait, using millimeters for units
        var doc = new jsPDF();
        doc.text(`${titre}`, 60, 0);
        doc.text(`${sousTitre}`,60,20)

        doc.save('new.pdf');
    });
    
};
