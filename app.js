const form = document.querySelector('.quiz-form')
const quizResults = document.querySelector('#quiz-Results')
const userScoreResult = document.querySelector('.modal-body p')
const closeResults = document.querySelector('.modal-footer button')

const correctAnswers = ['A', 'B', 'B', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let userScore = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {

    if (userAnswer === correctAnswers[index]) {
      userScore += 25
    }

  })


  userScoreResult.textContent = `Sua pontuação: ${userScore}`
  quizResults.style = 'display: block'

})

/* Close modal ============= */

closeResults.addEventListener('click', () => {
  quizResults.style = 'display: none'
})