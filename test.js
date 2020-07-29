window.onload = function () {

    let boutton = document.querySelector('#valider');
    console.log(boutton);
    boutton.addEventListener("click",function(){

        // Default export is a4 paper, portrait, using millimeters for units
        var doc = new jsPDF();
        
        doc.text('Hello world!', 10, 10);
        doc.save('a4.pdf');
    });

}