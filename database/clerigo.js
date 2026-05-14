// Verifica se o "banco de dados" já existe, se não, cria
if (!window.DB_CLASSES) window.DB_CLASSES = [];

window.DB_CLASSES.push({
    id: 'clerigo',
    nome: 'Clérigo',
    dadoVida: 8,
    descricao: 'Proficiências:\nArmaduras - Leves, Médias e Escudos\nArmas - Armas simples  \nFerramentas - Nenhuma\nSalvaguarda - Sabedoria, Carisma',
    proficiencias: {
        armaduras: ['leves', 'medias', 'escudos'],
        armas: ['simples'],
        ferramentas: [],
        Salvaguarda: ['sab', 'car']
    },
    escolhaPericias: { 
        qtd: 2, 
        lista: ['História', 'Intuição', 'Medicina', 'Persuasão', 'Religião'] 
    },
    nivelSubclasse: 1,
    nomeSubclasse: "Domínio Divino",
    niveisASI: [4, 8, 12, 16, 19],
    conjuracao: {
        atributoChave: 'sab',
        tipo: 'preparada',
        // Tabela de progressão: [Truques, Magias Conhecidas, Slots nv1, Slots nv2, ... Slots nv9]
        tabela: {
            1: { truques: 3, slots: [2] },
            2: { truques: 3, slots: [3] },
            3: { truques: 3, slots: [4, 2] },
            4: { truques: 4, slots: [4, 3] },
            5: { truques: 4, slots: [4, 3, 2] },
            6: { truques: 4, slots: [4, 3, 3] },
            7: { truques: 4, slots: [4, 3, 3, 1] },
            8: { truques: 4, slots: [4, 3, 3, 2] },
            9: { truques: 4, slots: [4, 3, 3, 3, 1] },
            10: { truques: 5, slots: [4, 3, 3, 3, 2] },
            11: { truques: 5, slots: [4, 3, 3, 3, 2, 1] },
            12: { truques: 5, slots: [4, 3, 3, 3, 2, 1] },
            13: { truques: 5, slots: [4, 3, 3, 3, 2, 1, 1] },
            14: { truques: 5, slots: [4, 3, 3, 3, 2, 1, 1] },
            15: { truques: 5, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            16: { truques: 5, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
            17: { truques: 5, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
            18: { truques: 5, slots: [4, 3, 3, 3, 3, 1, 1, 1, 1] },
            19: { truques: 5, slots: [4, 3, 3, 3, 3, 2, 1, 1, 1] },
            20: { truques: 5, slots: [4, 3, 3, 3, 3, 2, 2, 1, 1] }
        }
    },
    features: {
        1: [
            {nome: "Domínio do Divino", desc: "Escolha um domínio relacionado à sua divindade: Conhecimento, Enganação, Guerra, Luz, Natureza, Tempestade ou Vida.\nCada Domínio prove habilidades unicas."},
            {nome: "Magias de Domínio", desc: "Cada domínio tem uma lista de magias de domínio que você adquire nos níveis especificados pelo seu domínio. Quando você ganha uma magia de domínio, você sempre a tem preparada, e essa magia não conta no número de magias que você pode preparar a cada dia. "}
        ],
        2: [
            {nome: "Canalizar Divindade 1", desc: "Você se torna capaz de canalizar energia diretamente de sua divindade, utilizando-a como combustível para efeitos mágicos. Você começa com dois efeitos: Expulsar Mortos-vivos e um efeito determinado pelo seu domínio.\nA partir do 6º nível, você pode Canalizar Divindade duas vezes entre descansos e a partir do 18º nível, três vezes. Você recupera os usos dessa característica quando termina um descanso curto ou longo."},
            {nome: "Canalizar Divindade: Expulsar Mortos-Vivos", desc: "Usando uma ação, você levanta seu símbolo sagrado e murmura uma prece repreendendo os mortos-vivos. Cada morto-vivo que puder ver ou ouvir você em um raio de 9 metros a partir de você, deve fazer um teste de resistência de Sabedoria. Se falhar, a criatura está expulsa por 1 minuto ou até sofrer algum dano.\nUma criatura expulsa deve usar seu turno para fugir da melhor forma possível e de forma alguma pode aproximar-se a mais de 9 metros de você por vontade própria. Ela também não pode usar reações. "},
        ],
        3: [],
        4: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        5: [{nome: "Destruir Mortos-Vivos 1", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}],
        6: [{nome: "Canalizar Divindade 2", desc: "Você se torna capaz de canalizar energia diretamente de sua divindade, utilizando-a como combustível para efeitos mágicos. Você começa com dois efeitos: Expulsar Mortos-vivos e um efeito determinado pelo seu domínio.\nA partir do 6º nível, você pode Canalizar Divindade duas vezes entre descansos e a partir do 18º nível, três vezes. Você recupera os usos dessa característica quando termina um descanso curto ou longo."}], 
        7: [],
        8: [
            {nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." },
            {nome: "Destruir Mortos-Vivos 2", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}
        ],
        9: [],
        10: [{nome: "Intervensão Divina 1", desc: "Você pode rogar à sua divindade para que auxilie você em uma árdua tarefa.\nImplorar pelo auxílio requer uma ação. Você precisa descrever o que busca e realizar uma rolagem de dado de percentagem. Se o resultado for menor ou igual ao seu nível de clérigo, sua divindade intervém. O Mestre escolhe a natureza da intervenção. O efeito de qualquer magia de clérigo ou magia de domínio é apropriado como resultado.\nSe sua divindade intervir, você fica impedido de usar essa característica de novo por 7 dias. Do contrário, você pode usá-la de novo após terminar um descanso longo."}],
        11: [{nome: "Destruir Mortos-Vivos 3", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}],
        12: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        13: [],
        14: [{nome: "Destruir Mortos-Vivos 4", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}],
        15: [],
        16: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        17: [{nome: "Destruir Mortos-Vivos 5", desc: "Quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-vivos, de acordo com seu nível de clérigo.\n\nNível\tND\n5°\t\t1/2 ou menor\n8°\t\t1 ou menor\n11°\t\t2 ou menor\n14°\t\t3 ou menor\n17°\t\t4 ou menor"}],
        18: [{nome: "Canalizar Divindade 3", desc: "Você se torna capaz de canalizar energia diretamente de sua divindade, utilizando-a como combustível para efeitos mágicos. Você começa com dois efeitos: Expulsar Mortos-vivos e um efeito determinado pelo seu domínio.\nA partir do 6º nível, você pode Canalizar Divindade duas vezes entre descansos e a partir do 18º nível, três vezes. Você recupera os usos dessa característica quando termina um descanso curto ou longo."}],
        19: [{nome: "Incremento de Atributo", desc: "Aumente um atributo em +2 ou dois em +1." }],
        20: [{nome: "Intervensão Divina 2", desc: "Seus pedidos de intervenção funcionam    automaticamente, sem necessidade de rolagem de dados."}]
    },
    subclasses: [
        {
            id: 'dominio_conhecimento',
            nome: 'Domínio do Conhecimento',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Os seguidores desses deuses estudam conhecimento exotérico, coletam tomos antigos, escavam locais secretos da terra e aprendem tudo que podem.\nNv\t\tMagias\n1°\t\tcomando, identificação\n3°\t\taugúrio, sugestão\n5°\t\tdificultar detecção, falar com os mortos\n7°\t\tolho arcano, confusão\n9°\t\tconhecimento lendário, vidência"},
                    {nome: "Bençãos do Conhecimento", desc: "Você aprende dois idiomas, à sua escolha. Você também se torna proficiente em duas perícias, à sua escolha, dentre as seguintes: Arcanismo, História, Natureza ou Religião. \nSeu bônus de proficiência é dobrado em qualquer teste de habilidade que você fizer usando qualquer dessas perícias.", configSelecao: {
                            idUnico: 'bencao_conhecimento',
                            titulo: 'Escolha 2 Perícias para Especialização',
                            maximo: 2,
                            opcoes: ['Arcanismo', 'História', 'Natureza', 'Religião']}}
                ],
                2: [{nome: "Canalizar Divindade: Conhecimento das Eras", desc: "Com uma ação, você escolhe uma perícia ou ferramenta. Por 10 minutos, você terá proficiência com a perícia ou ferramenta escolhida. "}],
                6: [{nome: "Canalizar Divindade: Ler Pensamentos", desc: "Com uma ação, escolha uma criatura que você possa ver que esteja a até 18 metros de você. Essa criatura deve realizar um teste de resistência de Sabedoria, se for bem sucedida nesse teste, você não poderá usar essa característica contra ela novamente até terminar um descanso longo.\nSe a criatura falhar no teste, você pode ler seus pensamentos superficiais (aqueles mais atuais, que refletem suas emoções e no que você está pensando constantemente) quando estiver a até 18 metros de você. Esse efeito dura por 1 minuto.\nDurante esse tempo, você pode usar sua ação para terminar esse efeito e conjurar a magia sugestão na criatura sem gastar um espaço de magia. O alvo falha automaticamente no teste de resistência contra essa magia."}],
                8: [{nome: "Conjuração Poderosa", desc: "Você adiciona seu modificador de Sabedoria no dano causado por qualquer truque de clérigo."}],
                17:[{nome: "Visões do Passado", desc: "Você pode convocar visões do passado relacionadas a um objeto que você esteja segurando ou sobre o ambiente ao seu redor. Você gasta pelo menos 1 minuto meditando e rezando, então, recebe oníricos vislumbres turvos dos eventos recentes. Você pode meditar dessa maneira por um número de minutos igual ao seu valor de Sabedoria e deve manter a concentração durante esse tempo, como se você estivesse conjurando uma magia. "}]
            }
        },
        {
            id: 'dominio_enganacao',
            nome: 'Domínio da Enganação',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "São causadores de travessuras e instigadores que se mantem como um desafio constante para a aceitação das ordens tanto de mortais quanto dos deuses.\nNv\t\tMagias\n1°\t\tenfeitiçar pessoa, disfarçar-se\n3°\t\treflexos, passos sem pegadas\n5°\t\tpiscar, dissipar magia\n7°\t\tporta dimensional, metamorfose\n9°\t\tdominar pessoa, modificar memória"},
                    {nome: "Bençãos do Trapaceiro", desc:"Você pode usar sua ação para tocar uma criatura voluntária além de você mesmo para conceder vantagem em testes de Destreza (Furtividade). Essa bênção dura por 1 hora ou até você usar essa característica novamente. "}
                ],
                2: [{nome: "Canalizar Divindade: Invocar Duplicidade", desc: "Com uma ação, você cria uma ilusão perfeita de si mesmo que dura por 1 minuto ou até você perder sua concentração (como se você estivesse se concentrando em uma magia). A ilusão aparece em um espaço desocupado que você possa ver a até 9 metros de você. Com uma ação bônus, no seu turno, você pode mover a ilusão até 9 metros para um espaço que você possa ver, mas ela deve permanecer a até 36 metros de você.\nPela duração, você pode conjurar magias como se você estivesse no espaço ocupado pela ilusão, mas você deve usar seus próprios sentidos. Além disso, quando ambos você e sua ilusão estiverem a 1,5 metro de uma criatura que possa ver a ilusão, você tem vantagem nas jogadas de ataque contra essa criatura, devido a distração causada no alvo pela ilusão."}],
                6: [{nome: "Canalizar Divindade: Manto das Sombras", desc: "Com uma ação, você se torna invisível até o final do seu próximo turno. Você se torna visível se atacar ou conjurar uma magia."}],
                8: [{nome: "Golpe Divino", desc: "Uma vez em cada um de seus turnos, quando você acertar uma criatura com um ataque com arma, você pode fazer o ataque causar 1d8 de dano de veneno extra ao alvo.\nQuando alcançar o 14º nível, o dano extra aumenta para 2d8. "}],
                17:[{nome: "Duplicidade Aprimorada", desc: "Você pode criar até quatro duplicatas de você, ao invés de uma, quando usar Invocar Duplicidade. Com uma ação bônus, no seu turno, você pode mover quantas duplicadas quiser até 9 metros, até no máximo de 36 metros de distância. "}]
            }
        },
        {
            id: 'dominio_guerra',
            nome: 'Domínio da Guerra',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Os clérigos de tais deuses se sobressaem em batalha, inspirando os outros a lutar o bom combate ou oferecendo atos de violência como suas orações.\nNv\t\tMagias\n1°\t\tauxílio divino, escudo da fé\n3°\t\tarma mágica, arma espiritual\n5°\t\tmanto do cruzado, espíritos guardiões\n7°\t\tmovimentação livre, pele de pedra\n9°\t\tcoluna de chamas, imobilizar monstro"},
                    {nome: "Proeficiência Adicional", desc:"Você adquire proficiência em armas marciais e em armaduras pesadas."},
                    {nome: "Sarcedote da Guerra", desc: "Quando você usa a ação de Ataque, você pode realizar um ataque com arma, com uma ação bônus. Você pode usar essa característica um número de vezes igual ao seu modificador de Sabedoria."}
                ],
                2: [{nome: "Canalizar Divindade: Ataque Dirigido", desc: "Quando você realiza uma jogada de ataque, você pode usar seu Canalizar Divindade para recebe +10 de bônus na jogada."}],
                6: [{nome: "Canalizar Divindade: Benção do Deus da Guerra", desc: "Quando uma criatura a até 9 metros de você realizar uma jogada de ataque, você pode usar sua reação para conceder a criatura +10 de bônus nessa jogada, usando seu Canalizar Divindade."}],
                8: [{nome: "Golpe Divino", desc: "Você ganha a habilidade de imbuir seus ataques com energia divina. Uma vez em cada um de seus turnos, quando você acertar uma criatura com um ataque com arma, você pode fazer o ataque causar 1d8 de dano extra de mesmo tipo do dano da arma ao alvo.\nQuando alcançar o 14º nível, o dano extra aumenta para 2d8. "}],
                17:[{nome: "Avatar da Batalha", desc: "Você ganha resistência a dano de concussão, cortante e perfurante de ataques não-mágicos. "}]
            }
        },
        {
            id: 'dominio_luz',
            nome: 'Domínio da Luz',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Clérigos de um deus da luz são almas esclarecidas infundidas com radiação e o poder divino da visão do discernimento, conhecidos por afastar as mentiras e incineras a escuridão. \nNv\t\tMagias\n1°\t\tmãos flamejantes, fogo das fadas\n3°\t\tesfera flamejante, raio ardente\n5°\t\tluz do dia, bola de fogo\n7°\t\tguardião da fé, muralha de fogo\n9°\t\tcoluna de chamas, vidência"},
                    {nome: "Truque Adicional", desc:"Quando você escolhe esse domínio no 1° nível, você ganha o truque luz se você ainda não o conhecia.", magiasAdicionais: ['luz']
                    },
                    {nome: "Labareta Protetora", desc: "Quando você for atacado por uma criatura a até 9 metros de você que você pode ver, você pode usar sua reação para impor desvantagem na jogada de ataque, causando labaredas de luz na frente do atacante antes dele atingir ou errar. Um atacante que não puder ser cegado é imune a essa característica.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Sabedoria."}
                ],
                2: [{nome: "Canalizar Divindade: Radiação no Amanhecer", desc: "Com uma ação, você ergue seu símbolo sagrado e qualquer escuridão mágica num raio de 9 metros de você é dissipada. Além disso, cada criatura hostil a até 9 metros deve realizar um teste de resistência de Constituição.\nUma criatura sofre dano radiante igual a 2d10 + seu nível de clérigo se falhar no teste e metade desse dano caso seja bem sucedida. Uma criatura que tenha cobertura total contra você não é afetada."}],
                6: [{nome: "Labareta Aprimorada", desc: "Você também pode utilizar sua característica Labareda Protetora quando uma criatura que você possa ver a até 9 metros atacar outra criatura diferente de você."}],
                8: [{nome: "Conjuração Poderosa", desc: "Você adiciona seu modificador de Sabedoria no dano causado por qualquer truque de clérigo."}],
                17:[{nome: "Coroa de Luz", desc: "Você pode usar sua ação para ativar uma aura de luz solar que dura por 1 minuto ou até você dissipá-la usando outra ação. Você emite luz plena num raio de 18 metros e penumbra a até 9 metros além disso. Os seus inimigos na área de luz plena tem desvantagem nos testes de resistência contra suas magias que causam dano de fogo ou dano radiante. "}]
            }
        },
        {
            id: 'dominio_natureza',
            nome: 'Domínio da Natureza',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Esses clérigos devem caçar monstruosidades malignas que usurpam dos bosques, abençoar a colheita dos fieis ou murchar a cultura dos que irritarem seus deuses. \nNv\t\tMagias\n1°\t\tamizade animal, falar com animais\n3°\t\tpele de árvore, crescer espinhos\n5°\t\tampliar plantas, muralha de vento\n7°\t\tdominar besta, vinha esmagadora\n9°\t\tpraga de insetos, caminhar em árvores"},
                    {nome: "Acólito da Natureza Truque", desc: "Você aprende um truque de druida à sua escolha.",
                        configSelecao: {
                            idUnico: 'truque_natureza', // ID para salvar
                            titulo: 'Escolha 1 Truque de Druida',
                            maximo: 1,
                            opcoes: [/*Colocar lista depois*/]}
                    },
                    {nome: "Acólito da Natureza Pericia", desc: "Você também ganha proficiência em uma das seguintes perícias, à sua escolha: Arcanismo, História, Natureza, Religião",
                        configSelecao: {
                            idUnico: 'bencao_conhecimento',
                            titulo: 'Escolha 1 Perícias para Especialização',
                            maximo: 1,
                            opcoes: ['Arcanismo', 'História', 'Natureza', 'Religião']}
                    },
                    {nome: "Proeficiência Adicional", desc:"Você adquire proficiência em armaduras pesadas."},
                ],
                2: [{nome: "Canalizar Divindade: Enfeitiçar Animais e Plantas", desc: "Com uma ação, você ergue seu símbolo sagrado e invoca o nome do seu deus. Cada besta ou criatura-planta que puder ver você num raio de 9 metros, deve realizar um teste de resistência de Sabedoria. Se a criatura falhar, ela estará enfeitiçada por você durante 1 minuto ou até sofrer dano. Enquanto estiver enfeitiçada por você, ela será amistosa a você a as criaturas que você designar."}],
                6: [{nome: "Amortercer Elementos", desc: "Quando você ou uma criatura a até 9 metros de você sofrer dano de ácido, frio, fogo, elétrico ou trovão, você pode usar sua reação para conceder resistência a criatura contra aquele tipo de dano. "}],
                8: [{nome: "Golpe Divino", desc: "Você ganha a habilidade de imbuir seus ataques com energia divina. Uma vez em cada um de seus turnos, quando você acertar uma criatura com um ataque com arma, você pode fazer o ataque causar 1d8 de dano frio, fogo ou elétrico (à sua escolha) extra ao alvo.\nQuando alcançar o 14º nível, o dano extra aumenta para 2d8. "}],
                17:[{nome: "Senhor da Natureza", desc: "Você ganha a habilidade de comandar animais e criaturas-planta. Enquanto a criatura estiver enfeitiçada pela sua característica Enfeitiçar Animais e Plantas, você pode usar uma ação bônus no seu turno para dizer verbalmente o que cada uma dessas criaturas devem fazer no próximo turno delas. "}]
            }
        },
        {
            id: 'dominio_tempestade',
            nome: 'Domínio da Tempestade',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "Deuses da tempestade enviam seus clérigos para inspirar pavor no povo comum, tanto para mantê-los no caminho da justiça e coragem quanto para oferecer sacrifícios de propiciação para afastar a ira divina.\nNv\t\tMagias\n1°\t\tnévoa obscurecente, onda trovejante\n3°\t\tlufada de vento, despedaçar\n5°\t\tconvocar relâmpagos, nevasca\n7°\t\tcontrolar a água, tempestade de gelo\n9°\t\tonda destrutiva, praga de insetos"},
                    {nome: "Ira da Tormenta", desc: "Quando uma criatura a 1,5 metro de você que você possa ver, atingir você com um ataque, você pode usar sua reação para forçar a criatura a realizar um teste de resistência de Destreza. A criatura sofre 2d8 de dano elétrico ou de trovão (à sua escolha) caso falhe no teste, e metade desse dano caso seja bem sucedido.\nVocê pode usar essa característica um número de vezes igual ao seu modificador de Sabedoria."
                    },
                    {nome: "Proeficiência Adicional", desc:"Você adquire proficiência em armas marciais e em armaduras pesadas."},
                ],
                2: [{nome: "Canalizar Divindade: Ira Destruidora", desc: "Quando você rolar dano elétrico ou trovejante, você pode usar seu Canalizar Divindade para causar o máximo de dano, ao invés de rolá-lo. "}],
                6: [{nome: "Golpe Relâmpago", desc: "Quando você causa dano elétrico a uma criatura Grande ou menor, você também pode empurrá-la para até 3 metros de distância de você. "}],
                8: [{nome: "Golpe Divino", desc: "Você ganha a habilidade de imbuir seus ataques com energia divina. Uma vez em cada um de seus turnos, quando você acertar uma criatura com um ataque com arma, você pode fazer o ataque causar 1d8 de dano trovejante extra extra ao alvo.\nQuando alcançar o 14º nível, o dano extra aumenta para 2d8. "}],
                17:[{nome: "Filho da Tormenta", desc: "Você adquire deslocamento de voo igual a seu deslocamento de caminhada contanto que você não esteja no subterrâneo ou em local fechado."}]
            }
        },
        {
            id: 'dominio_vida',
            nome: 'Domínio da Vida',
            features: {
                1: [
                    {nome: "Lista de magias", desc: "O domínio da vida foca na vívida energia positiva, uma das forças fundamentais do universo, que sustenta toda a vida.\nNv\t\tMagias\n1°\t\tbênção, curar ferimentos\n3°\t\trestauração menor, arma espiritual\n5°\t\tsinal de esperança, revivificar\n7°\t\tproteção contra a morte, guardião da fé\n9°\t\tcurar ferimentos em massa, reviver os mortos"},
                    {nome: "Discípulo da Vida", desc: "suas magias de cura são mais efetivas. Sempre que você conjurar uma magia de cura para recuperar pontos de vida, o alvo daquela magia recupera pontos de vida adicionais iguais a 2 + nível da magia."
                    },
                    {nome: "Proeficiência Adicional", desc:"Você adquire proficiência em armaduras pesadas."},
                ],
                2: [{nome: "Canalizar Divindade: Preservar a Vida", desc: "Como uma ação, você usa seu símbolo sagrado para invocar energia que pode recuperar um total de 5 vezes seu nível de clérigo em pontos de vida. Você escolhe quaisquer criaturas a até 9 metros de você e divide esses pontos entre elas. Essa característica só pode curar as criaturas a até metade de seu máximo de pontos de vida. "}],
                6: [{nome: "Curandeiro Abençoado", desc: "Quando conjurar uma magia de cura em outra criatura, você também recupera pontos de vida, em um total de 2 + nível da magia. "}],
                8: [{nome: "Golpe Divino", desc: "Você ganha a habilidade de imbuir seus ataques com energia divina. Uma vez em cada um de seus turnos, quando você acertar uma criatura com um ataque com arma, você pode fazer o ataque causar 1d8 de dano radiante extra extra ao alvo.\nQuando alcançar o 14º nível, o dano extra aumenta para 2d8. "}],
                17:[{nome: "Cura Suprema", desc: "Quando você jogaria normalmente um ou mais dados para recuperar pontos de vida com uma magia, você usa o maior resultado possível nos dados."}]
            }
        }
    ]
});