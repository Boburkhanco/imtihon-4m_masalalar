// Ikkinchi masala
function findLongesWord (str) {
    let splittedStr = str.split(' ')
    let sortedStr = splittedStr.sort((a, b) => {
        return b.length - a.length
    })
    let res = sortedStr[0]
    return "Quyidagi 'text'da " + res + " eng uzun so'z hisoblanib, u " + sortedStr[0].length + " ta harfdan iborat..!"
}
alert(findLongesWord(prompt('Get the longest word from multiple-words text..!')))
