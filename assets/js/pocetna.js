$(document).ready(function() {


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
    

});