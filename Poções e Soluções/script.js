const url = 'https://merigold-potions.herokuapp.com/potions'
let arrayNameList = new Array();
let arrayDescList = new Array();
let arrayImg = new Array();

getDados(url)

class Data {
    constructor(name, description) {
        this.name = name
        this.description = description
    }
}

function getDados(url) {
    fetch(url,
        {method: 'GET',}
    ).then(function(response) {
        return response.json()
    }).then(function( dados ){
        for (let dado of dados.content) {
            arrayNameList.push(dado.name)
            arrayDescList.push( dado.description )
            arrayImg.push(dado.img)
        }
        putData1( arrayNameList, arrayDescList, arrayImg )
        putData2( arrayNameList, arrayDescList, arrayImg )
        putData3( arrayNameList, arrayDescList, arrayImg )
        putData4( arrayNameList, arrayDescList, arrayImg )
    })
}

function putData1(dataNome, dataDesc, dataImg) {

    console.log("Url da imagem: " + dataImg[0])

    let div = document.getElementById('pocao1H')
    let divP = document.getElementById('pocao1P')
    let divImg = document.getElementById('img1')

    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let img = document.createElement('img')

    let divData = document.createElement('div')
    let divData2 = document.createElement('div')
    let divI = document.createElement('div')

    h3.textContent = dataNome[0]
    p.textContent = dataDesc[0]
    img.src = dataImg[0]
    img.height = 400
    img.width = 250

    divData.appendChild(h3)
    divData2.appendChild(p)
    divI.appendChild(img)

    div.appendChild(divData)
    divP.appendChild(divData2)
    divImg.appendChild(divI)
}

function putData2(dataNome, dataDesc, dataImg) {

    let div = document.getElementById('pocao2H')
    let divP = document.getElementById('pocao2P')
    let divImg = document.getElementById('img2')

    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let img = document.createElement('img')

    let divData = document.createElement('div')
    let divData2 = document.createElement('div')
    let divI = document.createElement('div')

    h3.textContent = dataNome[1]
    p.textContent = dataDesc[1]
    img.src = dataImg[1]
    img.height = 400
    img.width = 250

    divData.appendChild(h3)
    divData2.appendChild(p)
    divI.appendChild(img)

    div.appendChild(divData)
    divP.appendChild(divData2)
    divImg.appendChild(divI)
}

function putData3(dataNome, dataDesc, dataImg) {

    let div = document.getElementById('pocao3H')
    let divP = document.getElementById('pocao3P')
    let divImg = document.getElementById('img3')

    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let img = document.createElement('img')

    let divData = document.createElement('div')
    let divData2 = document.createElement('div')
    let divI = document.createElement('div')

    h3.textContent = dataNome[2]
    p.textContent = dataDesc[2]
    img.src = dataImg[2]
    img.height = 400
    img.width = 250

    divData.appendChild(h3)
    divData2.appendChild(p)
    divI.appendChild(img)

    div.appendChild(divData)
    divP.appendChild(divData2)
    divImg.appendChild(divI)
}

function putData4(dataNome, dataDesc, dataImg) {

    let div = document.getElementById('pocao4H')
    let divP = document.getElementById('pocao4P')
    let divImg = document.getElementById('img4')

    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let img = document.createElement('img')

    let divData = document.createElement('div')
    let divData2 = document.createElement('div')
    let divI = document.createElement('div')

    h3.textContent = dataNome[3]
    p.textContent = dataDesc[3]
    img.src = dataImg[3]
    img.height = 400
    img.width = 250

    divData.appendChild(h3)
    divData2.appendChild(p)
    divI.appendChild(img)

    div.appendChild(divData)
    divP.appendChild(divData2)
    divImg.appendChild(divI)
}