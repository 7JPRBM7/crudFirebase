# 📱 AV4 - FlashCards (Ionic + Firebase)

Este projeto é um aplicativo móvel de FlashCards desenvolvido como requisito para a **Avaliação Formadora 4 (AV4)** da disciplina de Desenvolvimento Mobile do Centro Universitário Augusto Motta (UNISUAM).

O objetivo central da aplicação é demonstrar o domínio sobre o planejamento, gerência de configuração, controle de versão, consumo de serviços externos e geração de builds para produção em aplicações híbridas.

## 🎯 Funcionalidades Implementadas

* **Consumo de API RESTful:** Integração via `HttpClient` com a API pública JSONPlaceholder, exibindo uma "Dica do Dia" dinamicamente na inicialização do app.
* **CRUD com Firebase (Firestore):** Operações completas de Criação, Leitura (em tempo real), Atualização e Exclusão de flashcards, sincronizadas direto na nuvem.
* **Design e UI/UX:** Interface totalmente customizada utilizando a identidade visual clássica da UNISUAM (cor primária laranja) e a tipografia moderna `Poppins`, com uso extensivo de CSS customizado para arredondamento de bordas e sombreamento de componentes.
* **Arquitetura Moderna:** Construído utilizando a nova arquitetura *Standalone* do Angular, dispensando o uso de módulos tradicionais e otimizando a performance.

## 🛠️ Tecnologias e Ferramentas

* **[Ionic Framework](https://ionicframework.com/):** Componentes de interface (UI) e estruturação mobile.
* **[Angular (Standalone)](https://angular.dev/):** Lógica de negócios, injeção de dependências e roteamento.
* **[Firebase (Cloud Firestore)](https://firebase.google.com/):** Banco de dados NoSQL orientado a documentos em tempo real.
* **SCSS:** Estilização global padronizada via variáveis CSS.
* **Git e GitHub:** Versionamento de código e histórico de commits semânticos.

## 🚀 Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Ionic CLI](https://ionicframework.com/docs/cli) instalados em sua máquina.

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/7JPRBM7/crudFirebase.git](https://github.com/7JPRBM7/crudFirebase.git)
