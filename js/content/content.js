/*
    (c) Ulferno 2020

    Name: manipulation.js 
    Description: Modify page to include hegarty calculator.

*/


var pasteAnswer = (string) => {
    console.log(string)
    MathQuill.MathField(document.getElementsByClassName('Assessment__answer-box')[0]).latex(string)
}

var metaMenu = [{
        name: "Simplify",
        run: (question) => {
            var evaluated = evaluatex(question)
            console.log("evalx", evaluated())
        }
    },
    {
        name: "Solve for x",
        run: (question) => {
            question = question.split('=')
            var x1 = new algebra.parse(latex_to_js(question[0]));
            var x2 = new algebra.parse(latex_to_js(question[1]));

            var exp = new algebra.Equation(x1, x2);
            var answer = exp.solveFor('x');

            pasteAnswer(algebra.toTex(answer));
        }
    }
]

var enablePaste = () => {
    $('.Assessment__answer-box').removeAttr('onpaste');
    $('.Assessment__answer-box').bind('cut copy paste', (event) => {
        event.returnValue = true;
    })
}


$(() => {

    var calc = $('.hm-calc')
    calc.parent().html(`<i class="hm hm-calc green"></i> Hegarty Calculator`)

    $('.hm-quit').parent().remove();
    $('.hm-error').parent().remove();
    $('.hm-keypad').parent().remove();
    $('.Keypad__container').remove();

    var fetchquestion = () => {
        var question = $('#MathJax-Element-1').html()

        if (!question || question.length < 2)
            question = $('#MathJax-Element-2').html()

        if (question === undefined) {
            swal('Could not find question', 'Ensure you are on the assessment page and the page has fully loaded', 'error')
        } else {
            return question;
        }
    }

    var meta = $('.Assessment__meta')

    metaMenu.forEach((button) => {
        var {
            name,
            run
        } = button;

        var id = (name.replace(/ /g, '-')).toLowerCase();
        meta.append(`<li><i class="hm hm-calc blue" style="float: left; padding-bottom: 6px; padding-right: 10px;"></i> <a href="#" id="${id}">${button.name}</a></li>`)

        $(`#${id}`).click(() => {
            var question = fetchquestion();
            var parsedQuestion = latex_to_js(question);
            run(parsedQuestion);
        })
    });
})