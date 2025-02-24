// const { default: axios } = require("axios");
let allSurahName = [
    {"name": "سُورَةُ ٱلْفَاتِحَةِ", "surahNumber": 1},
    {"name": "سُورَةُ البَقَرَةِ", "surahNumber": 2},
    {"name": "سُورَةُ آلِ عِمۡرَانَ", "surahNumber": 3},
    {"name": "سُورَةُ النِّسَاءِ", "surahNumber": 4},
    {"name": "سُورَةُ المَائـِدَةِ", "surahNumber": 5},
    {"name": "سُورَةُ الأَنۡعَامِ", "surahNumber": 6},
    {"name": "سُورَةُ الأَعۡرَافِ", "surahNumber": 7},
    {"name": "سُورَةُ الأَنفَالِ", "surahNumber": 8},
    {"name": "سُورَةُ التَّوۡبَةِ", "surahNumber": 9},
    {"name": "سُورَةُ يُونُسَ", "surahNumber": 10},
    {"name": "سُورَةُ هُودٍ", "surahNumber": 11},
    {"name": "سُورَةُ يُوسُفَ", "surahNumber": 12},
    {"name": "سُورَةُ الرَّعۡدِ", "surahNumber": 13},
    {"name": "سُورَةُ إِبۡرَاهِيمَ", "surahNumber": 14},
    {"name": "سُورَةُ الحِجۡرِ", "surahNumber": 15},
    {"name": "سُورَةُ النَّحۡلِ", "surahNumber": 16},
    {"name": "سُورَةُ الإِسۡرَاءِ", "surahNumber": 17},
    {"name": "سُورَةُ الكَهۡفِ", "surahNumber": 18},
    {"name": "سُورَةُ مَرۡيَمَ", "surahNumber": 19},
    {"name": "سُورَةُ طه", "surahNumber": 20},
    {"name": "سُورَةُ الأَنبِيَاءِ", "surahNumber": 21},
    {"name": "سُورَةُ الحَجِّ", "surahNumber": 22},
    {"name": "سُورَةُ المُؤۡمِنُونَ", "surahNumber": 23},
    {"name": "سُورَةُ النُّورِ", "surahNumber": 24},
    {"name": "سُورَةُ الفُرۡقَانِ", "surahNumber": 25},
    {"name": "سُورَةُ الشُّعَرَاءِ", "surahNumber": 26},
    {"name": "سُورَةُ النَّمۡلِ", "surahNumber": 27},
    {"name": "سُورَةُ القَصَصِ", "surahNumber": 28},
    {"name": "سُورَةُ العَنكَبُوتِ", "surahNumber": 29},
    {"name": "سُورَةُ الرُّومِ", "surahNumber": 30},
    {"name": "سُورَةُ لُقۡمَانَ", "surahNumber": 31},
    {"name": "سُورَةُ السَّجۡدَةِ", "surahNumber": 32},
    {"name": "سُورَةُ الأَحۡزَابِ", "surahNumber": 33},
    {"name": "سُورَةُ سَبَإٍ", "surahNumber": 34},
    {"name": "سُورَةُ فَاطِرٍ", "surahNumber": 35},
    {"name": "سُورَةُ يسٓ", "surahNumber": 36},
    {"name": "سُورَةُ الصَّافَّاتِ", "surahNumber": 37},
    {"name": "سُورَةُ صٓ", "surahNumber": 38},
    {"name": "سُورَةُ الزُّمَرِ", "surahNumber": 39},
    {"name": "سُورَةُ غَافِرٍ", "surahNumber": 40},
    {"name": "سُورَةُ فُصِّلَتۡ", "surahNumber": 41},
    {"name": "سُورَةُ الشُّورَىٰ", "surahNumber": 42},
    {"name": "سُورَةُ الزُّخۡرُفِ", "surahNumber": 43},
    {"name": "سُورَةُ الدُّخَانِ", "surahNumber": 44},
    {"name": "سُورَةُ الجَاثِيَةِ", "surahNumber": 45},
    {"name": "سُورَةُ الأَحۡقَافِ", "surahNumber": 46},
    {"name": "سُورَةُ مُحَمَّدٍ", "surahNumber": 47},
    {"name": "سُورَةُ الفَتۡحِ", "surahNumber": 48},
    {"name": "سُورَةُ الحُجُرَاتِ", "surahNumber": 49},
    {"name": "سُورَةُ قٓ", "surahNumber": 50},
    {"name": "سُورَةُ الذَّارِيَاتِ", "surahNumber": 51},
    {"name": "سُورَةُ الطُّورِ", "surahNumber": 52},
    {"name": "سُورَةُ النَّجۡمِ", "surahNumber": 53},
    {"name": "سُورَةُ القَمَرِ", "surahNumber": 54},
    {"name": "سُورَةُ الرَّحۡمَٰن", "surahNumber": 55},
    {"name": "سُورَةُ الوَاقِعَةِ", "surahNumber": 56},
    {"name": "سُورَةُ الحَدِيدِ", "surahNumber": 57},
    {"name": "سُورَةُ المُجَادِلَةِ", "surahNumber": 58},
    {"name": "سُورَةُ الحَشۡرِ", "surahNumber": 59},
    {"name": "سُورَةُ المُمۡتَحَنَةِ", "surahNumber": 60},
    {"name": "سُورَةُ الصَّفِّ", "surahNumber": 61},
    {"name": "سُورَةُ الجُمُعَةِ", "surahNumber": 62},
    {"name": "سُورَةُ المُنَافِقُونَ", "surahNumber": 63},
    {"name": "سُورَةُ التَّغَابُنِ", "surahNumber": 64},
    {"name": "سُورَةُ الطَّلَاقِ", "surahNumber": 65},
    {"name": "سُورَةُ التَّحۡرِيمِ", "surahNumber": 66},
    {"name": "سُورَةُ المُلۡكِ", "surahNumber": 67},
    {"name": "سُورَةُ القَلَمِ", "surahNumber": 68},
    {"name": "سُورَةُ الحَاقَّةِ", "surahNumber": 69},
    {"name": "سُورَةُ المَعَارِجِ", "surahNumber": 70},
    {"name": "سُورَةُ نُوحٍ", "surahNumber": 71},
    {"name": "سُورَةُ الجِنِّ", "surahNumber": 72},
    {"name": "سُورَةُ المُزَّمِّلِ", "surahNumber": 73},
    {"name": "سُورَةُ المُدَّثِّرِ", "surahNumber": 74},
    {"name": "سُورَةُ القِيَامَةِ", "surahNumber": 75},
    {"name": "سُورَةُ الإِنسَانِ", "surahNumber": 76},
    {"name": "سُورَةُ المُرۡسَلَاتِ", "surahNumber": 77},
    {"name": "سُورَةُ النَّبَإِ", "surahNumber": 78},
    {"name": "سُورَةُ النَّازِعَاتِ", "surahNumber": 79},
    {"name": "سُورَةُ عَبَسَ", "surahNumber": 80},
    {"name": "سُورَةُ التَّكۡوِيرِ", "surahNumber": 81},
    {"name": "سُورَةُ الانفِطَارِ", "surahNumber": 82},
    {"name": "سُورَةُ المُطَفِّفِينَ", "surahNumber": 83},
    {"name": "سُورَةُ الانشِقَاقِ", "surahNumber": 84},
    {"name": "سُورَةُ البُرُوجِ", "surahNumber": 85},
    {"name": "سُورَةُ الطَّارِقِ", "surahNumber": 86},
    {"name": "سُورَةُ الأَعۡلَىٰ", "surahNumber": 87},
    {"name": "سُورَةُ الغَاشِيَةِ", "surahNumber": 88},
    {"name": "سُورَةُ الفَجۡرِ", "surahNumber": 89},
    {"name": "سُورَةُ البَلَدِ", "surahNumber": 90},
    {"name": "سُورَةُ الشَّمۡسِ", "surahNumber": 91},
    {"name": "سُورَةُ اللَّيۡلِ", "surahNumber": 92},
    {"name": "سُورَةُ الضُّحَىٰ", "surahNumber": 93},
    {"name": "سُورَةُ الشَّرۡحِ", "surahNumber": 94},
    {"name": "سُورَةُ التِّينِ", "surahNumber": 95},
    {"name": "سُورَةُ العَلَقِ", "surahNumber": 96},
    {"name": "سُورَةُ القَدۡرِ", "surahNumber": 97},
    {"name": "سُورَةُ البَيِّنَةِ", "surahNumber": 98},
    {"name": "سُورَةُ الزَّلۡزَلَةِ", "surahNumber": 99},
    {"name": "سُورَةُ العَادِيَاتِ", "surahNumber": 100},
    {"name": "سُورَةُ القَارِعَةِ", "surahNumber": 101},
    {"name": "سُورَةُ التَّكَاثُرِ", "surahNumber": 102},
    {"name": "سُورَةُ العَصۡرِ", "surahNumber": 103},
    {"name": "سُورَةُ الهُمَزَةِ", "surahNumber": 104},
    {"name": "سُورَةُ الفِيلِ", "surahNumber": 105},
    {"name": "سُورَةُ قُرَيۡشٍ", "surahNumber": 106},
    {"name": "سُورَةُ المَاعُونِ", "surahNumber": 107},
    {"name": "سُورَةُ الكَوْثَرِ", "surahNumber": 108},
    {"name": "سُورَةُ الكَافِرُونَ", "surahNumber": 109},
    {"name": "سُورَةُ النَّصۡرِ", "surahNumber": 110},
    {"name": "سُورَةُ المَسَدِ", "surahNumber": 111},
    {"name": "سُورَةُ الإِخۡلَاصِ", "surahNumber": 112},
    {"name": "سُورَةُ الفَلَقِ", "surahNumber": 113},
    {"name": "سُورَةُ النَّاسِ", "surahNumber": 114}      
]  

let start = document.getElementsByClassName("start")[0];
let startAnext = document.getElementsByClassName("startAnext")[0];
let choices = document.getElementsByClassName("choices")[0];
let choice1 = document.getElementsByClassName("choice1")[0];
let choice2 = document.getElementsByClassName("choice2")[0];
let showResult = document.getElementsByClassName("showResult")[0];

let ayah = document.getElementsByClassName("ayah")[0];
let isSelected = false

let correctNumber;
let choicesArr = [
    {
        name: null,
        numberSurah: 0
    },
    {
        name: null,
        numberSurah: 0
    },
    {
        name: null,
        numberSurah: 0
    },
    {
        name: null,
        numberSurah: 0
    }
] 

async function executeRandomAyah() {
    isSelected = false;
    choice1.innerHTML = ""
    choice2.innerHTML = ""

    if (start.innerHTML.includes("Start")) {
        start.innerHTML = "Next"
    }
    startAnext.classList.add("d-none")
    choices.classList.remove("d-none")
    showResult.classList.add("d-none")

    let response = await axios.get(`https://api.alquran.cloud/v1/ayah/${randomValue(6236)+1}`)
    
    ayah.innerHTML = response.data.data.text

    showResult.innerHTML = `${response.data.data.surah.name} الآية ${response.data.data.numberInSurah}`
    correctNumber = response.data.data.surah.number

    choicesArr[0].name = response.data.data.surah.name
    choicesArr[0].numberSurah = response.data.data.surah.number

    let itera = 1;
    while(itera < 4) {
        let randomSurahInfo = allSurahName[randomValue(114)]

        if(randomSurahInfo.surahNumber == choicesArr[0].numberSurah 
        || randomSurahInfo.surahNumber == choicesArr[1].numberSurah
        || randomSurahInfo.surahNumber == choicesArr[2].numberSurah
        || randomSurahInfo.surahNumber == choicesArr[3].numberSurah) {
            continue
        }
        
        choicesArr[itera].name = randomSurahInfo.name
        choicesArr[itera].numberSurah = randomSurahInfo.surahNumber
        itera++;
    }

    console.log(response)

    shuffleArray(choicesArr)
    let choice = choice1
    let i = 0;
    for(let item of choicesArr) {
        choice.innerHTML += `<button onclick="checkChoiseSelect(${item.numberSurah})" id="${item.numberSurah}" name="item-choise">${item.name}</button>`
        if(i == 1) choice = choice2;
        i++;
    }
}

function checkChoiseSelect(numberSurah) {
    if(!isSelected) {
        if(numberSurah == correctNumber) {
            document.getElementById(numberSurah).classList.add("correct")
        }else {
            document.getElementById(numberSurah).classList.add("wrong")
            let items = document.querySelectorAll("[name='item-choise']")
            items.forEach((item) => {
                if(item.id == correctNumber) {
                    item.classList.add("correct");
                }
            })
        }
        showResult.classList.remove("d-none")
        startAnext.classList.remove("d-none")
        isSelected = true;
    }
}

function sleep(ms) {
    return new Promise((resolve,reject) => {setTimeout(() => { resolve(); }, ms)})
}

function randomValue(number) {
    return number > 0 ? Math.floor(Math.random() * number) : 0;
}

function shuffleArray(array) {
    for(let i=array.length-1; i >= 0; i--) {
        let j = randomValue(i+1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}