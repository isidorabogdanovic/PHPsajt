/*for(var element1=$("#najpopularniji .karte"),element2=$("#budzetKupovina .karte"),output="",output2="",
i=0;i<objekat.length;i++)if(objekat[i].Ocena>=9){
    output+='<div class="karta">',output+='<input type="hidden" class="hidden-input" value="'+i+'" />',
    output+='<div class="karta-image">"<img src="'+objekat[i].slika+'" alt="'+objekat[i].Proizvodjac+" "+
    objekat[i].Model+'"/></div>',
    output+='<div class="karta-text">',
    output+="<h4>"+objekat[i].Proizvodjac+" "+objekat[i].Model+"</h4>";
    for(var j in objekat[i])switch(j){
        case"Cena":output+='<p class="cena"><span>'+objekat[i].Cena.toFixed(2)+"</span> RSD</p>";
        break;
        case j.includes("_"):output+="<small><span>"+j.replace("_"," ")+"</span> : "+objekat[i][j]+"</small>";
        break;
        case"slika":output+="";
        break;
        case"Ocena":output+='<small class="ocena"><span>'+j+"</span> : <span>"+objekat[i][j]+"<span></small>";
        break;
        default:output+="<small><span>"+j+"</span> : "+objekat[i][j]+"</small>"}output+="</div>",output+="</div>"
    }
    else if(objekat[i].Ocena>=3&&objekat[i].Ocena<=6){output2+='<div class="karta">',
    output2+='<input type="hidden" class="hidden-input" value="'+i+'" />',
    output2+='<div class="karta-image">"<img src="'+objekat[i].slika+'" alt="'+objekat[i].Proizvodjac+" "+
    objekat[i].Model+'"/></div>',
    output2+='<div class="karta-text">',
    output2+="<h4>"+objekat[i].Proizvodjac+" "+objekat[i].Model+"</h4>";
    for(var j in objekat[i])switch(j){
        case"Cena":output2+='<p class="cena"><span>'+objekat[i].Cena.toFixed(2)+"</span> RSD</p>";break;case j.includes("_"):output2+="<small><span>"+j.replace("_"," ")+"</span> : "+objekat[i][j]+"</small>";break;case"slika":output2+="";break;case"Ocena":output2+='<small class="ocena"><span>'+j+"</span> : <span>"+objekat[i][j]+"<span></small>";break;default:output2+="<small><span>"+j+"</span> : "+objekat[i][j]+"</small>"}output2+="</div>",output2+="</div>"}element1.html(output),element2.html(output2);
        */