var caisseId = "GMED"

function addZero(i) {
    if (i < 10) i = "0" + i
    return i
}

/**
 * Renvoi true si  l'agence est ouverte actuellement
 * @param {string} h représente l'horaire d'ouverture du jour format => 'HHhMM-HHhMM'
 * @return {boolean}
 */
function isOpened(h) {
    if( !h ) return undefined
    var actualTime = new Date()
    var actualHour = actualTime.getHours()
    var actualMinute = actualTime.getMinutes()

    var actualStringTime = parseInt( actualHour.toString() + addZero(actualMinute.toString()) )
    
    var horaire = h.split('-')
    for( var i = 0; i < horaire.length; i++ ) {
        horaire[i] = horaire[i].replace('h', '')
        horaire[i] = parseInt( horaire[i] )
    }
    if( actualStringTime >= horaire[0] && actualStringTime <= horaire[1] ) {
        return true
    }
    return false
}

function isWeekDay() {
    var actualTime = new Date()
    var day = actualTime.getDay()
    if( day == 6 || day == 7 ) {
        return false
    }
    return true
}
function isSunday() {
    return new Date().getDay() == 7
}
/**
 * Horaire des caisses
 * Respecter la syntaxe
 */
var caissesHoraires = {
    "GMED": {
        week: "8h00-18h00",
        weekend: "9h00-12h30"
    },
    "LBR": {
        week: "8h30-18h30",
        weekend: "8h30-16h30"
    },
    "GCA": {
        week: "8h30-18h00"
    },
    "GGE": {
        week: "8h45-18h00",
        weekend: "9h-11h30"
    },
    "PVL": {
        week: "9h00-18h30",
        weekend: "8h30-12h30"
    },
    "GNE": {
        week: "8h00-19h00",
        weekend: "9h00-16h00"
    },
    "GCM": {
        week: "9h00-18h15",
        weekend: "9h00-12h15"
    },
    "GOC": {
        week: "8h30-19h00",
        weekend: "8h30-12h30"
    },
    "GRAA": {
        week: "8h30-18h00",
        weekend: "9h00-12h00"
    },
    "GOI": {
        week: "8h00-17h00"
    },
    "GAG": {
        week: "7h00-16h30"
    }
}

// Logic

var horaire = caissesHoraires[caisseId]


console.table(caissesHoraires)