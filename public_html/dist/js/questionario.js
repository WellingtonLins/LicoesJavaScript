/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* início do código */

var pontos = 0;
function reponse(form) {
    for (var i = 0; i < form.length; i++) {
        if (form[i].checked) {
            break
        }
    }
    var answer = ""
    if (i < form.length) {
        answer = form[i].value
    }
    return answer;
}

function solution(form) {
    /* variável para cada pergunta */
    var points = 0;
    var rep = "";
    var comment = "";
    var resposta1 = "";
    var resposta2 = "";
    var resposta3 = "";
    var resposta4 = "";
    var onome = ""

    /* valor de pontos para as questões */
    if (reponse(form.question1) == "A") {
        pontos += 1
    }
    if (reponse(form.question2) == "A") {
        pontos += 1
    }
    if (reponse(form.question3) == "B") {
        pontos += 1
    }
    if (reponse(form.question4) == "B") {
        pontos += 1
    }
    if (reponse(form.question5) == "C") {
        pontos += 1
    }
    if (reponse(form.question6) == "B") {
        pontos += 1
    }
    if (reponse(form.question7) == "A") {
        pontos += 1
    }
    if (reponse(form.question8) == "B") {
        pontos += 1
    }
    if (reponse(form.question9) == "C") {
        pontos += 1
    }
    if (reponse(form.question10) == "B") {
        pontos += 1
    }
    /* cada mensagem vai de acordo com o input marcado para resposta */

    /* mensagem para questão 1 */
    if (reponse(form.question1) == "") {
        resposta1 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question1) == "A") {
        resposta1 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question1) == "B") {
        resposta1 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question1) == "C") {
        resposta1 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 2 */
    if (reponse(form.question2) == "") {
        resposta2 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question2) == "A") {
        resposta2 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question2) == "B") {
        resposta2 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question2) == "C") {
        resposta2 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 3 */
    if (reponse(form.question3) == "") {
        resposta3 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question3) == "A") {
        resposta3 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question3) == "B") {
        resposta3 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question3) == "C") {
        resposta3 = "<font color=#cccccc>incorreta</font>"
    }


    /* mensagem para questão 4 */
    if (reponse(form.question4) == "") {
        resposta4 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question4) == "A") {
        resposta4 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question4) == "B") {
        resposta4 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question4) == "C") {
        resposta4 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 5 */
    if (reponse(form.question5) == "") {
        resposta5 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question5) == "A") {
        resposta5 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question5) == "B") {
        resposta5 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question5) == "C") {
        resposta5 = "<font color=#0099cc>correta</font>"
    }

    /* mensagem para questão 6 */
    if (reponse(form.question6) == "") {
        resposta6 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question6) == "A") {
        resposta6 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question6) == "B") {
        resposta6 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question6) == "C") {
        resposta6 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 7 */
    if (reponse(form.question7) == "") {
        resposta7 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question7) == "A") {
        resposta7 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question7) == "B") {
        resposta7 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question7) == "C") {
        resposta7 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 8 */
    if (reponse(form.question8) == "") {
        resposta8 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question8) == "A") {
        resposta8 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question8) == "B") {
        resposta8 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question8) == "C") {
        resposta8 = "<font color=#cccccc>incorreta</font>"
    }

    /* mensagem para questão 9 */
    if (reponse(form.question9) == "") {
        resposta9 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question9) == "A") {
        resposta9 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question9) == "B") {
        resposta9 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question9) == "C") {
        resposta9 = "<font color=#0099cc>correta</font>"
    }

    /* mensagem para questão 10 */
    if (reponse(form.question10) == "") {
        resposta10 = "<font color=#cccccc>não respondida</font>"
    }
    if (reponse(form.question10) == "A") {
        resposta10 = "<font color=#cccccc>incorreta</font>"
    }
    if (reponse(form.question10) == "B") {
        resposta10 = "<font color=#0099cc>correta</font>"
    }
    if (reponse(form.question10) == "C") {
        resposta10 = "<font color=#cccccc>incorreta</font>"
    }




    /* aqui é exibido a mensagem de acordo com o ponto marcado */
    if (pontos == 0) {
        comment = "você não fez pontos, tente novamente"
    }
    if (pontos == 1) {
        comment = "você fez um ponto, péssimo"
    }
    if (pontos == 2) {
        comment = "você fez 2 pontos, muito ruim"
    }
    if (pontos == 3) {
        comment = "você fez 3 pontos, ruim"
    }
    if (pontos == 4) {
        comment = "você fez 4 pontos, exite algo errado"
    }
    if (pontos == 5) {
        comment = "você fez 5 pontos, precisa estudar"
    }
    if (pontos == 6) {
        comment = "você fez 6 pontos, regular"
    }
    if (pontos == 7) {
        comment = "você fez 7 pontos, bom"
    }
    if (pontos == 8) {
        comment = "você fez 8 pontos, muito bom"
    }
    if (pontos == 9) {
        comment = "você fez 9 pontos, ótimo"
    }
    if (pontos == 10) {
        comment = "excelente! você acertou todas!<br><br><a href=\"javascript:;\" onClick=\"window.print();return false\">Imprimir este certificado</a><br>Veja o seu certificado abaixo:<br><br><img src=img_certificado.gif border=0>"
    }

    /* aqui exibo a porcentagem de acordo com o ponto */
    if (pontos == 0) {
        porcentagem = "0%"
    }
    if (pontos == 1) {
        porcentagem = "10%"
    }
    if (pontos == 2) {
        porcentagem = "20%"
    }
    if (pontos == 3) {
        porcentagem = "30%"
    }
    if (pontos == 4) {
        porcentagem = "40%"
    }
    if (pontos == 5) {
        porcentagem = "50%"
    }
    if (pontos == 6) {
        porcentagem = "60%"
    }
    if (pontos == 7) {
        porcentagem = "70%"
    }
    if (pontos == 8) {
        porcentagem = "80%"
    }
    if (pontos == 9) {
        porcentagem = "90%"
    }
    if (pontos == 10) {
        porcentagem = "100%"
    }

    /* aqui inicio o código mostrado na nova janela */
    chaine = ''
            + '<head><title>Resultado</title>'
            + '<style type=text/css>a{font-family:arial;font-size:8pt;color:#696969;text-decoration:none;}#texto{font-family:verdana,arial;font-size:8pt;color:#696969;}#textos{font-family:verdana,arial;font-size:10px;color:#c7c7c7;}input{border:1px solid #f8f8f8;background-color:fefefe;font-family:arial;font-size:8pt;color:#1c1c1c;}#resultado{font-family:arial;font-size:8pt;color:#696969;}</style>'
            + '</head>'
            + '<center><font id=texto>Você atingiu um total de <font color=#0099cc><b>' + pontos + '</b></font> pontos, acertando ' + porcentagem + ' das questões.<br><br><font color=#696969>' + comment + '<BR>'

            + '<br><center><font id=texto>' + formmail.onome.value + ' veja abaixo o resumo das questões:</font></center><br>'

            + '<table border=0 cellpading=3 cellspacing=3 style="border:1px solid #f8f8f8;background-color:#ffffff;" width="150">'
            + "<tr><td><font id=textos>1)</td><td><font id=resultado>" + resposta1 + "</font></td></tr>"
            + "<tr><td><font id=textos>2)</td><td><font id=resultado>" + resposta2 + "</font></td></tr>"
            + "<tr><td><font id=textos>3)</td><td><font id=resultado>" + resposta3 + "</font></td></tr>"
            + "<tr><td><font id=textos>4)</td><td><font id=resultado>" + resposta4 + "</font></td></tr>"
            + "<tr><td><font id=textos>5)</td><td><font id=resultado>" + resposta5 + "</font></td></tr>"
            + "<tr><td><font id=textos>6)</td><td><font id=resultado>" + resposta6 + "</font></td></tr>"
            + "<tr><td><font id=textos>7)</td><td><font id=resultado>" + resposta7 + "</font></td></tr>"
            + "<tr><td><font id=textos>8)</td><td><font id=resultado>" + resposta8 + "</font></td></tr>"
            + "<tr><td><font id=textos>9)</td><td><font id=resultado>" + resposta9 + "</font></td></tr>"
            + "<tr><td><font id=textos>10)</td><td><font id=resultado>" + resposta10 + "</font></td></tr>"


            + "</table></form>"
            + '<a href="javascript:void(0)" onclick="javascript:window.close()">FECHAR</a>'
            + '</CENTER></BODY></HTML>'
    solu = open();
    solu.document.write(chaine)
}
    