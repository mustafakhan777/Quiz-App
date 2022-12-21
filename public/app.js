var questions = [
    {
        Question: "MS word is software of __",
        CorrectAns: "Microsoft",
        Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
        Question: "Which is the word processing software?",
        CorrectAns: "MS word 2007",
        Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
        Question: "MS Word is __ software.    ",
        CorrectAns: "Word processing",
        Options: [
            "Web browser",
            "Word processing",
            "Operating system",
            "Antivirus",
        ],
    },
    {
        Question: "The valid format of MS Word is __",
        CorrectAns: ".doc",
        Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
        Question: "What program is used in MS-Word to check the spelling?",
        CorrectAns: "Spelling & Grammar",
        Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
        Question: "A word gets selected by clicking it",
        CorrectAns: "Twice",
        Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
        Question: "The center the selected text, the shortcut key is",
        CorrectAns: "Ctrl + E",
        Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
        Question: "Which option is not available in Microsoft office button?",
        CorrectAns: "Bold",
        Options: ["Bold", "New", "Save", "Open"],
    },
    {
        Question:
            "___ is the change the way text warps around the selected object.",
        CorrectAns: "Text wrapping",
        Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
        Question: "A major step before taking print of the document is",
        CorrectAns: "Both b and c",
        Options: [
            "To save the document",
            "To set paper setting",
            "To see print preview of the document",
            "Both b and c",
        ],
    },
];

var noq = document.getElementById('noq')
var render = document.getElementById('render')
var options = document.getElementById('options')
var maks = document.getElementById('maks')
var percentage = document.getElementById('percent')
// var count = 0
var indexNum = 0
var Stumarks = 0;

function renderQues() {
    noq.innerHTML = `Question # ${indexNum + 1} /${questions.length}`
    render.innerHTML = questions[indexNum].Question
    options.innerHTML = ''
    for (let i = 0; i < questions[indexNum].Options.length; i++) {
        options.innerHTML += `<div class="col-md-6">
        <div class=""><button onclick="checkQues('${questions[indexNum].Options[i]}', '${questions[indexNum].CorrectAns}')" class="btn btn-primary m-2 w-100 px-5">${questions[indexNum].Options[i]}</button></div>
    </div > `
    }

}

renderQues();

function next() {
    indexNum++
    renderQues()
    // if (indexNum = '10') {
    //     alert()
    // }

}


function checkQues(a, b) {
    if (a == b) {
        Stumarks++;
        maks.innerHTML = Stumarks;
        percentage.innerHTML = (Stumarks / questions.length) * 100;
        next();

    }
    else {
        next();

    }
}