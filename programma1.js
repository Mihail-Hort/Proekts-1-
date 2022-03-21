function risinašana() {
        sk1 = Number(document.forms["kalk"]["pirmais"].value);
        sk2 = Number(document.forms["kalk"]["otrais"].value);
        sk3 = Number(document.forms["kalk"]["trešais"].value);
        document.forms["kalk"]["Atbilde"].value = (sk2 * 4200 * ( 100 - sk))/sk1 ;
    }