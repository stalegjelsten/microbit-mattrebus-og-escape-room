input.onButtonPressed(Button.A, function () {
    if (aktivt_tall == 9 && !(brukBokstaver) || aktivt_tall == 29 && brukBokstaver) {
        aktivt_tall = -1
    }
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 15, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    aktivt_tall += 1
    if (brukBokstaver) {
        basic.showString(alfabet.charAt(aktivt_tall))
    } else {
        basic.showNumber(aktivt_tall)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    if (brukBokstaver) {
        gjetning = "" + gjetning + alfabet.charAt(aktivt_tall)
    } else {
        gjetning = "" + gjetning + convertToText(aktivt_tall)
    }
    aktivt_tall = -1
    if (gjetning.length == svar.length) {
        if (gjetning == svar) {
            basic.showIcon(IconNames.Yes)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            basic.clearScreen()
            basic.pause(100)
            for (let index = 0; index < 3; index++) {
                basic.showString(premie)
            }
            if (riktigGjettingsMelding.length > 0) {
                basic.showString(riktigGjettingsMelding)
            }
        } else {
            basic.showIcon(IconNames.No)
            gjetning = ""
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
            if (feilGjettingsMelding.length > 0) {
                basic.showString(feilGjettingsMelding)
            }
        }
    }
    basic.clearScreen()
})
function startupDisplay () {
    basic.showString("#")
    basic.showNumber(oppgavenummer)
    basic.clearScreen()
    if (brukBokstaver) {
        basic.showString("Antall bokstaver:")
        basic.showNumber(svar.length)
    } else {
        basic.showString("Antall siffer:")
        basic.showNumber(svar.length)
    }
    if (velkomstMelding.length > 0) {
        basic.showString(velkomstMelding)
    }
}
let alfabet = ""
let aktivt_tall = 0
let gjetning = ""
let brukBokstaver = false
let riktigGjettingsMelding = ""
let feilGjettingsMelding = ""
let velkomstMelding = ""
let premie = ""
let svar = ""
let oppgavenummer = 0
// Denne variabelen er et heltall (integer). Dette er oppgavenummeret eller postnummeret. Det kan hjelpe deg å sortere microbitene og det kan hjelpe elevene til å finne ut rekkefølgen på oppgavene.
oppgavenummer = 1
// Denne variabelen er en tekststreng (string). Strengen kan enten inneholde bokstaver eller tall. Hvis du bruker bokstaver må brukBokstaver settes til true. Hvis du bruker tall må brukBokstaver settes til false.
svar = "BC"
// Denne variabelen er en tekststreng (string). Dette er premien eller hintet som elevene får med seg videre til neste oppgave
premie = "K"
// Denne meldingen vises til elevene før oppgaven. Kan f.eks. inneholde hint.
velkomstMelding = ""
// Denne teksten vises til elevene dersom de gjetter feil. Kan f.eks. inneholde hint.
feilGjettingsMelding = ""
// Denne teksten vises til elevene hvis de gjetter riktig. Kan f.eks. inneholde instruksjoner om hvor de finner neste oppgave.
riktigGjettingsMelding = ""
// Denne variabelen er en boolean (enten true eller false). Hvis du setter den til true så må svaret kun inneholde bokstaver. Dersom den settes til false må svaret kun inneholde tall.
brukBokstaver = true
startupDisplay()
gjetning = ""
aktivt_tall = -1
alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ"
