// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'barbaro',
    nome: 'Bárbaro',
    dadoVida: 12,
    descricao: 'Proficiências:\nArmaduras - Todas as armaduras, escudos\nArmas - Simples e marciais\nFerramentas - Nenhuma\nSalvaguarda - Força, Constituição',
    proficiencias: {
        armaduras: ['todas'],
        armas: ['simples',  'marciais'],
        ferramentas: [],
        Salvaguarda: ['for', 'con']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista: ['Acrobacia', 'Adestrar', 'Animais', 'Atletismo', 'História', 'Intuição', 'Intimidação', 'Percepção', 'Sobrevivência'] 
    },
    nivelSubclasse: 3,
    nomeSubclasse: "Caminho Primitivo",
    niveisASI: [4, 8, 12, 16, 19],
    features: {
        1: [
            {nome: "Fúria", desc: "Em batalha, você luta com uma ferocidade primitiva. Vantagem em testes de Força, bônus de dano baseado no nivel de barbaro e resistência a concussão, cortante e perfurante." },
            {nome: "Defesa sem Armadura", desc: "Quando sem armadura, sua CA é 10 + Des + Con.\nPode usar escudo." }
        ],
        2: [
            {nome: "Ataque Descuidado", desc: "Vantagem nos ataques de Força, mas inimigos têm vantagem contra você." }, 
            {nome: "Sentido de Perigo", desc: "Vantagem em testes de Destreza contra efeitos visíveis (armadilhas, magias)." }
        ],
        3: [], // Subclasse
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [
            {nome: "Ataque Extra", desc: "Você pode atacar duas vezes por ação de ataque." }, 
            {nome: "Movimento Rápido", desc: "+3m de deslocamento se não usar armadura pesada." }
        ],
        6: [], 
        7: [{nome: "Instinto Selvagem", desc: "Vantagem na iniciativa. Se surpreso, pode agir se entrar em fúria."}],
        8: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        9: [{nome: "Crítico Brutal (1 dado)", desc: "Adiciona 1 dado extra ao dano crítico."}],
        10: [], // Subclasse
        11: [{nome: "Fúria Implacável", desc: "Se cair a 0 PV em fúria, faça teste de Con CD 10. Se passar, volta a 1 PV. A CD aumente em +5 cada vez que a habilidade é usada. Descanso curto ou longo volta a CD para 10"}],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [{nome: "Crítico Brutal (2 dados)", desc: "Adiciona 2 dados extras ao dano crítico."}],
        14: [], // Subclasse
        15: [{nome: "Fúria Persistente", desc: "Sua fúria só acaba se cair inconsciente ou se você quiser."}],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [{nome: "Crítico Brutal (3 dados)", desc: "Adiciona 3 dados extras ao dano crítico."}],
        18: [{nome: "Força Indomável", desc: "Se total do teste de Força for menor que seu valor de Força, use o valor."}],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Campeão Primitivo", desc: "Força e Constituição aumentam em +4. Máximo agora é 24.",bonusFixo: { for: 4, con: 4 }, novoMaximo: 24}]
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