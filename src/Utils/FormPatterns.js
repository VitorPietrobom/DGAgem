export class FormPatterns {
  
    static solicitacaoSeguroViagemInternacional() {
    
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
            "Nome",
            "Data de Nascimento",
            "Sexo",
            "Email",
            "Telefone",
            "Celular",
            "Endereço Residencial",
            "Número",
            "CEP",
            "Complemento",
            "Bairro",
            "Cidade",
            "Unidade/Órgão"
            ]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
            "Ida: Cidade",
            "Ida: Data De Embarque",
            "Volta: Cidade",
            "Volta: Data",
            "Justificativa"
            ]
            },
            {
            "subSection": "Recursos",
            "data":[
            "Orçamentário: Co",
            "Orçamentário: Projeto Atividade",
            "Orçamentário: Conta Local",
            "Orçamentário: Valor",
            "Convênios: Co",
            "Convênios: Código Do Convênio",
            "Convênios: Término Da Vigência",
            "Convênios: Valor",
            "Outros (recurso próprio, fapesp)",
            "Centro orçamentário: c.o.,/conta local c.I."
            ]
            },
            {
            "subSection": "Terceiros",
            "data":[
            "[Sinistro] Nome",
            "[Sinistro] Telefone"
            ]
            }
        ]
    }

    static solicitacaoSeguroViagemAcademicasPais() {
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
            "Nome",
            "Email",
            "Telefone",
            "Matrícula",
            "Unidade/Órgão",
            "Disciplina",
            "Docente da Disciplina"
            ]
            },
            {
            "subSection": "Documento",
            "data":[
            "Tipo",
            "Número",
            "Cpf"]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
            "Ida: Data De Embarque",
            "Volta: Data"
            ]
            }
        ]
    }

    static solicitacaoAntecipacaoDespesaViagem() {
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
              "Nome",
              "Função",
              "Doutorado",
              "Matrícula",
              "Unidade/Órgão",
              "Referência atual",
              "Salário"
            ]
            },
            {
            "subSection": "Documento",
            "data":[
              "Cpf"]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
              "Ida: Data De Embarque",
              "Volta: Data"
            ]
            },
            {
            "subSection": "Locais De Destino",
            "data":[
              "Local De Destino",
              "De:",
              "Até:",
              "Motivo da Viagem e Justificativa Para Antecipação"
            ]
            },
            {
            "subSection": "Despesas Previstas",
            "data":[
              "Passagem Aérea",
              "Diárias (Hospedagem Alimentação Locomoção)"]
            },
            {
            "subSection": "Dados Bancários",
            "data":[
              "Banco",
              "Agência",
              "Conta"]
            }
            ]
    }

    static requisicaoPassagemAereaInternacional() {
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
              "Nome",
              "Data de Nascimento",
              "Nacionalidade",
              "Sexo",
              "Email",
              "Telefone",
              "Celular",
              "Unidade/Órgão"]
            },
            {
            "subSection": "Documento",
            "data":[
              "Cpf"]
            },
            {
              "subSection": "Dados Do Passaporte",
              "data":[
                "Número",
                "Validade",
                "País De Emissão"]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
              "Ida: Cidade",
              "Ida: Data De Embarque",
              "Ida: Faixa de Horário de embarque",
              "Volta: Cidade",
              "Volta: Data",
              "Volta: Faixa de Horário de embarque",
              "* Justicativa do voo",
            ] 
            },
            {
            "subSection": "Locais De Destino",
            "data":[
              "Local De Destino",
              "De:",
              "Até:"
            ]
            },
            {
            "subSection": "Recursos",
            "data":[
              "Orçamentário: Co",
              "Orçamentário: Projeto Atividade",
              "Orçamentário: Conta Local",
              "Orçamentário: Valor",
              "Convênios: Co",
              "Convênios: Código Do Convênio",
              "Convênios: Término Da Vigência",
              "Convênios: Valor"]
            }
            ]
    } 

    static requisicaoPassagemAereaNacional() {
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
              "Nome",
              "Data de Nascimento",
              "Nacionalidade",
              "Sexo",
              "Email",
              "Telefone",
              "Celular",
              "Unidade/Órgão"]
            },
            {
            "subSection": "Documento",
            "data":[
              "Cpf"]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
              "Ida: Cidade",
              "Ida: Data De Embarque",
              "Ida: Faixa de Horário de embarque",
              "Volta: Cidade",
              "Volta: Data",
              "Volta: Faixa de Horário de embarque",
              "* Justicativa do voo",
            ] 
            },
            {
            "subSection": "Locais De Destino",
            "data":[
              "Local De Destino",
              "De:",
              "Até:"
            ]
            },
            {
            "subSection": "Recursos",
            "data":[
              "Orçamentário: Co",
              "Orçamentário: Projeto Atividade",
              "Orçamentário: Conta Local",
              "Orçamentário: Valor",
              "Convênios: Co",
              "Convênios: Código Do Convênio",
              "Convênios: Término Da Vigência",
              "Convênios: Valor"]
            }
            ] 
    } 

    static aprovaçãoPréviaDeDespesas() {
        return [
            {
            "subSection": "Dados Do Viajante",
            "data": [
              "Nome",
              "Email",
              "Telefone",
              "Tipo De Vínculo",
              "Doutorado",
              "Unidade/Órgão",
              "Código Da Unidade/Órgão"]
            },
            {
            "subSection": "Documento",
            "data":[
              "Tipo",
              "Número",
              "Data De Emissão",
              "Cpf"]
            },
            {
            "subSection": "Sobre A Viagem",
            "data":[
              "Ida: Data De Embarque",
              "Volta: Data"]
            },
            {
            "subSection": "Locais De Destino",
            "data":[
              "Local De Destino",
              "De:",
              "Até:",
              "Finalidade Atividades/Previstas",
              "Demonstrar O Interesse E Benefício Para Unicamp"]
            },
            {
            "subSection": "Recursos",
            "data":[
              "Orçamentário: Co",
              "Orçamentário: Projeto Atividade",
              "Orçamentário: Conta Local",
              "Orçamentário: Valor",
              "Convênios: Co",
              "Convênios: Código Do Convênio",
              "Convênios: Término Da Vigência",
              "Convênios: Valor"]
            },
            {
            "subSection": "Despesas Previstas",
            "data":[
              "Tipo De Despesa",
              "Taxa De Inscrição",
              "Passagem Aérea",
              "Diárias (Hospedagem Alimentação Locomoção)"]
            },
            {
            "subSection": "Documentos",
            "data":[
              "Convite De Participação No Evento",
              "Documento De Aceitação Para Apresentação De Trabalhos",
              "Prospecto Do Evento",
              "Publicação Do Afastamento"]
            }
            ]
    } 
}