window.onload = () => {
  let elementoBotao = document.querySelector('#cadastrar')

  // elementoBotao.addEventListener('click', (event) =>{
  //   event.preventDefault()
  //   console.log('Clicou no botâo');
  //   let ladda = Ladda.create(elementoBotao)
  //   ladda.start()
  //   ladda.setProgress(0.2)
  //   let pregressoAtual = 0
  //   let interval =
  //   setInterval(() => {
  //     ladda.setProgress(pregressoAtual += 0.1)
  //     if (pregressoAtual>= 1){
  //       clearInterval(interval)
  //       ladda.stop()
  //     }
  //   }, 200)
  // })
  let formularioLivro = $('#formLivro')
  formularioLivro.validate({
    rules: {
      titulo: {
        required: true,
        minlength: 3
      },
      subtitulo: {
        required: false,
        minlength: 9
      },
      descricao: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      titulo: {
        required: 'O titulo é obrigatório',
        minlength: 'O titulo é muito curto'
      },
      subtitulo:{
        minlength: 'O subtitulo é muito curto'
      },
      descricao:{
        required: 'A descrição é obrigatório',
        minlength:'A descrição esta curta demais'
      }
    },
    errorPlacement: function(error, element){
        element.parent().parent().find('.error').append(error).addClass('animated flash')
    },
    errorClass: 'cor-do-erro'
  })
}
