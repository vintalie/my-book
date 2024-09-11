
let toggleForm = (e) => {
    e.form.querySelectorAll('.data, select, button, input, textarea').forEach(el => el.classList.toggle('hidden'))
button
}
function transformToEdit(e){
    toggleForm(e)
    e.addEventListener('click',() => {
        FormManager(e)
    })
}

function FormManager(e){
    
    const data = e.form
    let form = new FormData(data)
    
    const requestOptions = {
        method: e.classList[0],
        body:form
    }
    fetch(data.action, requestOptions)
    .then((scc) => {
        location.reload()
    }).catch(err => alert(err))

    
}