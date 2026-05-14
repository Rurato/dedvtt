// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

const LISTA_METAMAGIAS = [
    { 
        id: 'acelerada', 
        nome: 'Magia Acelerada', 
        desc: 'Quando você conjurar uma magia que tenha tempo de conjuração de 1 ação, você pode gastar 2 pontos de feitiçaria para mudar o tempo de conjuração para 1 ação bônus.\nCusto: 2 Pontos de Feitiçaria.' 
    },
    {
        id: 'aumentada', 
        nome: 'Magia Aumentada', 
        desc: 'Quando você conjura uma magia que obriga uma criatura a realizar um teste de resistência contra o seu efeito, você pode dar desvantagem a um alvo da magia no primeiro teste de resistência feito contra ela.\nCusto: 3 Pontos de Feitiçaria.' 
    },
    { 
        id: 'cuidadosa', 
        nome: 'Magia Cuidadosa', 
        desc: 'Quando você conjurar uma magia que obriga outras criaturas a realizarem um teste de resistência, você pode proteger algumas dessas criaturas da força total da magia. escolhe um número dessas criaturas até o seu modificador de Carisma. Uma criatura escolhida passa automaticamente no teste de resistência contra a magia. \nCusto: 1 Ponto de Feitiçaria.' 
    },
    { 
        id: 'distante', 
        nome: 'Magia Distante', 
        desc: 'Quando você conjurar uma magia que tenha distância de 1,5 metro ou maior, você pode dobrar o alcance da magia. Quando você conjura uma magia com alcance de toque, você pode mudar o alcance da magia para 9 metros. \nCusto: 1 Ponto de Feitiçaria.' 
    },
    { 
        id: 'duplicada', 
        nome: 'Magia Duplicada', 
        desc: 'Quando você conjurar uma magia que seja incapaz de ter mais de uma criatura como alvo no nível atual dela e não possua alcance pessoal, você pode gastar um número de pontos de feitiçaria igual ao nível da magia para ter uma segunda criatura, no alcance da magia, como alvo (1 ponto de feitiçaria se a magia for um truque). \nCusto: Min 1 Ponto de Feitiçaria.' 
    },
    { 
        id: 'estendida', 
        nome: 'Magia Estendida', 
        desc: 'Quando você conjurar uma magia que tenha duração de 1 minuto ou maior, você pode dobrar sua duração, até um máximo de 24 horas. \nCusto: 1 Ponto de Feitiçaria.' 
    },
    { 
        id: 'potencializada', 
        nome: 'Magia Potencializada', 
        desc: 'Quando você rola o dano de uma magia, você pode jogar novamente um número de dados de dano, até seu modificador de Carisma. Você deve usar a nova rolagem.\nVocê pode usar Magia Potencializada mesmo que você já tenha usado uma opção diferente de Metamágica durante a conjuração da magia. \nCusto: 1 Ponto de Feitiçaria.' 
    },
    { 
        id: 'sutil', 
        nome: 'Magia Sutil', 
        desc: 'Quando você conjurar uma magia, você pode conjurá-la sem qualquer componente somático ou verbal. \nCusto: 1 Ponto de Feitiçaria.' 
    }
];

window.DB_CLASSES.push({
    id: 'feiticeiro',
    nome: 'Feiticeiro',
    dadoVida: 6,
    descricao: 'Proficiências:\nArmaduras - Nenhuma.\nArmas - Adagas, dardos, fundas, bordões e bestas leves\nFerramentas - Nenhuma \nSalvaguarda - Constituição, Carisma',
    proficiencias: {
        armaduras: [],
        armas: ['adagas', 'dardos', 'fundas', 'bordoes', 'bestas leves'],
        ferramentas: [],
        Salvaguarda: ['con', 'car']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista:  ['Arcanismo', 'Enganação', 'Intuição', 'Intimidação', 'Persuasão', 'Religião' ]
    },
    nivelSubclasse: 1,
    nomeSubclasse: "Origem de Feitiçaria",
    niveisASI: [4, 8, 12, 16, 19],
    conjuracao: {
        atributoChave: 'car',
        tipo: 'conhecida',
        // Tabela de progressão: [Truques, Magias Conhecidas, Slots nv1, Slots nv2, ... Slots nv9]
        tabela: {
            1: { truques: 4, conhecidas: 2, slots: [2], pontos: 0 },
            2: { truques: 4, conhecidas: 3, slots: [3], pontos: 2 },
            3: { truques: 4, conhecidas: 4, slots: [4, 2], pontos: 3 },
            4: { truques: 5, conhecidas: 5, slots: [4, 3], pontos: 4 },
            5: { truques: 5, conhecidas: 6, slots: [4, 3, 2], pontos: 5 },
            6: { truques: 5, conhecidas: 7, slots: [4, 3, 3], pontos: 6 },
            7: { truques: 5, conhecidas: 8, slots: [4, 3, 3, 1], pontos: 7 },
            8: { truques: 5, conhecidas: 9, slots: [4, 3, 3, 2], pontos: 8 },
            9: { truques: 5, conhecidas: 10, slots: [4, 3, 3, 3, 1], pontos: 9 },
            10: { truques: 6, conhecidas: 11, slots: [4, 3, 3, 3, 2], pontos: 10 },
            11: { truques: 6, conhecidas: 12, slots: [4, 3, 3, 3, 2, 1], pontos: 11 },
            12: { truques: 6, conhecidas: 12, slots: [4, 3, 3, 3, 2, 1], pontos: 12 },
            13: { truques: 6, conhecidas: 13, slots: [4, 3, 3, 3, 2, 1, 1], pontos: 13 },
            14: { truques: 6, conhecidas: 13, slots: [4, 3, 3, 3, 2, 1, 1], pontos: 14 },
            15: { truques: 6, conhecidas: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1], pontos: 15 },
            16: { truques: 6, conhecidas: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1], pontos: 16 },
            17: { truques: 6, conhecidas: 15, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1], pontos: 17 },
            18: { truques: 6, conhecidas: 15, slots: [4, 3, 3, 3, 3, 1, 1, 1, 1], pontos: 18 },
            19: { truques: 6, conhecidas: 15, slots: [4, 3, 3, 3, 3, 2, 1, 1, 1], pontos: 19 },
            20: { truques: 6, conhecidas: 15, slots: [4, 3, 3, 3, 3, 2, 2, 1, 1], pontos: 20 }
        }
    },
    
    features: {
        1: [],
        2: [{nome: "Conjuração Flexível", desc: "Você pode transformar pontos de fetiçaria disponíveis em um espaço de magia, com uma ação bônus, no seu turno.\n\nNível\tCusto\n1°\t\t2\n2°\t\t3\n3°\t\t5\n4°\t\t6\n5°\t\t7\n\nCom uma ação bônus, no seu turno, você pode gastar um espaço de magia disponível e ganhar uma quantidade de pontos de feitiçaria igual ao nível do espaço."}],
        3: [{id: 'metamagia_nv3', nome: "Metamagia 1", desc: "Você adquire a habilidade de distorcer suas magias para se adequarem às suas necessidades. Você ganha duas opções de Metamágica, à sua escolha. ",
                configSelecao: {
                    idUnico: 'meta_escolha_nv3', // ID único para salvar as escolhas
                    titulo: 'Escolha 2 Metamagias',
                    maximo: 2,
                    opcoesObj: LISTA_METAMAGIAS // Usa a lista que criamos lá em cima
                }
            }],
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [],
        6: [], //Sub-classe
        7: [],
        8: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        9: [],
        10: [{id: 'metamagia_nv10', nome: "Metamagia 2", desc: "Você adquire mais uma Metamágica.",
                configSelecao: {
                    idUnico: 'meta_escolha_nv10', // ID único para salvar as escolhas
                    titulo: 'Escolha 1 Metamagias',
                    maximo: 1,
                    opcoesObj: LISTA_METAMAGIAS // Usa a lista que criamos lá em cima
                }
            }],
        11: [],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [],
        14: [],
        15: [],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [{id: 'metamagia_nv17', nome: "Metamagia 3", desc: "Você adquire mais uma Metamágica.",
                configSelecao: {
                    idUnico: 'meta_escolha_nv17', // ID único para salvar as escolhas
                    titulo: 'Escolha 1 Metamagias',
                    maximo: 1,
                    opcoesObj: LISTA_METAMAGIAS // Usa a lista que criamos lá em cima
                }
            }],
        18: [],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Restauração Mística", desc: "Você recupera 4 pontos de feitiçaria gastos sempre que você terminar um descanso curto. "}]
    },
    subclasses: [
        {
            id: 'linhagem_draconica',
            nome: 'Linhagem Dracônica',
            features: {
                1: [
                    {id: 'ancestral_draconico', nome: "Ancestral Dracônico", desc: "Você escolhe um tipo de dragão como seu ancestral. O tipo de dano associado a cada dragão será usado por características que você ganhará posteriormente. \nVocê pode falar, ler e escrever em Dracônico. Além disso, sempre que você fizer um teste de Carisma quando estiver interagindo com dragões, seu bônus de proficiência será dobrado se ele se aplicar a esse teste.", configSelecao: {
                        idUnico: 'draconico', 
                        titulo: 'Escolha seu ancestral',
                        maximo: 1,
                        opcoesObj: [
                            {id: "azul", nome:"Azul", desc: "Tipo de dano: Elétrico"},
                            {id: "branco", nome:"Branco", desc: "Tipo de dano: Frio"},
                            {id: "bronze", nome:"Bronze", desc: "Tipo de dano: Elétrico"},
                            {id: "cobre", nome:"Cobre", desc: "Tipo de dano: Acido"},
                            {id: "latao", nome:"Latão", desc: "Tipo de dano: Fogo"},
                            {id: "negro", nome:"Negro", desc: "Tipo de dano: Acido"},
                            {id: "ouro", nome:"Ouro", desc: "Tipo de dano: Fogo"},
                            {id: "prata", nome:"Prata", desc: "Tipo de dano: Frio"},
                            {id: "verde", nome:"Verde", desc: "Tipo de dano: Veneno"},
                            {id: "vermelho", nome:"Vermelho", desc: "Tipo de dano: Fogo"},
                        ]
                }},
                    {nome: "Resiliência Dracônica", desc: "A medida que a magia flui pelo seu corpo, ela faz com que os traços físicos do seu ancestral dracônico surjam. No 1° nível, seu máximo de pontos de vida aumenta em 1 e aumenta em mais 1 sempre que você ganhar um nível na classe.\nAlém disso, partes da sua pele são cobertas com minúsculas escamas lustrosas de dragão. Quando você não estiver utilizando armadura, sua CA será igual a 13 + seu modificador de Destreza. "}
                ],
                6: [{nome: "Afinidade Elemental", desc: "Quando você conjurar uma magia que cause dano do tipo associado ao seu ancestral dracônico, adicione seu modificador de Carisma ao dano. Ao mesmo tempo, você pode gastar 1 ponto de feitiçaria para ganhar resistência a esse tipo de dano por 1 hora. O bônus de dano se aplica a uma única rolagem de dano da magia, não à diversas rolagens. "}],
                14:[{nome: "Asas de Dragão", desc: "Você adquire a habilidade de brotar um par de asas de dragão das suas costas, ganhando deslocamento de voo igual ao seu deslocamento atual. Você pode criar essas asas com uma ação bônus, no seu turno. Elas duram até que você as dissipe, com uma ação bônus no seu turno.\nVocê não pode manifestar suas asas quando estiver vestindo uma armadura, a não ser que a armadura seja feita para acomodá-las, e roupas que não forem feitas para se acomodar às suas asas devem ser destruídas quando você manifestá-las."}],
                18: [{nome: "Presença Dracônica", desc: "Com uma ação, você pode gastar 5 pontos de feitiçaria para recorrer a esse poder e exalar uma aura de admiração ou medo (à sua escolha) a uma distância de 18 metros. Por 1 minuto ou até você perder sua concentração (como se você tivesse conjurado uma magia de concentração), cada criatura hostil que começar seu turno nessa aura, deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçada (se você escolheu admiração) ou amedrontada (se você escolheu medo) até a aura terminar. Uma criatura que seja bem sucedida no teste de resistência ficará imune a sua aura por 24 horas."}]
            }
        },
        {
            id: 'magia_selvagem',
            nome: 'Magia Selvagem',
            features: {
                1: [
                    {nome: "Surto de Magia Selvagem", desc: "Imediatamente após você conjurar uma magia de feiticeiro de 1° nível ou superior, o Mestre pode solicitar que você role um d20. Se você rolar um 1, role na tabela Surto de Magia Selvagem para criar um efeito mágico aleatório. Um surto só pode ocorrer uma vez por turno. Se o efeito de um surto for uma magia, ela é muito selvagem para ser afetada por Metamagia. Se ela normalmente exige concentração, nesse caso não será necessário; a magia permanece por sua duração total."},
                    {nome: "Marés do Caos", desc: "Você pode manipular as forças do acaso e do caos para ganhar vantagem em uma jogada de ataque, teste de habilidade ou teste de resistência.\nA qualquer momento, antes de recuperar o uso dessa característica, o Mestre pode rolar na tabela Surto de Magia Selvagem, imediatamente após você conjurar uma magia de feiticeiro de 1° nível ou superior."}
                ],
                6: [{nome: "Dobrar a Sorte", desc: "Quando outra criatura que você possa ver realizar uma jogada de ataque, um teste de habilidade ou um teste de resistência, você pode usar sua reação para gastar 2 pontos de feitiçaria para rolar 1d4 e aplicar o número rolado como um bônus ou uma penalidade (à sua escolha) na jogada da criatura. "}],
                14:[{nome: "Caos Controlado", desc: "Você ganha um controle modico sobre seus surtos de magia selvagem. Sempre que você rolar a tabela Surto de Magia Selvagem, você pode rolar duas vezes e usar qualquer resultado. "}],
                18: [{nome: "Bombardeio de Magia", desc: "Quando você rolar o dano de uma magia e rolar o maior dano possível em qualquer dado, escolha um desses dados, role ele novamente e adicione o valor rolado ao dano. Você pode usar essa característica apenas uma vez por rodada. "}]
            }
        }
    ]
});