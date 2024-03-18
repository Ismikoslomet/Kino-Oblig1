function validerAntall(antallBilletter) {
    const regexp = /^[0-9.\-]{1,2}$/;
    const ok = regexp.test(antallBilletter);
    if (!ok) {
        $("#feilAntall").html("Antall må være mellom 1 og 99 (Kun tall)");
        return false;
    } else {
        $("#feilAntall").html("");
        return true;
    }
}
function validerFornavn(fornavn){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok) {
        $("#feilFornavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
}
function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if(!ok) {
        $("#feilEtternavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
}
function validerTlf(telefonnr) {
    const regexp = /^[0-9.\-]{8}$/;
    const ok = regexp.test(telefonnr);
    if (!ok) {
        $("#feilTelefonnr").html("Nummeret må bestå av åtte tall");
        return false;

    } else {
        $("#feilTelefonnr").html("");
        return true;
    }
}

function validerEpost(epost) {
    const regexp =  /^[a-zA-ZæåøÆÅØ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const ok = regexp.test(epost);
    if (!ok) {
        $("#feilEpost").html("Må være en gyldig epost");
        return false;

    } else {
        $("#feilEpost").html("");
        return true;
    }
}

let billettene = [];
function kjopBillett() {
    let inputFilm = document.getElementById("filmer").value;
    let inputAntall = document.getElementById("antallBilletter").value;
    let inputFornavn = document.getElementById("fornavn").value;
    let inputEtternavn = document.getElementById("etternavn").value;
    let inputTlf = document.getElementById("telefonnr").value;
    let inputEpost = document.getElementById("epost").value;

    const billetten = {
        Film : inputFilm,
        Antall : inputAntall,
        Fornavn : inputFornavn,
        Etternavn : inputEtternavn,
        Tlfnr : inputTlf,
        Epost : inputEpost
    }

    billettene.push(billetten);
    printUt ();

    document.getElementById("filmer").value = "";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}
function printUt () {
    let ut = "";
    for (let i = 0; i<billettene.length;i++){
        ut += "Film: "+billettene[i].Film+", Antall billetter: "+billettene[i].Antall+", Fornavn: "+billettene[i].Fornavn+", Etternavn: "+
            billettene[i].Etternavn+", Mobil: "+billettene[i].Tlfnr+", Epost: "+billettene[i].Epost;
    }
    document.getElementById("print").innerHTML=ut;
}

function slettBilletter(){
    billettene=[];
    console.log(billettene);
    printUt();
}