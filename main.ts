input.onButtonPressed(Button.A, function () {
    if (aktivt_tall == alfabet.length) {
        aktivt_tall = -1
    }
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 15, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    aktivt_tall += 1
    basic.showString(alfabet.charAt(aktivt_tall))
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    gjetning = "" + gjetning + alfabet.charAt(aktivt_tall)
    aktivt_tall = -1
    if (gjetning.length == svar.length) {
        if (gjetning == svar) {
            basic.showIcon(IconNames.Yes)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
            basic.clearScreen()
            basic.pause(100)
            for (let index = 0; index < 3; index++) {
                basic.showString(premie)
                basic.pause(500)
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
input.onButtonPressed(Button.B, function () {
    if (aktivt_tall <= 0) {
        aktivt_tall = alfabet.length
    }
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 15, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    aktivt_tall += -1
    basic.showString(alfabet.charAt(aktivt_tall))
})
input.onGesture(Gesture.Shake, function () {
    gjetning = ""
    aktivt_tall = -1
    basic.clearScreen()
})
function startupDisplay () {
    basic.showString("#")
    basic.showNumber(oppgavenummer)
    basic.clearScreen()
    basic.showString("#Tegn:")
    basic.showNumber(svar.length)
    if (velkomstMelding.length > 0) {
        basic.showString(velkomstMelding)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (aktivt_tall <= 0) {
        aktivt_tall = alfabet.length
    }
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 500, 500, 255, 0, 15, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    aktivt_tall += -1
    basic.showString(alfabet.charAt(aktivt_tall))
})
let aktivt_tall = 0
let gjetning = ""
let alfabet = ""
let riktigGjettingsMelding = ""
let feilGjettingsMelding = ""
let velkomstMelding = ""
let premie = ""
let svar = ""
let oppgavenummer = 0
// Denne variabelen er et heltall (integer). Dette er oppgavenummeret eller postnummeret. Det kan hjelpe deg å sortere microbitene og det kan hjelpe elevene til å finne ut rekkefølgen på oppgavene.
oppgavenummer = 1
// Denne variabelen er en tekststreng (string). Strengen kan enten inneholde bokstaver eller tall. Hvis du bruker bokstaver må brukBokstaver settes til true. Hvis du bruker tall må brukBokstaver settes til false.
svar = "KU"
// Denne variabelen er en tekststreng (string). Dette er premien eller hintet som elevene får med seg videre til neste oppgave
premie = "K"
// Denne meldingen vises til elevene før oppgaven. Kan f.eks. inneholde hint.
velkomstMelding = ""
// Denne teksten vises til elevene dersom de gjetter feil. Kan f.eks. inneholde hint.
feilGjettingsMelding = ""
// Denne teksten vises til elevene hvis de gjetter riktig. Kan f.eks. inneholde instruksjoner om hvor de finner neste oppgave.
riktigGjettingsMelding = ""
startupDisplay()
if ("abcdefghijklmnopqrstuvwxyz".includes(svar.charAt(0))) {
    alfabet = "abcdefghijklmnopqrstuvwxyz"
} else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(svar.charAt(0))) {
    alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} else {
    alfabet = "0123456789,/"
}
gjetning = ""
aktivt_tall = -1
