$(document).ready(function() {
   
    

    document.getElementById("pretraga").addEventListener("input", Pronadji);

    function Pronadji(){
        var unosKorisnika = document.getElementById("pretraga").value;
        $.ajax({
            url:"php/pretraga.php",
            method:"POST",
            data:{
                unos:unosKorisnika,
                send:true
            },
            success:function(data){
                document.getElementById("proizvodi").innerHTML = data;
            },
            error:function(xhr, error, status){
                var poruka = "Doslo je do greske";
                switch(xhr.status){
                    case 402: 
                    poruka = "Nije u redu upit."; 
                    break
                    case 404:
                    poruka = "Stranica nije pronadjena";
                    break;
                    case 422:
                    poruka = "Podaci nisu validni";
                    console.log(xhr.responseText);
                    break;
                    case 500:
                    poruka = "Greska";
                    break;
                }
                console.log(poruka);
            }
        });
    }


Korpa();
function Korpa(){
    $(".Dodaj").click(DodajUKorpu);
}

function proizvodiUKorpi(){
    return JSON.parse(localStorage.getItem("proizvodi"));
}

function DodajUKorpu(){
    let id = $(this).data("id");
    var proizvodi = proizvodiUKorpi();

    if(proizvodi){
        if(ProizvodJeVecUKorpi())
        azurirajKolicinu();
        else{
            DodajULocalStorage();
        }
    }
    else{
        dodajPrviProizvodULocalStorage();
    }
$("#prozor").fadeIn();
$("#prozor").delay(250).fadeOut();
    


function azurirajKolicinu(){
    let proizvodi = proizvodiUKorpi();
    for(let i in proizvodi){
        if(proizvodi[i].id==id){
            proizvodi[i].quantity++;
            break;
        }
        
    }
    localStorage.setItem("proizvodi",JSON.stringify(proizvodi))
}

function ProizvodJeVecUKorpi(){
    return proizvodi.filter(p => p.id == id).length;
}

function DodajULocalStorage(){
    let proizvodi = proizvodiUKorpi();

    proizvodi.push({
        id : id,
        quantity :  1
    });
    localStorage.setItem("proizvodi", JSON.stringify(proizvodi));
}

function dodajPrviProizvodULocalStorage(){
    let proizvodi = [];
    proizvodi[0] = {
        id : id,
        quantity : 1
    }
    localStorage.setItem("proizvodi",JSON.stringify(proizvodi));
}
}

function IsprazniKorpu(){
    localStorage.removeItem("proizvodi");
}

$('.linkPaginacija').click(posaljiBrStrane); 
function posaljiBrStrane(event){ 
  console.log("uslo u paginaciju"); 
  event.preventDefault(); 
  var strana = $(this).data("page"); 
  console.log(strana);
  $('.linkPaginacija').removeClass('aktivan'); 
  $(this).addClass("aktivan"); 
  $.ajax({ 
    url: "php/ispisProizvoda.php", 
    method: "post", 
    data: { 
      strana: strana,
      send:true
    }, 
    success: function(pro){ 
      $('#proizvodi').html(pro);
    }, 
    error:function(xhr, error, status){
        var poruka = "Doslo je do greske";
        switch(xhr.status){
            case 402: 
            poruka = "Nije u redu upit."; 
            break
            case 404:
            poruka = "Stranica nije pronadjena";
            break;
            case 422:
            poruka = "Podaci nisu validni";
            console.log(xhr.responseText);
            break;
            case 500:
            poruka = "Greska";
            break;
        }
        console.log(poruka);
    }
  }); 
}

document.getElementById("Cena").addEventListener("change", pronadji);
function pronadji(){
    var selektovani = document.getElementById("Cena").options[document.getElementById("Cena").selectedIndex].value;

    $.ajax({
        url:'php/sortiraj.php',
        method:'post',
        data:{
            selektovani:selektovani,
            send:true
        },
        success:function(data){
            $("#proizvodi").html(data);
        },
        error:function(xhr, error, status){
            var poruka = "Doslo je do greske";
            switch(xhr.status){
                case 402: 
                poruka = "Nije u redu upit."; 
                break
                case 404:
                poruka = "Stranica nije pronadjena";
                break;
                case 422:
                poruka = "Podaci nisu validni";
                console.log(xhr.responseText);
                break;
                case 500:
                poruka = "Greska";
                break;
            }
            console.log(poruka);
        }
    })
}

document.getElementById("Tip").addEventListener("change", filtriraj);
function filtriraj(){
    var selektovani = document.getElementById("Tip").options[document.getElementById("Tip").selectedIndex].value;
    console.log(selektovani);
    $.ajax({
        url:'php/filtriraj.php',
        method:'post',
        data:{
            selektovani:selektovani,
            send:true
        },
        success:function(data){
            $("#proizvodi").html(data);
        },
        error:function(xhr, error, status){
            var poruka = "Doslo je do greske";
            switch(xhr.status){
                case 402: 
                poruka = "Nije u redu upit."; 
                break
                case 404:
                poruka = "Stranica nije pronadjena";
                break;
                case 422:
                poruka = "Podaci nisu validni";
                console.log(xhr.responseText);
                break;
                case 500:
                poruka = "Greska";
                break;
            }
            console.log(poruka);
        }
    })
}

});
