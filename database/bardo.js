// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'bardo',
    nome: 'Bardo',
    dadoVida: 8,
    descricao: 'Proficiências:\nArmaduras - Leves\nArmas - Armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas\nFerramentas - Três instrumentos musicais, à sua escolha\nSalvaguarda - Destreza, Carisma',
    proficiencias: {
        armaduras: ['leves'],
        armas: ['simples', 'bestas de mão', 'espadas longas', 'rapieiras', 'espadas curtas'],
        ferramentas: ['instrumentos musicais'],
        Salvaguarda: ['des', 'car']
    },
    escolhaPericias: { 
        qtd: 3, 
        lista: ['Acrobacia', 'Adestrar Animais', 'Arcanismo', 'Atletismo', 'Atuação', 'Enganação', 'Furtividade', 'História', 'Intimidação', 'Intuição', 'Investigação', 'Medicina', 'Natureza', 'Percepção', 'Persuasão', 'Prestidigitação', 'Religião', 'Sobrevivência'] 
    },
    nivelSubclasse: 3,
    nomeSubclasse: "Colégio de Bardo",
    niveisASI: [4, 8, 12, 16, 19],
    niveisAptidao: [3, 10],
    conjuracao: {
        atributoChave: 'car',
        tipo: 'conhecida',
        // Tabela de progressão: [Truques, Magias Conhecidas, Slots nv1, Slots nv2, ... Slots nv9]
        tabela: {
            1: { truques: 2, conhecidas: 4, slots: [2] },
            2: { truques: 2, conhecidas: 5, slots: [3] },
            3: { truques: 2, conhecidas: 6, slots: [4, 2] },
            4: { truques: 3, conhecidas: 7, slots: [4, 3] },
            5: { truques: 3, conhecidas: 8, slots: [4, 3, 2] },
            6: { truques: 3, conhecidas: 9, slots: [4, 3, 3] },
            7: { truques: 3, conhecidas: 10, slots: [4, 3, 3, 1] },
            8: { truques: 3, conhecidas: 11, slots: [4, 3, 3, 2] },
            9: { truques: 3, conhecidas: 12, slots: [4, 3, 3, 3, 1] },
            10: { truques: 4, conhecidas: 14, slots: [4, 3, 3, 3, 2] },
            11: { truques: 4, conhecidas: 15, slots: [4, 3, 3, 3, 2, 1] },
            12: { truques: 4, conhecidas: 15, slots: [4, 3, 3, 3, 2, 1] },
            13: { truques: 4, conhecidas: 16, slots: [4, 3, 3, 3, 2, 1, 1] },
            14: { truques: 4, conhecidas: 18, slots: [4, 3, 3, 3, 2, 1, 1] },
            15: { truques: 4, conhecidas: 19, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            16: { truques: 4, conhecidas: 19, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            17: { truques: 4, conhecidas: 20, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
            18: { truques: 4, conhecidas: 22, slots: [4, 3, 3, 3, 3, 1, 1, 1, 1] },
            19: { truques: 4, conhecidas: 22, slots: [4, 3, 3, 3, 3, 2, 1, 1, 1] },
            20: { truques: 4, conhecidas: 22, slots: [4, 3, 3, 3, 3, 2, 2, 1, 1] }
        }
    },
    features: {
        1: [{nome: "Inspiração de Bardo 1", desc: "Você pode usar uma ação bônus no seu turno para escolher uma outra criatura a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, 1d6\nUma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que ela fizer.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo."}],
        2: [
            {nome: "Versatilidade", desc: "Você pode adicionar metade do seu bônus de proficiência, arredondado para baixo, em qualquer teste de habilidade que você fizer que ainda não possua seu bônus de proficiência."},
            {nome: "Canção de Descanço 1", desc: "Em um descanço curto pode adicionar 1d6 de pv adicional a você, e a qualquer um que possa te ouvir." }
        ],
        3: [{nome: "Aptidão 1", desc: "Escolha duas das perícias em que você é proficiente. Seu bônus de proficiência é dobrado nelas."}],
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [
            {nome: "Inspiração de Bardo 2", desc: "Você pode usar uma ação bônus no seu turno para escolher uma outra criatura a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, 1d8\nUma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que ela fizer.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo."}, 
            {nome: "Fonte de Inspiração", desc: "Você recupera todas as utilizações gastas da sua Inspiração de Bardo quando você termina um descanso curto ou longo." }
        ],
        6: [{nome: "Canção da Proteção", desc: " Com uma ação, você pode começar uma atuação que dura até o fim do seu próximo turno. Durante esse tempo, você e qualquer criatura amigável a até 9 metros de você terá vantagem em testes de resistência para não ser amedrontado ou enfeitiçado"}], 
        7: [],
        8: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        9: [{nome: "Canção de Descanço 2", desc: "Em um descanço curto pode adicionar 1d8 de pv adicional a você, e a qualquer um que possa te ouvir." }],
        10: [
            {nome: "Inspiração de Bardo 3", desc: "Você pode usar uma ação bônus no seu turno para escolher uma outra criatura a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, 1d10\nUma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que ela fizer.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo."},
            {nome: "Aptidão 2", desc: "Escolha duas das perícias em que você é proficiente. Seu bônus de proficiência é dobrado nelas."},
            {nome: "Segredos mágicos 1", desc:"Escolha duas magias de qualquer classe, incluindo essa."}
        ],
        11: [],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [{nome: "Canção de Descanço 3", desc: "Em um descanço curto pode adicionar 1d10 de pv adicional a você, e a qualquer um que possa te ouvir." }],
        14: [{nome: "Segredos mágicos 2", desc:"Escolha duas magias de qualquer classe, incluindo essa."}],
        15: [{nome: "Inspiração de Bardo 4", desc: "Você pode usar uma ação bônus no seu turno para escolher uma outra criatura a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, 1d12\nUma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que ela fizer.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo."}],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [{nome: "Canção de Descanço 4", desc: "Em um descanço curto pode adicionar 1d12 de pv adicional a você, e a qualquer um que possa te ouvir." }],
        18: [{nome: "Segredos mágicos 3", desc:"Escolha duas magias de qualquer classe, incluindo essa."}],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Inspiração Superior", desc: "Quando você rolar iniciativa e não tiver nenhum uso restante de Inspiração de Bardo, você recupera um uso"}]
    },
    subclasses: [
        {
            id: 'colegio_conhecimento',
            nome: 'Colégio do Conhecimento',
            features: {
                3: [
                    {nome: "Proeficiência Adicional", desc: "Você ganha proficiência em três perícias, à sua escolha."},
                    {nome: "Palavras de Interrupção", desc: "Quando uma criatura que você pode ver a até 18 metros de você realizar uma jogada de ataque, um teste de habilidade ou uma jogada de dano, você pode usar sua reação para gastar um uso de Inspiração de Bardo, rolando o dado de Inspiração de Bardo e subtraindo o número rolado da rolagem da criatura."}
                ],
                6: [{nome: "Segredos Mágicos Adicionais", desc: "Você aprende duas magias, à sua escolha, de qualquer classe. Essas magias não contam no numero maximo de magias que você conhece."}],
                14: [{nome: "Perícia Inigualável", desc: "Quando você fizer um teste de habilidade, você pode gastar um uso de Inspiração de Bardo. Role o dado de Inspiração de Bardo e adicione o número rolado ao seu teste de habilidade."}]
            }
        },
        {
            id: 'colegio_bravura',
            nome: 'Colégio da Bravura',
            features: {
                3: [
                    {nome: "Proeficiência Adicional", desc: "Você adquire proficiência com armadura médias, escudos e armas marciais."}, 
                    {nome: "Inspiração em Combate", desc: "Uma criatura que possuir um dado de Inspiração de Bardo seu, pode rolar esse dado e adicionar o número rolado a uma jogada de dano que ele tenha acabado de fazer. Alternativamente, quando uma jogada de ataque for realizada contra essa criatura, ela pode usar sua reação para rolar o dado de Inspiração de Bardo e adicionar o número rolado a sua CA contra esse ataque"}
                ],
                6: [{nome:"Ataque Extra", desc: "Você pode atacar duas vezes por ação de ataque."}],
                14: [{nome: "Magia de Batalha", desc: "Quando você usar sua ação para conjurar uma magia de bardo, você pode realizar um ataque com arma com uma ação bônus."}]
            }
        }
    ]
});