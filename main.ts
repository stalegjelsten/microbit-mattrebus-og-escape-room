input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    gjetning = ""
    aktivt_tall = -1
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (aktivt_tall == alfabet.length) {
        aktivt_tall = -1
    }
    aktivt_tall += 1
    basic.showString(alfabet.charAt(aktivt_tall),5)
})
function checkAnswer () {
    if (gjetning == svar) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
        basic.pause(100)
        for (let index = 0; index < 3; index++) {
            basic.showString("" + (premie))
            basic.pause(500)
        }
        if (riktigGjettingsMelding.length > 0) {
            basic.showString("" + (riktigGjettingsMelding))
        }
    } else {
        basic.showIcon(IconNames.No)
        gjetning = ""
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        if (feilGjettingsMelding.length > 0) {
            basic.showString("" + (feilGjettingsMelding))
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    gjetning = "" + gjetning + alfabet.charAt(aktivt_tall)
    aktivt_tall = -1
    if (gjetning.length == svar.length) {
        checkAnswer()
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (aktivt_tall <= 0) {
        aktivt_tall = alfabet.length
    }
    aktivt_tall += -1
    basic.showString(alfabet.charAt(aktivt_tall),5)
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    gjetning = "" + gjetning + alfabet.charAt(aktivt_tall)
    aktivt_tall = -1
    if (gjetning.length == svar.length) {
        checkAnswer()
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
function startupDisplay () {
    basic.showString("#")
    basic.showNumber(oppgavenummer)
    basic.clearScreen()
    basic.showString("#Tegn:")
    basic.showNumber(svar.length)
    if (velkomstMelding.length > 0) {
        basic.showString("" + (velkomstMelding))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
/**
 * HVIS DU BLANDER STORE OG SM?? BOKSTAVER ELLER TALL I SVARET VIL IKKE PROGRAMMET FUNGERE!
 */
let aktivt_tall = 0
let gjetning = ""
let alfabet = ""
let riktigGjettingsMelding = ""
let feilGjettingsMelding = ""
let velkomstMelding = ""
let premie = ""
let svar = ""
let oppgavenummer = 0
// Denne variabelen er et heltall (integer). Dette er oppgavenummeret eller postnummeret. Det kan hjelpe deg ?? sortere microbitene og det kan hjelpe elevene til ?? finne ut rekkef??lgen p?? oppgavene.
oppgavenummer = 1
// Denne variabelen er en tekststreng (string). Strengen kan enten inneholde 3 ulike typer tegn:
// 1. STORE BOKSTAVER (uten ??????)
// 2. sm?? bokstaver (uten ??????)
// 3. tallene 0 til 9, samt kommategn og br??kstrek (0123456789,/)
svar = "1/3"
// Denne variabelen er en tekststreng (string). Dette er premien eller hintet som elevene f??r med seg videre til neste oppgave
premie = "K"
// Denne meldingen vises til elevene f??r oppgaven. Kan f.eks. inneholde hint.
velkomstMelding = ""
// Denne teksten vises til elevene dersom de gjetter feil. Kan f.eks. inneholde hint.
feilGjettingsMelding = ""
// Denne teksten vises til elevene hvis de gjetter riktig. Kan f.eks. inneholde instruksjoner om hvor de finner neste oppgave.
riktigGjettingsMelding = ""
startupDisplay()
// Denne if-setningen sjekker om f??rste tegn i svaret er en liten bokstav, en stor bokstav eller ingen av delene.
if ("abcdefghijklmnopqrstuvwxyz".includes(svar.charAt(0))) {
    alfabet = "abcdefghijklmnopqrstuvwxyz"
} else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(svar.charAt(0))) {
    alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} else {
    alfabet = "0123456789,/"
}
gjetning = ""
aktivt_tall = -1
