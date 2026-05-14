// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'bruxo',
    nome: 'Bruxo',
    dadoVida: 8,
    descricao: 'Proficiências:\nArmaduras - Leves\nArmas - Armas simples\nFerramentas - Nenhuma\nSalvaguarda - Sabedoria, Carisma',
    proficiencias: {
        armaduras: ['leves'],
        armas: ['simples'],
        ferramentas: ['nenhuma'],
        Salvaguarda: ['sab', 'car']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista: ['Arcanismo', 'Enganação', 'História', 'Intimidação', 'Investigação', 'Natureza', 'Religião'] 
    },
    nivelSubclasse: 1,
    nomeSubclasse: "Patrono Sobrenatural",
    niveisASI: [4, 8, 12, 16, 19],
    conjuracao: {
        atributoChave: 'car',
        tipo: 'pacto',
        tabela: {
            1: { truques: 2, conhecidas: 2, slots: 1, nivelSlot: 1, invocacoes: 0 },
            2: { truques: 2, conhecidas: 3, slots: 2, nivelSlot: 1, invocacoes: 2 },
            3: { truques: 2, conhecidas: 4, slots: 2, nivelSlot: 2, invocacoes: 2 },
            4: { truques: 3, conhecidas: 5, slots: 2, nivelSlot: 2, invocacoes: 2 },
            5: { truques: 3, conhecidas: 6, slots: 2, nivelSlot: 3, invocacoes: 3 },
            6: { truques: 3, conhecidas: 7, slots: 2, nivelSlot: 3, invocacoes: 3 },
            7: { truques: 3, conhecidas: 8, slots: 2, nivelSlot: 4, invocacoes: 4 },
            8: { truques: 3, conhecidas: 9, slots: 2, nivelSlot: 4, invocacoes: 4 },
            9: { truques: 3, conhecidas: 10, slots: 2, nivelSlot: 5, invocacoes: 5 },
            10: { truques: 4, conhecidas: 10, slots: 2, nivelSlot: 5, invocacoes: 5 },
            11: { truques: 4, conhecidas: 11, slots: 3, nivelSlot: 5, invocacoes: 5 },
            12: { truques: 4, conhecidas: 11, slots: 3, nivelSlot: 5, invocacoes: 6 },
            13: { truques: 4, conhecidas: 12, slots: 3, nivelSlot: 5, invocacoes: 6 },
            14: { truques: 4, conhecidas: 12, slots: 3, nivelSlot: 5, invocacoes: 6 },
            15: { truques: 4, conhecidas: 13, slots: 3, nivelSlot: 5, invocacoes: 7 },
            16: { truques: 4, conhecidas: 13, slots: 3, nivelSlot: 5, invocacoes: 7 },
            17: { truques: 4, conhecidas: 14, slots: 4, nivelSlot: 5, invocacoes: 7 },
            18: { truques: 4, conhecidas: 14, slots: 4, nivelSlot: 5, invocacoes: 8 },
            19: { truques: 4, conhecidas: 15, slots: 4, nivelSlot: 5, invocacoes: 8 },
            20: { truques: 4, conhecidas: 15, slots: 4, nivelSlot: 5, invocacoes: 8 }
        }
    },
    arcanum: {
        11: [6],
        12: [6],
        13: [6, 7],
        14: [6, 7],
        15: [6, 7, 8],
        16: [6, 7, 8],
        17: [6, 7, 8, 9],
        18: [6, 7, 8, 9],
        19: [6, 7, 8, 9],
        20: [6, 7, 8, 9]
    },
    features: {
        1: [{nome: "Patrono Transcendental", desc: "Você conclui uma barganha com um ser transcendental, à sua escolha\nA Arquifada - Seu patrono é um senhor ou senhora das fadas, uma criatura lendária que detém segredos que foram esquecidos antes das raças mortais nascerem.\nO Corruptor - Você realizou um pacto com um corruptor dos planos de existência inferiores, um ser cujos objetivos são o mal, mesmo se você se opor a esses objetivos.\nO Grande Antigo - Seu patrono é uma entidade misteriosa cuja natureza é profundamente alheia ao tecido da realidade. Ela deve ter vindo do Reino Distante, o espaço além da realidade, ou ela pode ser um dos deuses anciãos conhecido apenas nas lendas.\nCada patrono prove habilidades e uma lista de opções de magias unicas."}],
        2: [{ nome: "Invocações Místicas", desc: "Você ganha fragmentos de conhecimento proibido que lhe conferem habilidade mágica permanente."}],
        3: [{nome: "Dádiva do Pacto", desc: "Você adquire um dos Pactos a cima."}],
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [],
        6: [], //Poder do patrono
        7: [],
        8: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        9: [],
        10: [], //Poder do patrono
        11: [{nome: "Arcana Mística 1", desc: "Escolha uma magia de 6° nível da lista de magias de bruxo como sua arcana. Você pode conjurar essa magia arcana uma vez sem gastar um espaço de magia. Você deve terminar um descanso longo antes de poder fazer isso novamente."}],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [{nome: "Arcana Mística 2", desc: "Escolha uma magia de 7° nível da lista de magias de bruxo como sua arcana. Você pode conjurar essa magia arcana uma vez sem gastar um espaço de magia. Você deve terminar um descanso longo antes de poder fazer isso novamente."}],
        14: [], //Poder do patrono
        15: [{nome: "Arcana Mística 3", desc: "Escolha uma magia de 8° nível da lista de magias de bruxo como sua arcana. Você pode conjurar essa magia arcana uma vez sem gastar um espaço de magia. Você deve terminar um descanso longo antes de poder fazer isso novamente."}],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [{nome: "Arcana Mística 4", desc: "Escolha uma magia de 8° nível da lista de magias de bruxo como sua arcana. Você pode conjurar essa magia arcana uma vez sem gastar um espaço de magia. Você deve terminar um descanso longo antes de poder fazer isso novamente."}],
        18: [],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Mestre Místico", desc:  "Você pode gastar 1 minuto suplicando pela ajuda do seu patrono para recuperar todos os espaços de magia gastos da sua característica Magia de Pacto. Uma vez que você recuperou espaços de magia com essa característica, você deve terminar um descanso longo antes de fazê-lo novamente. "}]
    },
    subclasses: [
        {
            id: 'arquifada',
            nome: 'A Arquifada',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Circulo\tMagias\n1°\t\tfogo das fadas, sono\n2°\t\tacalmar emoções, força fantasmagórica\n3°\t\tpiscar, ampliar plantas\n4°\t\tdominar besta, invisibilidade maior\n5°\t\tdominar pessoa, similaridade"},
                    {nome: "Presença Feérica", desc: "Com uma ação, você pode fazer com que cada criatura num cubo de 3 metros centrado em você, faça um teste de resistência de Sabedoria com uma CD igual a de sua magia de bruxo. As criaturas que falharem no teste ficaram enfeitiçadas ou amedrontadas por você (à sua escolha) até o início do seu próximo turno."}
                ],
                6: [{nome: "Névoa de Fuga", desc: "Quando você sofrer dano, você pode usar sua reação para ficar invisível e se teletransportar a até 18 metros para um espaço desocupado que você possa ver. Você permanece invisível até o início do seu próximo turno ou até realizar um ataque ou conjurar uma magia."}],
                10: [{nome: "Defesa Sedutora", desc: "Você não pode ser enfeitiçado e, quando outra criatura tenta enfeitiçá-lo, você pode usar sua reação para tentar reverter o encanto de volta aquela criatura."}],
                14: [{nome: "Delírio Sombrio", desc: "Com um ação, escolha uma criatura que você possa ver a até 18 metros de você. Ela deve ser bem sucedida num teste de resistência de Sabedoria contra a CD da sua magia de bruxo. Se ela falhar, ela ficará enfeitiçada ou amedrontada por você (à sua escolha) por 1 minuto ou até você quebrar sua concentração (como se você estivesse se concentrando em uma magia). Esse efeito termina prematuramente se a criatura sofrer dano. "}]
            }
        },
        {
            id: 'corruptor',
            nome: 'O Corruptor',
            features: {
                1: [
                   {nome: "Lista de magias", desc: "Circulo\tMagias\n1°\t\tmãos flamejantes, comando\n2°\t\tacegueira/surdez, raio ardente\n3°\t\tbola de fogo, névoa fétida\n4°\t\tescudo de fogo, muralha de fogo\n5°\t\tcoluna de chamas, consagrar"}, 
                    {nome: "Bênção do Escuro", desc: "Quando você reduzir uma criatura hostil a 0 pontos de vida, você ganha uma quantidade de pontos de vida temporários igual ao seu modificador de Carisma + seu nível de bruxo"}
                ],
                6: [{nome: "Sorte do Própio Obscuro", desc: "Quando você realizar um teste de habilidade ou um teste de resistência, você pode usar essa característica para adicionar 1d10 a sua jogada."}],
                10: [{nome: "Resistência Demoníaca", desc: "Você pode escolher um tipo de dano quando você terminar um descanso curto ou longo. Você adquire resistência contra esse tipo de dano até você escolher um tipo de dano diferente com essa característica. Dano causado por armas mágicas ou armas de prata ignoram essa resistência"}],
                14: [{nome: "Lançar no Inferno", desc: "Quando você atingir uma criatura com um ataque, você pode usar essa característica para, instantaneamente, transportar o alvo para os planos inferiores. A criatura desaparece e é jogada para um lugar similar a um pesadelo.\nNo final do seu turno, o alvo retorna ao lugar que ela ocupava anteriormente, ou para o espaço desocupado mais próximo. Se o alvo não for um corruptor, ele sofre 10d10 de dano psíquico à medida que toma conta da experiência traumática."}]
            }
        },
        {
            id: 'grande_antigo',
            nome: 'O Grande Antigo',
            features: {
                1: [
                   {nome: "Lista de magias", desc: "Circulo\tMagias\n1°\t\tsussurros dissonantes, riso histérico de Tasha\n2°\t\tdetectar pensamentos, força fantasmagórica\n3°\t\tclarividência, enviar mensagem\n4°\t\tdominar besta, tentáculos negros de Evard\n5°\t\tdominar pessoa, telecinésia"}, 
                    {nome: "Despertar Mente", desc: "Você pode se comunicar telepaticamente com qualquer criatura que você possa ver a até 18 metros de você. Você não precisa partilhar um idioma com a criatura para compreender suas expressões telepáticas, mas a criatura deve ser capaz de compreender pelo menos um idioma."}
                ],
                6: [{nome: "Proteção Entrópica", desc: "Quando uma criatura realizar uma jogada de ataque contra você, você pode usar sua reação para impor desvantagem nesse jogada. Se o ataque errar você, sua próxima jogada de ataque contra essa criatura recebe vantagem se você o fizer antes do final do seu próximo turno. "}],
                10: [{nome: "Escudo de Pensamentos", desc: "Seus pensamentos não podem ser lidos através de telepatia ou outros meios, a não ser que você permita. Você também adquire resistência a dano psíquico e, toda vez que uma criatura causar dano psíquico a você, essa criatura sofre a mesma quantidade de dano que você sofreu. "}],
                14: [{nome: "Criar Lacaio", desc: "Você pode usar sua ação para tocar um humanoide incapacitado. Essa criatura então, ficará enfeitiçada por você até que a magia remover maldição seja conjurada sobre ela, a condição enfeitiçado seja removida dela ou você use essa característica novamente.\nVocê pode se comunicar telepaticamente com a criatura enfeitiçada contanto que ambos estejam no mesmo plano de existência. "}]
            }
        }
    ],

    dadivas: [
        { 
            id: 'pacto_lamina', 
            nome: 'Pacto da Lâmina', 
            desc: 'Você pode usar sua ação para criar uma arma de pacto em sua mão vazia. Você é proficiente com ela.' ,
            funcionalidades: ['criar_arma_pacto']
        },
        { 
            id: 'pacto_corrente', 
            nome: 'Pacto da Corrente', 
            desc: 'Você aprende a magia convocar familiar e pode conjurá-la como um ritual. O familiar pode ser formas especiais (Diabrete, Pseudodragão, quasit ou sprite). Essa magia não conta para o limite de magias',
            magiaExtra: "Convocar Familiar"
        },
        { 
            id: 'pacto_tomo', 
            nome: 'Pacto do Tomo', 
            desc: 'Você recebe um grimório chamado Livro das Sombras. Escolha 3 truques de qualquer lista de classe. Esses truques não contam para o limite de truques',
            modificadores: { bonusTruques: 3 }
        }
    ],
    listaInvocacoes: [
        { id: 'armadura_sombras', nome: 'Armadura das Sombras', req: '-', desc: 'Pode conjurar Armadura Arcana em si mesmo à vontade, sem gastar slot de magia.' },
        { id: 'correntes_carceri', nome: 'Correntes de Cárceri', req: 'nv 15', desc: 'Você pode conjurar imobilizar monstro, à vontade - tendo como alvo um celestial, corruptor ou elemental - sem precisar gastar um espaço de magia ou componentes materiais.' },
        { id: 'encharcar_mente', nome: 'Encharcar a Mente', req: 'nv 5', desc: 'Você pode conjurar lentidão, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'escultor_carne', nome: 'Escultor de Carne', req: 'nv 7', desc: 'Você pode conjurar metamorfose, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'explosao_agonizante', nome: 'Explosão Agonizante', req: 'Rajada Mística', desc: 'Quando você conjura rajada mística, adicione seu modificador de Carisma ao dano causado quando atingir' },
        { id: 'explosao_repulsiva', nome: 'Explosão Repulsiva', req: 'Rajada Mística', desc: 'Quando você atingir uma criatura com uma rajada mística, você pode empurrar a criatura até 3 metros para longe de você em linha reta.' },
        { id: 'idioma_bestial', nome: 'Idioma Bestial', req: '-', desc: 'Pode conjurar falar com animais à vontade sem gastar slot de magia.' },
        { id: 'influencia_enganadora', nome: 'Influencia Enganadora', req: '-', desc: 'Você ganha proficiência nas perícias Enganação e Persuasão. ' },
        { id: 'lacaios_caos', nome: 'Lacaios do Caos', req: 'nv 9', desc: 'Você pode lançar conjurar elemental, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'lamina_sedenta', nome: 'Lâmina Sedenta', req: 'Nv 5, Pacto da Lâmina', desc: 'Você pode atacar duas vezes com sua arma de pacto.' },
        { id: 'lanca_mistica', nome: 'Lança Mística', req: 'Rajada Mística', desc: 'Quando você conjura rajada mística, seu alcance será de 90 metros. ' },
        { id: 'larapio_cinco_destinos', nome: 'Larapio dos Cinco Destinos', req: '-', desc: 'Você pode conjurar perdição, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'livro_segredos', nome: 'Livro de Segredos Antigos', req: 'Pacto do Tomo', desc: 'Você pode inscrever rituais mágicos no seu Livro das Sombras.',
            itensAdicionais: [{ id: 'grimorio_rituais', nome: 'Livro das Sombras (Rituais)', qtd: 1 }],
            modificadores: { bonusTruques: -3 }
        },
        { id: 'mascara_muitas_faces', nome: 'Máscara das Muitas Faces', req: '-', desc: 'Você pode conjurar disfarçar-se, à vontade, sem precisargastar um espaço de magia. ' },
        { id: 'mestre_infindaveis_formas', nome: 'Mestre das Infindáveis Formas', req: 'nv 15', desc: 'Você pode conjurar alterar-se, à vontade, sem precisar gastar um espaço de magia.  ' },
        { id: 'olhar_duas_mentes', nome: 'Olhar de Duas Mentes', req: '-', desc: 'Você pode usar sua ação para tocar um humanoide voluntário e perceber através do seus sentidos até o final do seu próximo turno.\nEnquanto estiver percebendo através dos sentidos de outra criatura, você aproveita os benefícios de todos os sentidos especiais possuídos pela criatura e você fica cego e surdo ao que está a sua volta. ' },
        { id: 'olhos_guardiao_runas', nome: 'Olhos do Guardião das Runas', req: '-', desc: 'Você pode ler todas as escritas. ' },
        { id: 'palavra_terrivel', nome: 'Palavra Terrível', req: 'nv 7', desc: 'Você pode conjurar confusão, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'passo_ascendente', nome: 'Passo Ascendente', req: 'nv 9', desc: 'Você pode conjurar salto em si mesmo, à vontade, sem precisar gastar um espaço de magia ou componentes materiais. ' },
        { id: 'sinal_mau_agouro', nome: 'Sinal de Mau Agouro', req: 'nv 5', desc: 'Você pode conjurar rogar maldição, uma vez, usando um espaço de magia de bruxo.' },
        { id: 'sorvedor_vida', nome: 'Sorvedor de Vida', req: 'nv 12 e Pacto da Lâmina', desc: 'Quando você atingir uma criatura com sua arma do pacto, a criatura sofre uma quantidade de dano necrótico adicional igual ao seu modificador de Carisma' },
        { id: 'sussuros_sepultura', nome: 'Sussuros da Sepultura', req: 'nv 9', desc: 'Você pode conjurar falar com os mortos, à vontade, sem precisar gastar um espaço de magia.' },
        { id: 'sussuros_sedutores', nome: 'Sussuros Sedutores', req: 'nv 7', desc: 'Você pode conjurar compulsão, uma vez, usando um espaço de magia de bruxo. ' },
        { id: 'uno_sombras', nome: 'Uno com as Sombras', req: 'nv 5', desc: 'Quando você estiver em uma área de penumbra ou escuridão, você pode usar sua ação para ficar invisível até se mover ou realizar uma ação ou reação. ' },
        { id: 'vigor_abissal', nome: 'Vigor Abissal', req: 'nv 5', desc: 'Você pode conjurar vitalidade falsa em si mesmo, à vontade, como uma magia de 1° nível, sem precisar gastar um espaço de magia ou componentes materiais.' },
        { id: 'visao_bruxa', nome: 'Visão da Bruxa', req: 'nv 15', desc: 'Você pode ver a verdadeira forma de qualquer metamorfo ou criatura oculta através de magias de ilusão ou transmutação contanto que a criatura esteja a até 9 metros de você e você tenha linha de visão.' },
        { id: 'visao_diabolica', nome: 'Visão Diabólica', req: '-', desc: 'Você pode ver normalmente na escuridão, mágica ou não, a até 36m.' },
        { id: 'visao_mistica', nome: 'Visão Mística', req: '-', desc: 'Você pode conjurar detectar magia, à vontade, sem precisar gastar um espaço de magia' },
        { id: 'visoes_reinos_distantes', nome: 'Visões de Reinos Distantes', req: 'nv 15', desc: 'Você pode conjurar olho arcano, à vontade, sem precisar gastar um espaço de magia.' },
        { id: 'visoes_brumas', nome: 'Visões das Brumas', req: '-', desc: 'Você pode conjurar imagem silenciosa, à vontade, sem precisar gastar um espaço de magia ou componentes materiais.' },
        { id: 'voz_mestre_correntes', nome: 'Voz do Mestre das Correntes', req: 'Pacto da Corrente', desc: 'Você pode se comunicar telepaticamente com seu familiar e perceber através dos sentidos do seu familiar enquanto ambos estiverem no mesmo plano de existência. Além disso, enquanto estiver percebendo através dos sentidos do seu familiar, você também poderá falar através dele com a sua voz, mesmo que seu familiar, normalmente, seja incapaz de falar.' },
    ]
});
