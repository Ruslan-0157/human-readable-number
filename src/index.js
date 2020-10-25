module.exports = function toReadable(number) {
    const dictionary = {
        simple: {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
        },
        combine: {
            2: "twen",
            3: "thir",
            4: "four",
            5: "fif",
            6: "six",
            7: "seven",
            8: "eigh",
            9: "nine",
        },
    };
    const digits = number.toString().split("")
    const length = digits.length
    let str = ""
    for (let i = 1; i <= length; i++) {
        const thisNum = digits[i - 1]
        const degree = length - i
        switch (degree) {
            case 0:
                if (thisNum === "0" && length > 1) break;
                (str += ` ${dictionary.simple[thisNum]}`).trim()
                break;
            case 1:
                const nextDigit = digits[i]
                if (thisNum === "0")
                    break;
                if (thisNum === "1" && Number(nextDigit) < 3)
                    return (str += ` ${dictionary.simple[thisNum+nextDigit]}`).trim()
                if (thisNum === "1") {
                    return (str += ` ${dictionary.combine[nextDigit]}teen`).trim()
                }
                (str += ` ${thisNum === "4" ? "for" : dictionary.combine[thisNum]}ty`).trim()
                break;
            case 2:
                str += `${dictionary.simple[thisNum]} hundred`
                break;
        }
    }

    return str.trim()
}