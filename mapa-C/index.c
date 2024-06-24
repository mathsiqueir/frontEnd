#include <stdio.h>

#include <stdlib.h>
#include <locale.h>

#define MAX_SIZE 100

struct Pilha {
    char itens[MAX_SIZE];
    int topo;
};

void inicializar(struct Pilha *p) {
    p->topo = -1;
}

int vazia(struct Pilha *p) {
    return p->topo == -1;
}

void push(struct Pilha *p, char item) {
}

char pop(struct Pilha *p) {

}

char topo(struct Pilha *p) {
}

void limpar(struct Pilha *p) {
}

int main(void) {
    setlocale(LC_ALL, "Portuguese");
    struct Pilha p;
    inicializar(&p);

    while (1) {
        printf("\nDigite 1 para adicionar uma palavra à pilha\n");
        printf("Digite 2 para desempilhar a palavra\n");
        printf("Digite 3 para limpar a pilha\n");
        printf("Digite 4 para exibir o topo da pilha\n");
        printf("Digite 0 para sair\n");

        int opcao;
        printf("\nEscolha uma opção: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: {
                char palavra[MAX_SIZE];
                printf("\nDigite a palavra a ser adicionada: ");
                scanf("%s", palavra);
                for (int i = 0; i < strlen(palavra); i++) {
                    push(&p, palavra[i]);
                }
                printf("\nPalavra '%s' adicionada à pilha.\n", palavra);
                break;
            }
            case 2: {
                char palavra[MAX_SIZE];
                int indice = 0;
                while (!vazia(&p)) {
                    palavra[indice++] = pop(&p);
                }
                palavra[indice] = '\0';
                if (indice>0) {
                    printf("\nPalavra desempilhada: '%s'\n", palavra);
                } else {
                    printf("\nPilha vazia. Nenhum elemento para mostrar.\n");
                }
                break;
            }
            case 3: {
                limpar(&p);
                printf("\nPilha limpa.\n");
                break;
            }
            case 4: {
                char top = topo(&p);
                if (top == '\0') {
                    printf("\nPilha vazia. Nenhum elemento para mostrar.\n");
                } else {
                    printf("\nElemento no topo da pilha: %c\n", top);
                }
                break;
            }
            case 0: {
                return 0;
            }
            default: {
                printf("\nOpção inválida. Digite 1, 2, 3, 4 ou 0.\n");
            }
        }
    }
    return 0;
}