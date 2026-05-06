export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

/**
 * 
 * @param {string} x
 * @param {number} a
 */
export function plsv_dua(x, a) {
    const coeff = parseInt(x);
    return {
        "x": x,
        "dengan": "=",
        "hasil": bagi(a, coeff)
    };
}

/**
 * 
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */

export function plsv_tiga(x, a, b) {
    const konstanta = b - a;

    if (x.length === 1) {
        return konstanta;
    } else if (x.length >= 2) {
        const v = parseInt(x);
    }
    return {
        "x": x,
        "dengan": "=",
        "hasil": bagi(konstanta, v)
    };
}

export function ptlsv_dua(x, op, a) {
    const coeff = parseInt(x);

    const balikan_op = {
        ">=": "<=",
        "<=": ">=",
        ">": "<",
        "<": ">"
    };

    const op_baru = coeff < 0 ? balikan_op[op] : op;

    return {
        "x": "x",
        "dengan": op_baru,
        "hasil": bagi(a, coeff)
    };
}