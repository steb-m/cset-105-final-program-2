let questions = ['C', 'A', 'D', 'B', 'B', '', '', '', '', ''];
let correct = 0;
let total = 0;
const submitButton = document.getElementById('submit')
submitButton.disabled = true;

function answerQuestion(quesNum, choice, sender) {
    if (questions[quesNum - 1] === choice) {
        alert("Correct!");
        correct++;
    } else {
        alert(`Incorrect! The answer was ${questions[quesNum - 1]}`);
    }
    total++;

    const fieldset = sender.closest('fieldset');
    if (fieldset) {
        fieldset.disabled = true;
    }
    if (total == 10) {
        submitButton.disabled = false
        submitButton.style.cursor = "pointer"
    }
}

function submit() {
    alert(`Quiz completed! You scored ${correct} out of ${total}.`);
    let fieldsets = document.getElementsByTagName('fieldset')
    for (const fieldset of fieldsets) {
        for (const radio of fieldset.getElementsByTagName('input')) {
            radio.checked = false;
        }
        fieldset.disabled = false;
    }
}