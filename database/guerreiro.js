// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'guerreiro',
    nome: 'Guerreiro',
    dadoVida: 10,
    descricao: 'Proficiências:\nArmaduras - Leves, médias e escudos\nArmas - Simples e marciais\nFerramentas - Nenhuma\nSalvaguarda - Força, Constituição',
    proficiencias: {
        armaduras: ['leves', 'medias', 'escudos'],
        armas: ['simples',  'marciais'],
        ferramentas: [],
        Salvaguarda: ['for', 'con']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista: ['Adestrar Animais', 'Atletismo', 'Intimidação', 'Natureza', 'Percepção', 'Sobrevivência'] 
    },
    nivelSubclasse: 3,
    nomeSubclasse: "Arquétipo Marcial",
    niveisASI: [4, 6, 8, 12, 14, 16, 19],
    features: {
        1: [
            {nome: "Estilo de Luta", desc: "Você adota um estilo de combate particular que será sua especialidade. ",configSelecao: {
                            idUnico: 'estilo_luta', 
                            titulo: 'Escolha seu Estilo de Luta',
                            maximo: 1,
                            opcoesObj: [
                                {id: "arquearia", nome: "Arquearia", desc: "Você ganha +2 de bônus nas jogadas de ataque realizadas com uma arma de ataque à distância. "},
                                {id: "armas_grandes", nome: "Combate com Armas Grandes", desc: "Quando você rolar um 1 ou um 2 num dado de dano de um ataque com arma corpo-a-corpo que você esteja empunhando com duas mãos, você pode rolar o dado novamente e usar a nova rolagem, mesmo que resulte em 1 ou 2. A arma deve ter a propriedade duas mãos ou versátil para ganhar esse benefício. "},
                                {id: "duas_armas", nome: "Combate com Duas Armas", desc: "Quando você estiver engajado em uma luta com duas armas, você pode adicionar o seu modificador de habilidade de dano na jogada de dano de seu segundo ataque. "},
                                {id: "defesa", nome: "Defesa", desc: "Enquanto estiver usando armadura, você ganha +1 de bônus em sua CA."},
                                {id: "duelismo", nome: "Duelismo", desc: "Quando você empunhar uma arma de ataque corpo-acorpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma. "},
                                {id: "protecao", nome: "Proteção", desc: "Quando uma criatura que você possa ver atacar um alvo que esteja a até 1,5 metro de você, você pode usar sua reação para impor desvantagem na jogada de ataque da criatura. Você deve estar empunhando um escudo. "},
                            ]
                        }},
            {nome: "Retomar Fôlego", desc: "Você possui uma reserva de estamina e pode usá-la para proteger a si mesmo contra danos. No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a 1d10 + seu nível de guerreiro. " }
        ],
        2: [{nome: "Surto de Ação (1 uso)", desc: "Durante o seu turno, você pode realizar uma ação adicional juntamente com sua ação e possível ação bônus." }],
        3: [], // Subclasse
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [{nome: "Ataque Extra 1", desc: "Você pode atacar duas vezes por ação de ataque." }],
        6: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }], 
        7: [],
        8: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        9: [{nome: "Indomável (1 uso)", desc: "Você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo. "}],
        10: [], // Subclasse
        11: [{nome: "Ataque Extra 2", desc: "Você pode atacar três vezes por ação de ataque." }],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [{nome: "Indomável (2 usos)", desc: "Você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo. "}],
        14: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }], // Subclasse
        15: [],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [
            {nome: "Surto de Ação (2 usos)", desc: "Durante o seu turno, você pode realizar uma ação adicional juntamente com sua ação e possível ação bônus." },
            {nome: "Indomável (3 usos)", desc: "Você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo. "}
        ],
        18: [],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Ataque Extra 3", desc: "Você pode atacar quatro vezes por ação de ataque." }]
    },
    subclasses: [
        {
            id: 'caminho_furioso',
            nome: 'Caminho do Furioso',
            features: {
                3: [{nome: "Frenesi", desc: "Pode fazer um ataque corpo-a-corpo como ação bônus enquanto estiver em fúria, mas sofre exaustão quando ela acaba."}],
                6: [{nome: "Fúria Inconsciente", desc: "Você não pode ser enfeitiçado ou amedrontado enquanto estiver em fúria. Se você estava enfeitiçado ou amedrontado quando entrou em fúria, o efeito é suspenso pela duração da fúria. "}],
                10: [{nome: "Presença Intimidante", desc: "Amedronta inimigos próximos (CD igual a 8 + seu bônus de proficiência + seu modificador de Carisma)"}],
                14: [{nome: "Retaliação", desc: "Se levar dano corpo-a-corpo, pode usar reação para atacar quem bateu."}]
            }
        },
        {
            id: 'caminho_totemico',
            nome: 'Caminho do Guerreiro Totêmico',
            features: {
                3: [{nome: "Conselheiro Espiritual", desc: "Você recebe a habilidade de conjurar as magias sentido bestial e falar com animais"}, {nome: "Totem Espiritual", desc: "Você escolhe um totem espiritual e ganha suas características.",
                    configSelecao: {
                            idUnico: 'totem_espirito_nv3', 
                            titulo: 'Escolha seu Totem',
                            maximo: 1,
                            opcoesObj: [
                                {id: "urso", nome: "Urso", desc: "Quando em fúria, você adquire resistência a todos os tipos de dano, exceto dano psíquico."},
                                {id: "aguia", nome: "Águia", desc: "Quando estiver em fúria e não estiver vestindo uma armadura pesada, as outras criaturas terão desvantagem nas jogadas de ataque de oportunidade contra você e você pode usar a ação de Disparada como uma ação bônus no seu turno."},
                                {id: "lobo", nome: "Lobo", desc: "Quando estiver em fúria, seus amigos tem vantagem nas jogadas de ataque corpo-a-corpo realizadas contra qualquer criatura a 1,5 metro de você que seja hostil a você."}]
                        }
                }],
                6: [{nome: "Aspecto da Besta", desc: "Você pode escolher o mesmo animal que selecionou no 3° nível ou um diferente.",
                    configSelecao: {
                            idUnico: 'totem_aspecto_nv6', 
                            titulo: 'Escolha seu Aspecto',
                            maximo: 1,
                            opcoesObj: [
                                {id: "urso", nome: "Urso", desc: "Sua capacidade de carga é dobrada e você tem vantagem em testes de Força realizados para empurrar, puxar, erguer ou quebrar objetos."},
                                {id: "aguia", nome: "Águia", desc: "Você pode ver a até 1,6 km sem dificuldade, e a penumbra não impõem desvantagem nos seus testes de Sabedoria (Percepção)."},
                                {id: "lobo", nome: "Lobo", desc: "Você pode rastrear outras criaturas quando estiver viajando a passo rápido e você pode se mover furtivamente quando estiver viajando a passo normal."}]
                        }
                }],
                10: [{nome: "Andarilho Espiritual", desc: "Você pode conjurar a magia comunhão com a natureza"}],
                14: [{nome: "Sintonia Totêmica", desc: "Você pode escolher o mesmo animal que selecionou anteriormente ou um diferente.",
                    configSelecao: {
                            idUnico: 'totem_sintonia_nv14', 
                            titulo: 'Escolha a Sintonia',
                            maximo: 1,
                            opcoesObj: [
                                {id: "urso", nome: "Urso", desc: "Quando estiver em fúria, qualquer criatura a até 1,5 metro de você que for hostil a você terá desvantagem nas jogadas de ataque contra outros alvos além de você ou outro personagem com essa característica. Um inimigo é imune a esse efeito se ele não puder ver ou ouvir você ou caso ele não possa ser amedrontado."},
                                {id: "aguia", nome: "Águia", desc: "Quando estiver em fúria, você adquire um deslocamento de voo igual ao seu deslocamento de caminhada. Esse benefício funciona apenas em seu turno."},
                                {id: "lobo", nome: "Lobo", desc: "Quando estiver em fúria, você pode usar uma ação bônus no seu turno para derrubar uma criatura Grande ou menor no chão quando você atingi-la com um ataque corpo-a-corpo com arma."}]
                        }
                }]
            }
        }
    ]
});