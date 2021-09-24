<?php
    include 'konekcija.php';
    if(isset($_POST['send'])){
        $unos = $_POST['unos'];
        $upit = ("SELECT p.id as proId, p.tip as tip, k.nazivKategorije as proizvođač, p.model as model, p.ramMemorija as ram, p.procesor as procesor, p.grafika as grafika, p.ocena as ocena, p.cena as cena, s.putanja as putanja, s.alt as alt, k.nazivKategorije as nazivKat, e.dijagonala as dijagonala, e. rezolucija as rez FROM proizvodi p INNER JOIN slike s ON p.slikaId = s.id INNER JOIN kategorije k ON p.kategorijaId = k.id INNER JOIN ekrani e ON p.ekranId = e.id WHERE p.tip LIKE '%$unos%' OR k.nazivKategorije LIKE '%$unos%'");

        $rezultat = $konekcija->query($upit);
        $proizvodi = $rezultat->fetchAll();
        $ispis = '';
        foreach($proizvodi as $proizvod){
            $ispis .= "
            <div class='karta'>
            <input type='hidden' class='hidden-input' value='$proizvod->proId'/>
                <div class='karta-image'>
                    <img src='$proizvod->putanja' alt='$proizvod->alt'/>
                </div>
                <div class='karta-text'>
                    <h4 class='karta-title'>$proizvod->proizvođač $proizvod->model</h4>
                        <small>
                            <span>Tip:</span> $proizvod->tip
                        </small>
                        <small>
                            <span>Proizvođač:</span> $proizvod->proizvođač
                        </small>
                        <small>
                            <span>Model:</span> $proizvod->model
                        </small>
                          
        
                        <small>
                            <span> Dijagonala:$proizvod->dijagonala</span>
                        </small>
        
                        <small>
                            <span>Rezolucija:$proizvod->rez</span>
                        </small>
                                    
                        <small>
                            <span>RAM memorija:$proizvod->ram GB</span>
                        </small>
                                    
                        <small>
                            <span>Procesor:$proizvod->procesor</span>
                        </small>
                                    
                        <small>
                            <span>Grafika:$proizvod->grafika</span>
                        </small>
                                
                    <small class='ocena'>
                        <span>Ocena:</span>
                        <span> $proizvod->ocena <span></span> </span>
                            </small>
                        <input type='button' class='Dodaj' id='btnDodaj' data-id='$proizvod->proId' value='Dodaj u korpu'/>
                        <p class='cena'>
                    <span>$proizvod->cena din</span> 
                </p>
            </div>
        </div>
            ";
        }
        echo $ispis;
    }

?>
