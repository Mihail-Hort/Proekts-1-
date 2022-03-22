function risinašana() {
        sk1 = Number(document.forms["Mforms"]["pirmais"].value);
        sk2 = Number(document.forms["Mforms"]["otrais"].value);
        sk3 = Number(document.forms["Mforms"]["trešais"].value);
        document.forms["Mforms"]["Atbilde"].value = (sk2 * 4200 * ( 100 - sk3))/sk1 ;

    }