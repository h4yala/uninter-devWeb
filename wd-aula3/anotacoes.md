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
O uso do módulo agora não é mais obrigatório por padrão. Componentes modernos usam a flag *standalone: true* e importam suas próprias dependências diretamente.


### Informações relevantes

* **Declarations: []** O que eu CRIO aqui.

* **Imports: []** O que eu PRECISO de fora.

* **Exports: []** O que eu PERMITO que os outros usem.

* **Providers: []** Quem FORNECE DADOS para mim.

Obs: é possíver ter vários componentes dentro de um módulo, seja criando ou importando.

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

### Material Design

* **Para instalar:** o terminal deve estar na página raiz do projeto, pois o Angular Material afeta o projeito como um todo.
    - No terminal digite: **ng add @angular/material** (esse comando baixa o pacote e já configura todos os arquivos automaticamente.)

    * 1. Choose a prebuilt theme: são opções de cores e você pode escolher a que achar mais bonita;

### Lifecycly hooks - ganchos/gatilhos do ciclo de vida dos componentes
Se os Módulos são os "departamentos" da empresa, os Lifecycle Hooks (Ganchos do Ciclo de Vida) são a rotina do funcionário (o Componente). Eles ditam tudo o que acontece desde o momento em que o componente nasce até a hora em que ele morre (é removido da tela).

Entender os hooks é ter controle absoluto sobre o tempo e a memória da sua aplicação. Se você abre um processo e esquece de fechar na hora certa, você cria um vazamento de memória (memory leak) — o que é um pesadelo tanto para performance quanto para segurança.

* **1. ngOnChanges (Quando há mudanças)**

    - O que é: É acionado sempre que o componente recebe um dado novo de fora (através de um @Input). Ele recebe um objeto que contém as mudanças detectadas.

    - Na prática: Imagine um componente de "Perfil de Usuário". Se a foto do usuário muda no banco de dados e o sistema manda a foto nova para o componente, o ngOnChanges é o alarme que avisa: "Ei, os dados mudaram, atualize a tela!".

* **2. ngOnInit (Inicialização)**

    - O que é: Roda uma única vez logo depois que o componente é criado e os dados iniciais são recebidos.

    - Na prática: É o momento em que o funcionário senta na mesa e liga o computador. É o lugar perfeito e obrigatório para você fazer chamadas para a sua API, buscar dados no banco e carregar listas. (Nunca faça chamadas pesadas no constructor, deixe sempre para o ngOnInit!).

* **3. ngAfterViewInit (Quando a tela está pronta)**

    - O que é: Roda quando o Angular termina de desenhar o HTML (a "View") do componente na tela.

    - Na prática: Se você precisa manipular algum botão específico, aplicar um gráfico complexo ou usar o Angular Material para mexer em algo visual que depende do HTML já existir, é aqui que você faz.

* **4. ngOnDestroy (A Despedida / O "Limpa Trilhos")**

    - O que é: Roda imediatamente antes do componente ser destruído (quando o usuário muda de página, por exemplo).

    - Na prática: É a faxina. Se você abriu uma conexão de WebSocket, um contador (timer) ou se "inscreveu" para ficar ouvindo um banco de dados, é no ngOnDestroy que você cancela tudo isso. Se você não limpar a bagunça aqui, o processo continua rodando invisível e travando o navegador do cliente. 

* **5. ngDoCheck (O Microgerenciador)**

    - O que é: O Angular tem um radar automático para saber se algo mudou na tela. Mas às vezes, ele "pisca" e perde alguma mudança muito complexa (tipo um valor atualizado muito fundo dentro de um banco de dados local ou objeto complexo). O ngDoCheck permite que você crie a sua própria regra de verificação manual.

    - Na prática: É como um processo rodando em background que checa o sistema a cada milissegundo perguntando: "Mudou algo? E agora, mudou?".

    - Aviso de Arquitetura: Como ele é acionado durante cada ciclo de detecção de mudanças do Angular (o que acontece dezenas de vezes por segundo), se você colocar um código pesado aqui dentro, a aplicação inteira fica lenta. Use apenas quando o Angular falhar em detectar algo sozinho!

* **6. ngAfterContentInit (O Recebimento da Encomenda)**

    - O que é: Está 100% ligado à tag <ng-content>. Essa diretiva serve para você criar um componente "oco" e injetar HTML dentro dele de fora para dentro (imagine criar um componente de "Card" padrão, mas deixar o sistema decidir dinamicamente se o recheio será um texto, uma imagem ou um formulário).

    - Na prática: Esse hook é acionado exatamente no momento em que esse "recheio" externo termina de ser projetado dentro do seu componente. É o aviso de que a encomenda foi desempacotada e você já pode manipular esse conteúdo com segurança. 

* **7. ngAfterContentChecked (A Revisão Contínua da Encomenda)**

    - O que é: É o passo seguinte após o ngAfterContentInit. É chamado sempre que o Angular verifica se esse conteúdo projetado sofreu alguma alteração.

    - Na prática: É como se tivesses recebido a encomenda, mas continuasses a abrir a caixa repetidamente para confirmar se o conteúdo lá dentro mudou. 
    
    - Aviso de Performance: Tal como o ngDoCheck, ele é executado com uma frequência altíssima. Evita colocar lógica pesada aqui dentro.

* **8. ngAfterViewInit (Inauguração do Ecrã)**

    - O que é: É acionado apenas uma vez, assim que o Angular termina de desenhar o HTML (a View) do componente e de todos os componentes "filhos" que dependem dele.

    - Na prática: É o momento em que a obra está finalmente pronta e pode inaugurar. Se precisar de manipular algum elemento visual diretamente no ecrã (como inicializar um gráfico complexo), este é o momento exato e seguro para o fazer.

* **9. ngAfterViewChecked (Fiscal do Ecrã)**

    - O que é: É chamado sempre que o Angular faz uma verificação para detetar se algo mudou no HTML do componente ou dos seus filhos.

    - Na prática: É o fiscal que patrulha a tela inteira várias vezes por segundo para ver se um botão mudou de cor ou se um texto foi atualizado. 
    
    - Alerta de Performance: Sendo muito analítica e focada em sistemas seguros e eficientes, olhe para este método com desconfiança. Se colocar um cálculo complexo aqui, pode acabar sobrecarregando a memória e travar completamente o navegador do cliente!

### Comunicação entre componentes

* **HTML Injection:** técnica em que o conteúdo HTML é inserido dinamicamente em um componente ou elemento específico.

* **ng-content:** é a diretiva mais utilizada para realizar a injeção de conteúdo HTML no Angular. Ela permite criar pontos de inserção em um componente, onde o conteúdo HTML externo pode ser incluído.

    - Exemplo de como usar o **ng-content**:
    ```typescript 
    @Component ({
        selector: 'app-meu-componente',
        template:
            <div>
                <h2>Título do Componente</h2>
                <ng-content></ng-content>
            </div>
    })
    export class MeuComponenteComponent { }
    ```
O conteúdo *<p>Conteúdo inserido no componente</p>* é injetado no ponto de inserção definido por *<ng-content></ng-content>* no template do componente **MeuComponenteComponent**. Assim, o resultado renderizado será:

    ```html 
    <app-meucomponente>
        <p> Conteúdo inserido no componente </p>
    </app-meucomponente>
    ```


### Binding no Angular
O binding no Angular é um mecanismo que permite a comunicação e sincronização de dados entre o componente e o template. Ele oferece várias maneiras de conectar e atualizar informações nos dois lados, facilitando a interatividade e a atualização dinâmica da interface do usuário.

* **1. Interpolation (interpolação):** Utiliza chaves duplas {{ }} para exibir valores do componente no template.

    ```html 
    <div>
        <h2> Título do Componente </h2>
        <p> Conteúdo inserido no componente </p>
    </div>
    ```

* **2. Property binding (binding de propriedade):** Permite atribuir valores de propriedades do componente a atributos de elementos HTML.

    ```html 
        <p> Meu nome é {{ nome }} </p>
    ```

* **3. Event binding (binding de evento):** Permite que os eventos gerados pelos elementos HTML, como cliques ou mudanças de valor, sejam tratados no componente.

    ```html 
    <button [disable] = "isDesabilitado"> Clique Aqui </button>
    ```

* **4. Two-way binding (binding bidirecional):** Combina o binding de propriedade e de evento para permitir a atualização bidirecional dos dados entre o componente e o template.

    ```html 
    <button [click] = "onClick()"> Clique Aqui </button>
    ```

### Estilos

No Angular, existem diferentes abordagens e estilos para a criação de componentes.
Os mais comuns são:

* **Componentes separados:** cada componente Angular é definido em seu próprio arquivo, contendo o código TypeScript, o template HTML e os estilos CSS ou SCSS associados. Essa é a abordagem mais comum e recomendada para organizar e reutilizar componentes;

* **Estilos embutidos:** você pode definir estilos diretamente no arquivo do componente usando o atributo styles ou styleUrls na anotação @Component. Esses estilos serão aplicados apenas ao componente específico;

* **Estilos globais:** você pode adicionar estilos globais para toda a aplicação no arquivo styles.css ou em um arquivo separado, que é importado no arquivo principal do aplicativo;

* **Pré-processadores CSS:** o Angular oferece suporte a pré-processadores CSS, como SCSS ou LESS. Eles permitem recursos avançados, como variáveis, mixins e aninhamento, para facilitar a estilização dos componentes;

* **Frameworks de estilos:** é comum utilizar frameworks de estilos, como Bootstrap, Material Design ou Tailwind CSS, em conjunto com o Angular. Esses frameworks fornecem estilos prEdefinidos e componentes reutilizáveis que podem ser facilmente integrados aos componentes Angular.

**OBS:** a escolha do estilo de componente depende das necessidades e preferências do projeto. O importante é manter uma abordagem consistente e organizada para facilitar a manutenção e a escalabilidade do aplicativo Angular.