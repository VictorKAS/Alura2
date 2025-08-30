import os

def exibir_nome_do_app():
    print("""
█▀ ▄▀█ █▄▄ █▀█ █▀█   █▀▀ ▀▄▀ █▀█ █▀█ █▀▀ █▀ █▀
▄█ █▀█ █▄█ █▄█ █▀▄   ██▄ █░█ █▀▀ █▀▄ ██▄ ▄█ ▄█""")

def exibir_menu():
    print('1 - Cadastrar restaurante')
    print('2 - Listar restaurantes')
    print('3 - Ativar restaurante')    
    print('4 - Sair')

def escolher_opcao():
    # opcao_escolhida = input('Escolha uma opção: ')
    opcao_escolhida = int(input('Escolha uma opção: '))
    # opcao_escolhida = int(opcao_escolhida)
    print(f'você escolheu a opção {opcao_escolhida}')

    def finalizar_app():
        os.system('cls')
        print('Finalizando o app\n')
        

    if opcao_escolhida == 1:
        print('Cadastrando restaurante')

    elif opcao_escolhida == 2:
        print('Listando restaurantes')

    elif opcao_escolhida == 3:
        print('Ativando restaurante')

    else:
        finalizar_app()
    # Usando match case (Python 3.10+)
    #opcao_escolhida = int(input('Escolha uma opção: '))
    #match opcao_escolhida:
        #case 1:
           # print('Adicionar restaurante')
        #case 2:
            #print('Listar restaurantes')
        #case 3:
            #print('Ativar restaurante')
        #case 4:
            #print('Finalizar app')
        #case _:
            #print('Opção inválida!')

def main():
    exibir_nome_do_app()
    exibir_menu()
    escolher_opcao()

if __name__ == '__main__':
    main()