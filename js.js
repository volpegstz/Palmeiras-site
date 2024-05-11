
let url="dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("pirata").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">Jogador</p> <img class="foto"src="'+ $(this).find("id").text() +'.jpg"><p class="vivo"></p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("alcnha").text()+'<\p> <p class="rec"> <img class="berrys" src="">'+ $(this).find("recompensa").text()+' </p><p> '+ $(this).find("stats").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })

    fetch("xmlFile.xml")
    .then((response) => response.text())
    .then((xmlString) => {
       const parser = new DOMParser();
       const xmlDoc = parser.parseFromString(xmlString, "text/xml");
       const container = document.getElementById("xmlContainer");
       container.appendChild(xmlDoc.documentElement);
     });

     const linkUrl = "https://open.spotify.com/intl-pt/track/4oUPgtefQA6rH6Gxz0muzU?si=73eacd5d528441ed";
const link = document.createElement("link");
link.href = linkUrl;
link.textContent = "teste";
const xmlContainer = document.getElementById("xmlContainer");
xmlContainer.appendChild(link);


    var url_string = window.location.href;
    var url1 = new URL(url_string);
    var id = parseInt(url1.searchParams.get("id"));

    $.ajax(url)
    .done(function(xml) {
      $(xml).find("pirata").each(function() {
        var pos = parseInt($(this).find("id").text());
        if (id == pos) {
          var sobreText = $(this).find("sobre").text();
          sobreText = sobreText.replace(/\n/g, "<br>");
  
          var card = $('<div class="card"><p class="procurado">Jogador</p> <img class="foto" src="' + $(this).find("id").text() + '.jpg"><p class="vivo"></p> <p class="nome">' + $(this).find("nome").text() + '</p> <p>' + $(this).find("alcnha").text() + '</p> <p class="rec"> <img class="berrys" src="">' + $(this).find("recompensa").text() + '</p><p>' + $(this).find("status").text() + '</p><div>');
  
          var sobreTextDiv = $('<div class="sobre-text"></div>').html(sobreText);
  
          $("#individual").append(card);
          $("#individual").append(sobreTextDiv);
        }
      });

    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })
