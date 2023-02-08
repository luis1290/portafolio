const formulario = document.querySelector('#form')
const sendForm = document.querySelector('#mail')

formulario.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const form = new FormData(this)
  sendForm.setAttribute('href', `mailto:lgomez1290@gmail.com?subject=${form.get('name')} - ${form.get('subject')}&body=${form.get('message')}`)
  sendForm.click()
}