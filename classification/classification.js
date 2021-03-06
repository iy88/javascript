/**
 * Quick classification
 */

function classification(array) {
    let d = array.slice(0); //copy array
    let nd = [      //after classification array 
        [   //letters
            [   //string(a~z)
                [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
            ],

            [   //string(A~Z)                   
                [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
            ]
        ],

        [   //numbers
            [   //string(0~9)
                [], [], [], [], [], [], [], [], [], []
            ],
        ],

        [   //other

        ]
    ]
    function isletter(str) {
        let fl = str[0];        //first letter
        let is = false;
        switch (fl) {
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case "g":
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case "G":
            case 'H':
            case 'I':
            case 'J':
            case 'K':
            case 'L':
            case 'M':
            case 'N':
            case 'O':
            case 'P':
            case 'Q':
            case 'R':
            case 'S':
            case 'T':
            case 'U':
            case 'V':
            case 'W':
            case 'X':
            case 'Y':
            case 'Z':
                is = true;
                break;
            default:
                break;
        }
        return is
    }

    function isnumber(str) {
        let fn = str[0]; //first string
        let is = false;
        switch (fn) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                is = true;
                break;
            default:
                break;
        }
        return is
    }

    let sa_z = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        "g": 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0
    }

    let sA_Z = {
        'A': 1,
        'B': 1,
        'C': 1,
        'D': 1,
        'E': 1,
        'F': 1,
        "G": 1,
        'H': 1,
        'I': 1,
        'J': 1,
        'K': 1,
        'L': 1,
        'M': 1,
        'N': 1,
        'O': 1,
        'P': 1,
        'Q': 1,
        'R': 1,
        'S': 1,
        'T': 1,
        'U': 1,
        'V': 1,
        'W': 1,
        'X': 1,
        'Y': 1,
        'Z': 1
    }

    let la_z = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        "g": 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }

    let lA_Z = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3,
        'E': 4,
        'F': 5,
        "G": 6,
        'H': 7,
        'I': 8,
        'J': 9,
        'K': 10,
        'L': 11,
        'M': 12,
        'N': 13,
        'O': 14,
        'P': 15,
        'Q': 16,
        'R': 17,
        'S': 18,
        'T': 19,
        'U': 20,
        'V': 21,
        'W': 22,
        'X': 23,
        'Y': 24,
        'Z': 25
    }

    let s0_9 = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0
    }

    let n0_9 = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    function main() {
        for (let i = 0; i < d.length; i++) {
            if (isletter(d[i])) {
                if (sA_Z[d[i][0]] !== undefined) {
                    nd[isletter(d[i]) ? 0 : 1][sA_Z[d[i][0]]][lA_Z[d[i][0]]] = d[i];
                } else {
                    nd[isletter(d[i]) ? 0 : 1][sa_z[d[i][0]]][la_z[d[i][0]]] = d[i];
                }
            } else if (isnumber(d[i])) {
                nd[isnumber(d[i]) ? 1 : 0][s0_9[d[i][0]]][n0_9[d[i][0]]] = d[i];
            } else {
                nd[2][nd[2].length] = d[i];
            }
        }
    }
    main();
    return nd
}