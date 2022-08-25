import { TechnologyData } from "./technologyData";

export const reposData = [
    // {
    //     name : "Nome do repositório",
    //     subtitle : "Responsabilidade do repositório",
    //     githubLink : "https://github.com/avenuesec",

    //     observations : {
    //         isEmpty : true,
    //         branchMainIsUpdated : false,
    //         readmeIsUpdated : false,

    //         suggestionsList : [
    //           "Exemplo de sugestão 1",
    //           "Exemplo de sugestão 2"  
    //         ],
    //     },

    //     technologies : {
    //         dependenciesPackageLink : "https://github.com/",
    //         list : [
    //             TechnologyData.golang_1_18,
    //             TechnologyData.gRPC_1_47_0,
    //             TechnologyData.protobuf_1_28_0
    //         ]
    //     }
    // },



    {
        name: "Account",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/account",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Exemplo de anotação"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/account/blob/develop/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.gRPC_1_47_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Accio MF",
        subtitle: "Microserviços do Account",
        githubLink: "https://github.com/avenuesec/accio-mf",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Última atualização em Fevereiro de 2022",
                "Branch main do repositório accio-mf está meio simples, isso é correto?",
                "No  package.json indica que existe a dependencia do sass, porém no  app.tsx diz que a tecnologia é css, a dependencia do sass é necessária?"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/accio-mf/blob/main/package.json",
            list: [
                TechnologyData.react_6_4_19,
                TechnologyData.typeScript_4_5_5,
                TechnologyData.css_latest
            ]
        }
    },

    {
        name: "Account Adapters",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/account-adapters",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "É necessário existir? Sabendo que está vázio"
            ],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },

    

    {
        name: "Account Contracts",
        subtitle: "Contratos relacionados ao SalesForce",
        githubLink: "https://github.com/avenuesec/account-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "Colocar as tecnologias no README",
                "No go.mod, existem dois protobuf como dependência. Linha 8 - Linha 13"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/account-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.gRPC_1_39_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Account Project Layout",
        subtitle: "Layout básico das aplicações de Account",
        githubLink: "hhttps://github.com/avenuesec/account-project-layout",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Actions",
        subtitle: "Integration Tests",
        githubLink: "https://github.com/avenuesec/actions",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [
                "Atualizar o README da raiz com as tecnologias e responsabilidades do repositório"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/actions/blob/main/run_integration/package.json",
            list: [
                TechnologyData.js_latest,
                TechnologyData.axios_0_27_2,
                TechnologyData.node_16_13_0
            ]
        }
    },



    {
        name: "Actverso",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/actverso",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [
                "Branch dev também vazia"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/actverso/tree/actverso#setup",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.warp,
                TechnologyData.aws
            ]
        }
    },



    {
        name: "Apex Contracts",
        subtitle: "Apex common contracts",
        githubLink: "https://github.com/avenuesec/apex-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/apex-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.datastore_1_1_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "API",
        subtitle: "Samples and documentation for Avenue's Trading plataform API",
        githubLink: "https://github.com/avenuesec/api",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/apex-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.react_16_8_6,
                TechnologyData.axios_0_19_0
            ]
        }
    },



    {
        name: "App certificates",
        subtitle: "This repository contains all the certificates",
        githubLink: "https://github.com/avenuesec/app_certificates",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Argocd",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/argocd",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Atlantis",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/atlantis",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Avenue RFCs",
        subtitle: "This repository holds the Request for Comments (RFCs) for Avenue",
        githubLink: "https://github.com/avenuesec/avenue-rfcs",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Backend Dev Test",
        subtitle: "Receive data and store in a safe repository",
        githubLink: "https://github.com/avenuesec/backend-dev-test",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Banking",
        subtitle: "Manager banking features, such as card and account management and transactions authorizations",
        githubLink: "https://github.com/avenuesec/banking",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/banking/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.postgres_1_1_0
            ]
        }
    },



    {
        name: "Banking Web",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/banking-web",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/banking-web",
            list: []
        }
    },



    {
        name: "Bexs Contracts",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/bexs-contracts",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/bexs-contracts",
            list: []
        }
    },



    {
        name: "Bonds",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/bonds",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/bonds/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.amqp_1_0_0
            ]
        }
    },



    {
        name: "BrBroker",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_17,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.grpc_1_45_0
            ]
        }
    },



    {
        name: "BrBroker Contracts",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.gRPC_1_39_0
            ]
        }
    },



    {
        name: "BrBroker Migrator",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/brbroker-migrator",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/brbroker-migrator/blob/master/go.work.sum",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.firestore_1_1_0,
                TechnologyData.bigquery_1_12_0
            ]
        }
    },



    {
        name: "BrBroker Dtvm Ted Worker",
        subtitle: "Make TED inside DTVM",
        githubLink: "https://github.com/avenuesec/brbroker.dtvm.ted-worker",

        observations: {
            isEmpty: true,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "CLI",
        subtitle: "Avenue CLI",
        githubLink: "https://github.com/avenuesec/cli",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/cli/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.amqp_1_0_0,
                TechnologyData.firestore_1_6_1
            ]
        }
    },



    {
        name: "Common",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/common",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "Readme está atualizado, porém, uma sugestão seria conter qual é a responsabilidade do repositório"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/common/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.bigquery_1_12_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Conciliation",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/conciliation",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/conciliation/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_16,
                TechnologyData.postgres_1_1_0,
                TechnologyData.protobuf_1_27_1
            ]
        }
    },



    {
        name: "Cross",
        subtitle: "Supporting services that are used across the platform, but don't belong in a specific product line",
        githubLink: "https://github.com/avenuesec/cross",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/cross/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.mysql_1_5_0,
                TechnologyData.gRPC_1_39_0
            ]
        }
    },



    {
        name: "Crypto",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/crypto",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/crypto/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.gRPC_1_47_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Crypto Intranet",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/crypto-intranet",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/crypto-intranet/blob/main/package.json",
            list: [
                TechnologyData.react_11_7_1,
                TechnologyData.auth0_react_1_8_0,
                TechnologyData.axios_0_24_0
            ]
        }
    },



    {
        name: "Dart Event Source",
        subtitle: "W3C EventSource client implementation for Dart / Flutter, to communicate with server-sent event endpoints",
        githubLink: "https://github.com/avenuesec/dart-event-source",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/dart-event-source/blob/default/pubspec.yaml",
            list: [
                TechnologyData.dart,
            ]
        }
    },



    {
        name: "Data",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/data",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Datalake Ingestion Framework",
        subtitle: "Notebooks from the datalake ingestion framework, a set of classes to help creating data ingestion and data processing pipelines fast.",
        githubLink: "https://github.com/avenuesec/datalake-ingestion-framework",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "Sugiro colocar o textro do arquivo: Regras_arquitetura.py em um .md para ficar mais visual",
                "Remover o TODO do arquivo de arquitetura, sugiro criar um .todo ou um board para colocar a lista de pendencia"
            ],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.python
            ]
        }
    },



    {
        name: "Datastore Emulator",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/datastore-emulator",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: false,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Devops",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/devops",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Devops Secrets",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/devops-secrets",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: [
                TechnologyData.shell
            ]
        }
    },



    {
        name: "Evolve Contracts",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/evolve-contracts",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/evolve-contracts/blob/main/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.grpc_1_46_2
            ]
        }
    },



    {
        name: "Exchange Tracker",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/exchange-tracker",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [
                "Applications Properties vazio"
            ],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/exchange-tracker/blob/main/build.gradle",
            list: [
                TechnologyData.java,
                TechnologyData.protobuf_java_3_20_1,
                TechnologyData.mysql_connector_java_5_1_6
            ]
        }
    },



    {
        name: "Extended Masked Text",
        subtitle: "This package is based on the source code of flutter_masked_text and is an attempt to fix some bugs and continue the development of the original one",
        githubLink: "https://github.com/avenuesec/extended_masked_text",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Finance",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/finance",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/finance/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.datastore_1_3_0,
                TechnologyData.protobuf_1_28_0
            ]
        }
    },



    {
        name: "Fintechledger Beam",
        subtitle: "O fintechledger é um Cron Job que tem por objetivo agrupar diferentes informações, de todas as contas Banking, e enviá-las ao final do processamento, à partir de arquivo JSON, para o SFTP da Evolve",
        githubLink: "https://github.com/avenuesec/fintechledger-beam",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/fintechledger-beam/blob/dev/pom.xml",
            list: [
                TechnologyData.protobuf_java_3_21_2,
                TechnologyData.postgres_42_4_0,
                TechnologyData.google_oauth_1_34_1
            ]
        }
    },



    {
        name: "Fix Rust",
        subtitle: "FIX (Financial Information Exchange) client in Rust",
        githubLink: "https://github.com/avenuesec/fix-rust",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [
                "Os TODOs de fato continuam precisando ser realizados?"
            ],
        },

        technologies: {
            dependenciesPackageLink: "",
            list: []
        }
    },



    {
        name: "Foreign Finder",
        subtitle: "This project holds all services and jobs for B2B platform",
        githubLink: "https://github.com/avenuesec/foreign-finder",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/foreign-finder/blob/dev/go.mod",
            list: [
                TechnologyData.golang_1_18,
                TechnologyData.protobuf_1_28_0,
                TechnologyData.bigquery_1_18_0
            ]
        }
    },

    {
        name: "Foreign Finder Web",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/foreign-finder-web",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: false,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/foreign-finder-web/blob/develop/package.json",
            list: [
                TechnologyData.auth0_react_1_8_0,
                TechnologyData.axios_0_24_0,
                TechnologyData.recharts_2_1_6
            ]
        }
    },



    {
        name: "Frontend",
        subtitle: "...",
        githubLink: "https://github.com/avenuesec/frontend",

        observations: {
            isEmpty: false,
            branchMainIsUpdated: true,
            readmeIsUpdated: true,

            suggestionsList: [],
        },

        technologies: {
            dependenciesPackageLink: "https://github.com/avenuesec/frontend/blob/dev/package.json",
            list: [
                TechnologyData.auth0_react_1_8_0,
                TechnologyData.axios_0_24_0,
                TechnologyData.recharts_2_1_6
            ]
        }
    },
]