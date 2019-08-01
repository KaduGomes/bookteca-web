window.onload = () => {
  let elementoBotao = document.querySelector('#cadastrar')

  elementoBotao.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log('Clicou no botâo');
    let ladda = Ladda.create(elementoBotao)
    ladda.start()
    ladda.setProgress(0.2)
    let pregressoAtual = 0
    let interval =
    setInterval(() => {
      ladda.setProgress(pregressoAtual += 0.1)
      if (pregressoAtual>= 1){
        clearInterval(interval)
        ladda.stop()
      }

    }, 200)
  })

}
