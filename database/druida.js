// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'druida',
    nome: 'Druida',
    dadoVida: 8,
    descricao: 'Proficiências:\nArmaduras - Leves, Médias e Escudos (druidas não irão vestir armaduras ou usar escudos feitos de metal).\nArmas - Clavas, adagas, dardos, azagaias, maças, bordões, cimitarras, foices, fundas e lanças.  \nFerramentas - Kit de herbalismo \nSalvaguarda - Sabedoria, Inteligência',
    proficiencias: {
        armaduras: ['leves', 'medias', 'escudos'],
        armas: ['Clavas', 'adagas', 'dardos', 'azagaias', 'maças', 'bordões', 'cimitarras', 'foices', 'fundas', 'lanças'],
        ferramentas: ['Kit_herbalismo'],
        Salvaguarda: ['sab', 'int']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista:  ['Adestrar Animais', 'Arcanismo', 'Intuição', 'Medicina', 'Natureza', 'Percepção', 'Religião', 'Sobrevivência']
    },
    nivelSubclasse: 2,
    nomeSubclasse: "Círculo Druídico",
    niveisASI: [4, 8, 12, 16, 19],
    conjuracao: {
        atributoChave: 'sab',
        tipo: 'preparada',
        // Tabela de progressão: [Truques, Magias Conhecidas, Slots nv1, Slots nv2, ... Slots nv9]
        tabela: {
            1: { truques: 2, slots: [2] },
            2: { truques: 2, slots: [3] },
            3: { truques: 2, slots: [4, 2] },
            4: { truques: 3, slots: [4, 3] },
            5: { truques: 3, slots: [4, 3, 2] },
            6: { truques: 3, slots: [4, 3, 3] },
            7: { truques: 3, slots: [4, 3, 3, 1] },
            8: { truques: 3, slots: [4, 3, 3, 2] },
            9: { truques: 3, slots: [4, 3, 3, 3, 1] },
            10: { truques: 4, slots: [4, 3, 3, 3, 2] },
            11: { truques: 4, slots: [4, 3, 3, 3, 2, 1] },
            12: { truques: 4, slots: [4, 3, 3, 3, 2, 1] },
            13: { truques: 4, slots: [4, 3, 3, 3, 2, 1, 1] },
            14: { truques: 4, slots: [4, 3, 3, 3, 2, 1, 1] },
            15: { truques: 4, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            16: { truques: 4, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            17: { truques: 4, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
            18: { truques: 4, slots: [4, 3, 3, 3, 3, 1, 1, 1, 1] },
            19: { truques: 4, slots: [4, 3, 3, 3, 3, 2, 1, 1, 1] },
            20: { truques: 4, slots: [4, 3, 3, 3, 3, 2, 2, 1, 1] }
        }
    },
    features: {
        1: [{nome: "Druídico", desc: "Você conhece o Druídico, o idioma secreto dos druidas.\nVocê pode falar esse idioma e usá-lo para deixar mensagens escondidas. Você e outros que conheçam esse idioma automaticamente veem tais mensagens. Outros perceberão a presença da mensagem se passarem num teste de Sabedoria (Percepção) CD 15, mas não conseguirão decifrá-lo sem magia. "}],
        2: [
            {nome: "Forma Selvagem 1", desc: "Você pode usar sua ação para assumir magicamente a forma de uma besta que você já tenha visto antes. Você pode usar essa característica duas vezes.\nSeu nível de druida determina as bestas em que você pode se transformar, como mostrado na tabela Formas de Besta. No 2° nível, por exemplo, você pode se transformar em qualquer besta que possui nível de desafio 1/4 ou inferior que não possua deslocamento de voo ou natação.\n\nNível\tND Max\tLimitações\n2°\t\t1/4\t\tSem voo ou natação\n4°\t\t1/2\t\tSem voo\n8°\t\t1\t\t-"},
            {nome: "Círculo Druídico", desc: "Você escolhe se identificar com um círculo de druidas: o Círculo da Terra ou o Círculo da Lua"},
        ],
        3: [],
        4: [
            {nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." },
            {nome: "Forma Selvagem 2", desc: "Você pode usar sua ação para assumir magicamente a forma de uma besta que você já tenha visto antes. Você pode usar essa característica duas vezes.\nSeu nível de druida determina as bestas em que você pode se transformar, como mostrado na tabela Formas de Besta. No 2° nível, por exemplo, você pode se transformar em qualquer besta que possui nível de desafio 1/4 ou inferior que não possua deslocamento de voo ou natação.\n\nNível\tND Max\tLimitações\n2°\t\t1/4\t\tSem voo ou natação\n4°\t\t1/2\t\tSem voo\n8°\t\t1\t\t-"}
        ],
        5: [],
        6: [], 
        7: [],
        8: [
            {nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." },
            {nome: "Forma Selvagem 2", desc: "Você pode usar sua ação para assumir magicamente a forma de uma besta que você já tenha visto antes. Você pode usar essa característica duas vezes.\nSeu nível de druida determina as bestas em que você pode se transformar, como mostrado na tabela Formas de Besta. No 2° nível, por exemplo, você pode se transformar em qualquer besta que possui nível de desafio 1/4 ou inferior que não possua deslocamento de voo ou natação.\n\nNível\tND Max\tLimitações\n2°\t\t1/4\t\tSem voo ou natação\n4°\t\t1/2\t\tSem voo\n8°\t\t1\t\t-"}
        ],
        9: [],
        10: [],
        11: [{nome: "Destruir Mortos-Vivos 3", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [],
        14: [],
        15: [],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [],
        18: [
            {nome: "Corpo Atemporal", desc: "A magia primordial que você controla faz com que você envelheça mais lentamente. Para cada 10 anos que passarem, seu corpo envelhece apenas 1."},
            {nome:"Magias da Besta", desc: "Você pode conjurar muitas das suas magias em qualquer forma que assumir usando a Forma Selvagem. Você pode realizar os componentes somáticos e verbais de uma magia de druida na forma de besta, mas você não é capaz de prover os componentes materiais."}
        ],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Arquidruida", desc: "Seus pedidos de intervenção funcionam automaticamente, sem necessidade de rolagem de dados."}]
    },
    subclasses: [
        {
            id: 'circulo_terra',
            nome: 'Círculo da Terra',
            features: {
                2: [
                    {id: 'druida_truque_bonus', nome: "Truque Adicional", desc: "Você aprende um truque de druida adicional, à sua escolha.",
                    modificadores: { bonusTruques: 1 }},
                    {nome: "Recuperação Natural", desc: "Durante um descanso curto, você escolhe espaços de magia gastos para recuperar. O espaço de magia pode ter um nível combinado igual ou menor que metade do seu nível de druida (arredondado para baixo) e, nenhum dos espaços pode ser de uma magia de 6° nível ou superior.\nPor exemplo, quando você for um druida de 4° nível, você pode recuperar até dois níveis em espaços de magia. Você pode recuperar, tanto uma magia de 2° nível, quanto duas magias de 1° nível."}
                ],
                3: [{nome: "Magias de Círculo", desc: "No 3°, 5°, 7° e 9° nível, você ganha acesso a magias de círculo ligadas ao terreno em que você se tornou druida. Escolha o terreno: ártico, costa, deserto, floresta, montanha, pântano, planície ou subterrâneo, e consulte a lista de magias associada", 
                    configSelecao: {
                            idUnico: 'magias_circulo', 
                            titulo: 'Escolha seu Terreno',
                            maximo: 1,
                            opcoesObj: [
                                {id: "artico", nome:"Ártico", desc: "Nv\t\tMagias\n3°\t\timobilizar pessoa, crescer espinhos\n5°\t\tnevasca, lentidão\n7°\t\tmovimentação livre, tempestade de gelo\n9°\t\tcomunhão com a natureza, cone de frio"},
                                {id: "costa", nome:"Costa", desc: "Nv\t\tMagias\n3°\t\tpasso nebuloso, reflexos\n5°\t\tandar na água, respirar água\n7°\t\tmovimentação livre, controlar água\n9°\t\tvidência, conjurar elemental"},
                                {id: "deserto", nome:"Deserto", desc: "Nv\t\tMagias\n3°\t\tnublar, silêncio\n5°\t\tcriar alimentos, proteção contra energia\n7°\t\tpraga, terreno alucinógeno\n9°\t\tmuralha de pedra, praga de insetos"},
                                {id: "floresta", nome:"Floresta", desc: "Nv\t\tMagias\n3°\t\tpatas de aranha, pele de árvore\n5°\t\tconvocar relâmpagos, crescer plantas\n7°\t\tadivinhação, movimentação livre\n9°\t\tcomunhão com a natureza, passo de árvore"},
                                {id: "montanha", nome:"Montanha", desc: "Nv\t\tMagias\n3°\t\tcrescer espinho, patas de aranha\n5°\t\tmesclar-se às rochas, relâmpago\n7°\t\tmoldar rochas, pele de pedra\n9°\t\tcriar passagem, muralha de pedra"},
                                {id: "pantano", nome:"Pântano", desc: "Nv\t\tMagias\n3°\t\tescuridão, flecha ácida\n5°\t\tandar na água, névoa fétida\n7°\t\tlocalizar criatura, movimentação livre\n9°\t\tvidência, praga de insetos"},
                                {id: "planice", nome:"Planíce", desc: "Nv\t\tMagias\n3°\t\tinvisibilidade, passos sem pegadas\n5°\t\tluz do dia, velocidade\n7°\t\tadivinhação, movimentação livre\n9°\t\tpraga de insetos, sonho"},
                                {id: "subterraneo", nome:"Subterrâneo", desc: "Nv\t\tMagias\n3°\t\tpatas de aranha, teia\n5°\t\tforma gasosa, névoa fétida\n7°\t\tinvisibilidade maior, moldar rochas\n9°\t\tpraga de insetos, névoa mortal"},
                            ]
                        }}],
                6: [{nome: "Caminho da Floresta", desc: "Mover-se através de terreno difícil não-mágico não te custará nenhum movimento extra. Você também pode passar através de plantas não-mágicas sem ser atrasado por elas e sem sofrer dano delas se elas tiverem espinhos, espinhas ou perigos similares.\nAlém disso, você tem vantagem em testes de resistência contra plantas criadas magicamente ou manipuladas para impedir movimentação, como as criadas pela magia constrição. "}],
                10:[{nome: "Proteção Natural", desc: "Você não pode ser enfeitiçado ou amedrontado por elementais ou fadas e você se torna imune a venenos e doenças."}],
                14: [{nome: "Santuário Natural", desc: "Quando uma besta ou plantar atacar você, essa criatura deverá fazer um teste de resistência de Sabedoria contra uma CD igual a das suas magias de druida. Em uma falha, a criatura deve escolher um alvo diferente ou o ataque erra automaticamente. Em um sucesso, a criatura se torna imune a esse efeito por 24 horas. "}]
            }
        },
        {
            id: 'circulo_lua',
            nome: 'Círculo da Lua',
            features: {
                2: [
                    {nome: "Forma Selvagem de Combate", desc: "Você recebe a habilidade de usar sua Forma Selvagem no seu turno com uma ação bônus, ao invés de com uma ação.\nAlém disso, enquanto você estiver transformando pela sua Forma Selvagem, você pode usar uma ação bônus para gastar uma espaço de magia e ganhar 1d8 pontos de vida por nível do espaço de magia gasto."},
                    {nome: "Formas de Círculo", desc: "Você pode usar sua Forma Selvagem para se transformar em uma besta com nível de desafio até 1 (você ignora a coluna ND Max da tabela Formas de Besta, mas ainda deve acatar as limitações descritas lá).\nA partir do 6° nível, você pode se transformar em uma besta com nível de desafio tão alto quanto seu nível de druida dividido por 3, arredondado para baixo. "}
                ],
                6: [{nome: "Ataque Primoral", desc: "Seus ataques na forma de besta contam como mágicos com os propósitos de ultrapassar resistência e imunidade a ataques e danos não-mágicos. "}],
                10: [{nome: "Forma Selvagem de Elemental", desc: "Você pode gastar dois usos da sua Forma Selvagem, ao mesmo tempo, para se transformar em um elemental da água, elemental do ar, elemental do fogo ou elemental da terra. "}],
                14:[{nome: "Mil Formas", desc: "Você aprende a usar magia para alterar sua forma física de formas mais sutis. Você pode conjurar a magia alterar-se à vontade"}]
            }
        }
    ]
});