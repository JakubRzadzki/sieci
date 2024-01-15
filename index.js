function braki(){
    const tabelka = document.getElementById("tabelka")
    wiersze = document.getElementById("tabelka").rows[0].cells.length
    for(i = 1; i <= wiersze; i++){
        ilosc = tabelka.rows[i].cells[2].innerText
        if (ilosc == 0){
            tabelka.rows[i].cells[2].style.background = "red"
        }else if(ilosc >0 && ilosc <= 5){
            tabelka.rows[i].cells[2].style.background = "yellow"
        }else{
            tabelka.rows[i].cells[2].style.background = "honeydew"
        }
    }
}
function aktualizuj(id){
    nowa_ilosc = prompt("Podaj nową ilość: ")
    let butt = document.getElementsByClassName("p1")
    let w1 = 0
    for (i=0; i < butt.length; i++){
        if(id == butt[i]){
            w1 = i
        }
    }
    document.getElementById("tabelka").rows[w1+1].cells[2].innerHTML = nowa_ilosc
    braki()
}
function zamow(id){
    let butt2 = document.getElementsByClassName("p2")
    let w2 = 0
    for (i=0; i < butt2.length; i++){
        if(id == butt2[i]){
            w2 = i
        }
    }
    nr = w2 + 1
    ilosc = document.getElementById("tabelka").rows[nr].cells[2].innerText
    document.getElementById("tabelka").rows[nr].cells[2].innerHTML = parseInt(ilosc) + 1
    nazwa = document.getElementById("tabelka").rows[nr].cells[0].innerText
    alert("Zamówienie nr: " + nr + " Produkt: " + nazwa)
    braki()
}