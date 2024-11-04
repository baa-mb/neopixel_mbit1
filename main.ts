
function neop_schreibe_zch(zch_str: string = "A", color: number) {
    let zeichen_matrix2: Array<number> = []

    let mx2 = arr_tech_matrix[0];
    let my2 = zch_str.length;
    arr_tech_matrix[1] = my2 * 5;

    // strip.showRainbow(1, 360)

    let myColor: number = color;
    let is_type2 = 0; //buchstabe

    let zch_len2 = zch_str.length
    if (zch_len2 > 1) {
        is_type2 = 1; // wort
        let arr_split2 = zch_str.split(",")
        if (arr_split2.length > 2) {
            is_type2 = 2; //array 
            zeichen_matrix2 = arr_split2.map(wert => parseInt(wert));
            zch_len2 = 1;
        }
    }

    strip.clear()
    strip.show()
    let mycolor = randColor();

    for (let o = 0; o < zch_len2; o++) {
        myColor = randColor();
        let zch2: string;
        if (is_type2 < 2) { //no array
            zch2 = zch_str[o]
            if (zch2 == " ") {
                myColor = randColor();
            }
            let found2 = bst_reihe.indexOf(zch2);
            if (found2 == -1) {
                found2 = 0;
            }
            zeichen_matrix2 = arr_zeichen[found2];
        }
        // strip.clear()
        // strip.show()


        // basic.showString(zch2)
        zeichen_matrix2.forEach(function (zahl, zeile) {
            for (let bit2 = 0; bit2 < mx2; bit2++) {
                // let z = zeile, c = bit2 //7- minus
                let c = zeile, z = bit2 //7- minus 2024
                //b=z, z=bit
                //b=z, z=mx-1-bit
                if (zahl & Math.pow(2, (bit2 + shift + mx2) % mx2)) {
                    // let px2 = z * mx2 + ((z % 2) ? (mx2 - 1 - c) : c)
                    // let px2 = z * mx2 + ((z % 2) == 0 ? (mx2 - 1 - c) : c)
                    let px2 = z * mx2 +c 

                    strip.setPixelColor(px2, myColor);
                    // strip.showRainbow(1, 360)
                    //    basic.showNumber(c)
                }
            }
        })
        strip.show()
        // arr_neop_strips[sss].show();
        if (is_type2 == 1) {
            pause(strip_pause)
            // basic.showString(zch2)
        }

        strip.rotate(8 * 7);
        strip.show();

        // strip.rotate(0);
        // strip.show();
    }
    automat = true;

}

function randColor() {
    return [NeoPixelColors.Red, NeoPixelColors.Green, NeoPixelColors.Blue, NeoPixelColors.Yellow][Math.randomRange(0, 3)]
}


function init_alphabet() {
    bst_reihe = " ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜäöü0123456789!?.,*+-=≠:%abcdefghijklmnopqrstuvwxyz()<>";
    arr_zeichen = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [14, 17, 17, 31, 17, 17, 17, 0], //A
        [30, 17, 17, 30, 17, 17, 30, 0],
        [14, 17, 16, 16, 16, 17, 14, 0],
        [30, 17, 17, 17, 17, 17, 30, 0],//D
        [31, 16, 16, 30, 16, 16, 31, 0],
        [31, 16, 16, 30, 16, 16, 16, 0],
        [14, 17, 16, 23, 17, 17, 14, 0],
        [17, 17, 17, 31, 17, 17, 17, 0],
        [14, 4, 4, 4, 4, 4, 14, 0],
        [15, 2, 2, 2, 2, 18, 12, 0],
        [17, 18, 20, 24, 20, 18, 17, 0], //K
        [16, 16, 16, 16, 16, 16, 31, 0],
        [17, 27, 21, 21, 17, 17, 17, 0],
        [17, 17, 25, 21, 19, 17, 17, 0],
        [14, 17, 17, 17, 17, 17, 14, 0],
        [30, 17, 17, 30, 16, 16, 16, 0],
        [14, 17, 17, 17, 21, 18, 13, 0],
        [30, 17, 17, 30, 20, 18, 17, 0],
        [14, 17, 16, 14, 1, 17, 14, 0],
        [31, 4, 4, 4, 4, 4, 4, 0],       //T
        [17, 17, 17, 17, 17, 17, 14, 0],
        [17, 17, 17, 17, 17, 10, 4, 0],
        [17, 17, 17, 21, 21, 27, 17, 0],
        [17, 17, 10, 4, 10, 17, 17, 0],
        [17, 17, 10, 4, 4, 4, 4, 0],
        [31, 1, 2, 4, 8, 16, 31, 0], //Z
        [10, 0, 14, 17, 31, 17, 17, 0], //Ä
        [10, 0, 14, 17, 17, 17, 14, 0], //Ö
        [10, 0, 17, 17, 17, 17, 14, 0], //Ü
        [10, 0, 14, 1, 15, 17, 15, 0], //ä
        [0, 10, 0, 14, 17, 17, 14, 0], //ö
        [0, 10, 0, 17, 17, 17, 14, 0], //ü

        [14, 17, 19, 21, 25, 17, 14, 0], //0
        [4, 12, 4, 4, 4, 4, 14, 0],
        [14, 17, 1, 2, 4, 8, 31, 0],
        [31, 2, 4, 2, 1, 17, 14, 0],
        [2, 6, 10, 18, 31, 2, 2, 0],
        [31, 16, 30, 1, 1, 17, 14, 0],
        [6, 8, 16, 30, 17, 17, 14, 0],
        [31, 1, 2, 4, 4, 4, 4, 0],
        [14, 17, 17, 14, 17, 17, 14, 0],
        [14, 17, 17, 15, 1, 2, 12, 0],//9

        [4, 4, 4, 4, 4, 0, 4, 0], //!
        [14, 17, 1, 2, 4, 0, 4, 0], //?
        [0, 0, 0, 0, 0, 12, 12, 0], //.
        [0, 0, 0, 0, 0, 12, 12, 4], //,
        [0, 0, 4, 21, 14, 21, 4, 0], //*
        [0, 0, 4, 4, 31, 4, 4, 0], //+
        [0, 0, 0, 0, 31, 0, 0, 0], //-
        [0, 0, 0, 31, 0, 31, 0, 0], //=
        [1, 2, 31, 4, 31, 8, 16, 0], //
        [0, 0, 12, 12, 0, 12, 12, 0], //:
        [24, 25, 2, 4, 8, 19, 3, 0], //%

        [0, 0, 14, 1, 15, 17, 31, 0],//a
        [16, 16, 22, 25, 17, 17, 14, 0], //b
        [0, 0, 15, 16, 16, 16, 15, 0], //c
        [1, 1, 13, 19, 17, 17, 15, 0], //d
        [0, 0, 14, 17, 31, 16, 14, 0], //e
        [2, 5, 4, 14, 4, 4, 4, 4], //f
        [0, 0, 15, 17, 17, 15, 1, 14], //g
        [16, 16, 22, 25, 17, 17, 17, 0], //h
        [4, 0, 12, 4, 4, 4, 14, 0], //i
        [2, 0, 2, 2, 2, 2, 10, 4], //j
        [8, 8, 9, 10, 12, 10, 9, 0], //k
        [12, 4, 4, 4, 4, 4, 14, 0], //l
        [0, 0, 26, 21, 21, 21, 21, 0],//m
        [0, 0, 22, 25, 17, 17, 17, 0], //n
        [0, 0, 14, 17, 17, 17, 14, 0], //o
        [0, 0, 30, 17, 17, 30, 16, 16], //p
        [0, 0, 15, 17, 17, 15, 1, 1], //q
        [0, 0, 11, 12, 8, 8, 8, 0], //r
        [0, 0, 15, 16, 14, 1, 30, 0], //s
        [4, 14, 4, 4, 4, 5, 2, 0], //t
        [0, 0, 17, 17, 17, 19, 13, 0], //u
        [0, 0, 17, 17, 17, 10, 4, 0], //v
        [0, 0, 17, 17, 17, 21, 10, 0], //w
        [0, 0, 17, 10, 4, 10, 17, 0], //x
        [0, 0, 17, 9, 6, 4, 8, 16], //y
        [0, 0, 31, 2, 4, 8, 31, 0], //z


        [4, 8, 16, 16, 16, 8, 4, 0], //()
        [4, 2, 1, 1, 1, 2, 4, 0], //)

        [2, 4, 8, 16, 8, 4, 2, 0], //<
        [8, 4, 2, 1, 2, 4, 8, 0], //>
        [6, 9, 28, 8, 28, 9, 6, 0]
    ]
}

function set_helligkeit (helligkeit: number) {
    strip_helligkeit = helligkeit
    // console.log("helligkeit"+strip_helligkeit)
    strip.setBrightness(strip_helligkeit)
}
function loesche_matrix () {
    strip.clear()
    strip.show()
}
// strip.show()
function init_strip () {
    pixelAnzahl = arr_tech_matrix[0] * arr_tech_matrix[1]
    strip = neopixel.create(0, pixelAnzahl, NeoPixelMode.RGB)
    strip.setBrightness(strip_helligkeit)
    strip.clear()
}
let pixelAnzahl = 0
let strip_helligkeit = 0
let arr_tech_matrix: number[] = []
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 168, NeoPixelMode.RGB)
// auch  scrollspeed
let automat = false
automat=true;

let shift: number = 0

basic.showIcon(IconNames.SmallSquare)
arr_tech_matrix = [8, 8]
strip_helligkeit = 50
let strip_pause = 250
// strip.showColor(neopixel.colors(NeoPixelColors.Green))
// strip.show()
// strip.rotate(8)
// strip.show()
let bst_reihe: string = "";
let arr_zeichen: number[][];
strip.setBrightness(strip_helligkeit);
init_alphabet();

strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))

strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Red))


neop_schreibe_zch("ABC", NeoPixelColors.Red)


// strip.showRainbow(1, 360)

basic.forever(() => {
    if (automat) {
        strip.rotate(8);
        strip.show();

        // arr_neop_strips[1].rotate(16 * 1);
        // arr_neop_strips[1].show();


        basic.pause(strip_pause)
        // arr_neop_strips[0].showRainbow(1, 360)

        // if (runden == max_runden) {
        //     arr_neop_strips[0].clear();
        //     basic.showString(" ");
        //     // power.lowPowerRequest()
        // }
    }
})



