# Typescript no Angular

### Criar componentes

Exemplo de código para criar novos componentes:

``` typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'app-teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.css']
})

export class TesteComponent {

}
```

### Informações relevantes

* **Export:** Para deixar outro arquivo usar sua classe.

* **Import:** Para puxar o que você precisa de outro lugar.

* **Caminho (Path):** O caminho tem que estar perfeito (./pasta/arquivo).

* **package.json:** é o arquivo mais importante de um projeto Angular/Node para criar dependências, ou seja
ele pode ser transportado para outra máquina/servidor e lendo esse arquivo ele pode ser recriado.
Por exemplo, podemos excluir a pasta node_modules e o package.json vai recriar todos os módulos ao ser executado. 

* **angular.json:** é um arquivo de configurações do Angular e define as configurações do projeto, como as dependências, os arquivos a serem compilados, a estrutura do diretório, as tarefas de construção, a configuração do servidor de desenvolvimento e muito mais.  

* **tsconfig.json:** é o arquivo de configurações principal do Typescript. Ele define as opções de compilação e as configuraçõoes do projeto. Nele você pode especificar o diretório de saída, a versão do ECMAScript a ser usada, habilitar ou desabilitar recursos específicos do Typescript entre outras coisas.

* **tslint.json:** este arquivo define as regras e configurações para o linter Typescript. O linter ajuda a manter um código consistente e livre de erros, aplicando regras de estilo e boas práticas de programação. Você pode definir suas próprias regras ou usar configurações predefinidas.

* **karma.conf.js:** se você estiver usando o Karma como test runner para seus testes unitários no Angular, este arquivo contém a configuração para a execução dos testes. Você pode definir os arquivos a serem testados, os frameworks a serem usados, os reporters de resultados e outras opções relacionadas aos testes.

* **protactor.conf.js:** se você estiver usando o Protactor para executar testes de ponta a ponta (e2e) no Angular, este arquivo contém a configuração para os testes e2e. Você pode definir os caminhos dos arquivos de teste, as configurações do navegador, as URLs a serem testadas e outras opções relevantes para os testes e2e.


# Módulos no Angular
Pensando na construção de sistemas robustos e seguros, o módulo funciona como uma "caixa blindada" ou um microsserviço no front-end. 

Você tem controle absoluto do que entra (Imports) e do que tem permissão para sair e ser visto pelo resto do sistema (Exports). 
Esse encapsulamento é a primeira linha de defesa para não expor lógicas internas sem necessidade.

### Criando um módulo - Modelo clássico

Exemplo de código para criar um módulo:

```typescript 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NomeComponent } from './nome-component'; //aqui é o caminho exato da pasta

@NgModule ({
    declarations: [
        NomeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NomeComponent
    ]
})
export class NomeModulo { }
```

### Standalone Components - Angular atualmente
O uso do módulo agora não é mais obrigatório por padrão


### Informações relevantes

* **Declarations: []** O que eu CRIO aqui.

* **Imports: []** O que eu PRECISO de fora.

* **Exports: []** O que eu PERMITO que os outros usem.

* **Providers: []** Quem FORNECE DADOS para mim.


### Entendendo o @NgModule
A melhor forma de entender um @NgModule é pensar nele como um departamento fechado dentro de uma empresa (por exemplo, um setor de contabilidade).
Ele tem seus próprios funcionários, suas próprias ferramentas e regras muito estritas sobre o que pode ou não ser compartilhado com o resto da empresa.

* **Declarations: []** (Os funcionários)
    - O que é: É onde "registra" quem pertence a esse módulo. Componentes, Diretivas e Pipes entram aqui.

    - A regra: Um componente (como o NomeComponent) só pode pertencer a um único módulo. Ele é funcionário exclusivo daquele departamento. Se você tentar declarar ele em dois módulos diferentes, o Angular vai dar erro.

* **Imports: [ ]** (As Ferramentas Externas)

    - O que é: É o que esse seu departamento precisa "importar" de fora para conseguir trabalhar.

    - Na prática: Se o seu componente precisa de formulários, você importa o FormsModule. Se precisa de ferramentas básicas do Angular (como laços de repetição *ngFor), você importa o CommonModule. Você está trazendo o poder de outros módulos para dentro do seu.

* **Exports: [ ]** (A Vitrine / Acesso Público)

    - O que é: Aqui entra a segurança e o encapsulamento. Tudo o que você cria nas declarations é, por padrão, privado. Ninguém de fora do módulo consegue usar.

    - Na prática: Se você quiser que o resto do sistema possa usar o seu NomeComponent, você precisa colocar ele no array de exports. É como dizer: "Estou autorizando essa peça específica a ser acessada publicamente por outros departamentos".

* **Providers: [ ]** (Os Especialistas / Serviços)

    - O que é: Aqui entram os "Serviços" (Services) — os arquivos que geralmente fazem a comunicação com o Banco de Dados, APIs e regras de negócio pesadas.

    - Na prática: Quando você coloca um serviço aqui, o módulo garante que todo componente lá dentro possa "chamar" esse especialista para pedir dados. 