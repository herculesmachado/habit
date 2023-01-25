const form = document.querySelector('form')
// inicialiando a biblioteca
const nlwSetup = new NLWSetup(form) //criando um novo obj NLW setup e colocando aqui 
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save) //toda vez que meu formulário sofrer uma modificação, essa função vai rodar

function add() {
    // verificar se o dia já existe 
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists == true) {
        alert('Ops... O dia já está registrado! ❌')
        return
    }

    // Adiciona a tebela de check ao dia referente
    nlwSetup.addDay(today)
    alert('Adicionado com sucesso! ✅')
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
    // console.log(save)
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //para que não dê erro quando eu entrar na aplicação pela primeira vez
// carregando os dados do local storage 
//tranformar o texto em objeto novamente

nlwSetup.setData(data)
nlwSetup.load()