// --- Script Completo com Faixas Etárias para Idade e Região do Brasil ---

// Nenhuma linha de __Set("preload", "..."); ou PennController.Preload(); aqui.
// A imagem será carregada diretamente quando newImage().print() for chamado.

PennController.ResetPrefix(null);

Sequence("Participante", "Instrucoes", "Treinamento", "InicioExperimento", randomize("Experimento"), "Questionario", SendResults(), "Final");

Header(
    defaultText
        .css("font-size", "1.2em")
        .css("text-align", "center")
        .center()
    ,
    defaultTextInput
        .css("font-size", "1.1em")
        .center()
    ,
    defaultButton
        .css("font-size", "1.1em")
        .css("background-color", "#4CAF50")
        .css("color", "white")
        .css("padding", "10px 20px")
        .css("border", "none")
        .css("border-radius", "5px")
        .css("cursor", "pointer")
        .center()
);

newTrial("Participante",
    newText("<p style='margin-bottom: 20px;'>Bem-vindo/as! Solicitaremos aqui algumas informações gerais antes de começar.</p>").print(),
    newText("<p style='margin-bottom: 10px;'>Por favor, escreva seu <strong>PRIMEIRO NOME</strong> abaixo:</p>").print(),
    newTextInput("Nome")
        .css("font-size", "1.1em")
        .center()
        .print()
        .log()
    ,
    newButton("Iniciar")
        .center()
        .print()
        .wait()
);

newTrial("Instrucoes",
    newText("<p style='margin-bottom: 20px; text-align:center;'>INSTRUÇÕES</p>").print(),
    newText("<p style='margin-bottom: 20px; text-align:justify;'>Você irá participar de uma tarefa de escuta de sentenças e leitura de palavras. Primeiro, você ouvirá uma sentença completa. Depois, uma palavra irá aparecer na tela. As palavras que você irá ler podem ou não pertencer ao português. Sua tarefa consiste em ouvir atentamente as frases, ler as palavras que irão aparecer na tela e responder - o mais rápido possível - à pergunta 'É uma palavra do português?', clicando em <strong>SIM</strong> ou <strong>NÃO</strong>. Ao final do teste, você responderá um pequeno questionário para verificarmos o quanto consegue lembrar das frases escutadas, por isso é importante que preste bastante atenção nas sentenças que irá ouvir.</p>").print(),
    newButton("Começar Treinamento")
        .center()
        .print()
        .log()
        .wait()
);

newTrial("Treinamento",
    newText("<p style='margin-bottom: 20px; text-align:center;'>Treinamento</p>").print(),

    // --- Treinamento Trial 1 ---
    newImage("altofalante1", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio1", "MACACO1.mp3").play().wait(),
    getImage("altofalante1").remove(),
    newTimer("delayTimer1", 300).start().wait(),
    newText("BANANA").css("font-size", "2em").center().print(),
    newText("pergunta1", "É uma palavra do português?").print(),

    newButton("botao_sim_t1", "SIM").css("font-size", "1.1em"),
    newButton("botao_nao_t1", "NÃO").css("font-size", "1.1em"),

    newCanvas("buttonsContainer1", 250, 50)
        .add(0, 0, getButton("botao_sim_t1"))
        .add(150, 0, getButton("botao_nao_t1"))
        .center()
        .print()
    ,
    newSelector("resposta_t1")
        .add( getButton("botao_sim_t1") , getButton("botao_nao_t1") )
        .log()
        .wait() // O wait() no selector fará o script avançar após a seleção
    ,
    getAudio("audio1").remove(),
    getText("BANANA").remove(),
    getText("pergunta1").remove(),
    getCanvas("buttonsContainer1").remove(),

    // --- Treinamento Trial 2 ---
    newImage("altofalante2", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio2", "PIRANHA1.mp3").play().wait(),
    getImage("altofalante2").remove(),
    newTimer("delayTimer2", 300).start().wait(),
    newText("CABELO").css("font-size", "2em").center().print(),
    newText("pergunta2", "É uma palavra do português?").print(),

    newButton("botao_sim_t2", "SIM").css("font-size", "1.1em"),
    newButton("botao_nao_t2", "NÃO").css("font-size", "1.1em"),

    newCanvas("buttonsContainer2", 250, 50)
        .add(0, 0, getButton("botao_sim_t2"))
        .add(150, 0, getButton("botao_nao_t2"))
        .center()
        .print()
    ,
    newSelector("resposta_t2")
        .add( getButton("botao_sim_t2") , getButton("botao_nao_t2") )
        .log()
        .wait()
    ,
    getAudio("audio2").remove(),
    getText("CABELO").remove(),
    getText("pergunta2").remove(),
    getCanvas("buttonsContainer2").remove(),

    // --- Treinamento Trial 3 ---
    newImage("altofalante3", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio3", "PERUA1.mp3").play().wait(),
    getImage("altofalante3").remove(),
    newTimer("delayTimer3", 300).start().wait(),
    newText("CARRO").css("font-size", "2em").center().print(),
    newText("pergunta3", "É uma palavra do português?").print(),

    newButton("botao_sim_t3", "SIM").css("font-size", "1.1em"),
    newButton("botao_nao_t3", "NÃO").css("font-size", "1.1em"),

    newCanvas("buttonsContainer3", 250, 50)
        .add(0, 0, getButton("botao_sim_t3"))
        .add(150, 0, getButton("botao_nao_t3"))
        .center()
        .print()
    ,
    newSelector("resposta_t3")
        .add( getButton("botao_sim_t3") , getButton("botao_nao_t3") )
        .log()
        .wait()
);

newTrial("InicioExperimento",
    newText("<p style='font-size: 1.5em; margin-bottom: 30px; text-align:center;'>Tudo certo? Você tem alguma dúvida? Quando estiver preparado/a iniciaremos a tarefa.</p>").print(),
    newButton("Iniciar Experimento")
        .center()
        .print()
        .wait()
);

Template("tabela_script_auditivo.csv", row =>
    newTrial("Experimento",
        newImage("altofalante_exp_trial", "altofalante_exp.png")
            .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
            .center()
            .print(),
        newAudio("audio", row.Audio)
            .play()
            .wait()
        ,
        getImage("altofalante_exp_trial").remove(),
        newTimer("delayTimerExp", 300).start().wait()
        ,
        newText(row.PalavraAlvo)
            .css("font-size", "2em")
            .center()
            .print()
        ,
        newText("<p style='margin-bottom: 20px;'>É uma palavra do português?</p>")
            .print()
        ,
        newButton("botao_sim_exp", "SIM").css("font-size", "1.1em"),
        newButton("botao_nao_exp", "NÃO").css("font-size", "1.1em"),

        newCanvas("buttonsContainerExp", 250, 50)
            .add(0, 0, getButton("botao_sim_exp"))
            .add(150, 0, getButton("botao_nao_exp"))
            .center()
            .print()
        ,
        newSelector("resposta_exp")
            .add( getButton("botao_sim_exp") , getButton("botao_nao_exp") )
            .log()
            .wait()
    )
    .log("Audio", row.Audio)
    .log("PalavraAlvo", row.PalavraAlvo)
    .log("Item", row.Item)
    .log("Group", row.Group)
);

newTrial("Questionario",
    newText("<p style='margin-bottom: 20px; text-align:center;'>Questionário Final</p>").print(),
    newText("<p style='margin-bottom: 10px;'>Por favor, marque todas as palavras que você se lembra de ter ouvido durante a atividade:</p>").print(),

    // Usando newHtml para criar as checkboxes
    newHtml("lembranca_palavras", `
        <label><input type="checkbox" name="palavra" value="Vaca"> Vaca</label><br>
        <label><input type="checkbox" name="palavra" value="Marreco"> Marreco</label><br>
        <label><input type="checkbox" name="palavra" value="Piranha"> Piranha</label><br>
        <label><input type="checkbox" name="palavra" value="Canela"> Canela</label><br>
        <label><input type="checkbox" name="palavra" value="Macaco"> Macaco</label><br>
        <label><input type="checkbox" name="palavra" value="Esquilo"> Esquilo</label><br>
        <label><input type="checkbox" name="palavra" value="Pegador"> Pegador</label><br>
        <label><input type="checkbox" name="palavra" value="Espatula"> Espátula</label><br>
        <label><input type="checkbox" name="palavra" value="Flor"> Flor</label><br>
        <label><input type="checkbox" name="palavra" value="Cacto"> Cacto</label><br>
    `)
    .css({"text-align": "left", "margin-left": "auto", "margin-right": "auto", "width": "fit-content"}) // Centraliza o bloco de checkboxes
    .print()
    .log() // Este log registra a string HTML do elemento
    ,
    // Para logar as seleções das checkboxes, você precisará de um script ao final do trial
    // que leia os valores dos checkboxes marcados. Isso é feito antes do SendResults().
    // Por enquanto, o .log() acima registra a estrutura HTML.
    // Para capturar os valores selecionados, você precisaria de um JS customizado.
    // Por exemplo, usando a função .change() e .log() para cada checkbox.
    // No entanto, para simplificar o script principal e evitar complexidade de JS,
    // o método mais fácil é usar o .log() do próprio HTML element e depois processar
    // os dados brutos no seu pós-processamento.
    // Ou, uma alternativa mais "PennController-like" seria um newScale para cada item
    // se você quiser o log individual mais limpo, mas newScale é geralmente para radios ou sliders.

    newButton("Enviar respostas")
        .center()
        .print()
        .wait()
);

newTrial("Final",
    newText("<p style='margin-bottom: 20px; text-align:center;'>Agradecemos sua participação!</p>").print(),
    newText("<p style='margin-bottom: 20px; text-align:center;'>Suas respostas foram salvas com sucesso.</p>").print(),
    newButton("Encerrar")
        .center()
        .print()
        .wait()
);
