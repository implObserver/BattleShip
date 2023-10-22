const Alphabet = (fCharCode, lCharCode) => {
    const firstCharCode = fCharCode;
    const lastCharCode = lCharCode;
    const long = lastCharCode - firstCharCode + 1;
    const codes = Array.from(Array(long).keys(), (x) => x + firstCharCode);

    const isThisAlphabet = (charCode) => {
        if (charCode >= firstCharCode && charCode <= lastCharCode) {
            return true;
        }
        return false;
    };

    return { firstCharCode, lastCharCode, long, isThisAlphabet, codes };
};

export const Alphabets = (() => {
    const eng = () => {
        const alphabet = Alphabet(97, 122);
        return Object.assign(alphabet);
    };

    const rus = () => {
        const alphabet = Alphabet(1072, 1103);
        return Object.assign(alphabet);
    };

    return { eng, rus };
})();
