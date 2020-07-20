function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'Bebê Homem.png')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src', 'jovem Homem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Adulto Homem.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso Homem.png')
            }
            
        } else {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'Bebê Mulher.png')
            } else if (idade < 30){
                //Jovem
                img.setAttribute('src', 'jovem Mulher.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Adulto Mulher.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso Mulher.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
 
    }
}
