import os

restaurantes = [{'nome':'Praça', 'categoria':'Japonesa', 'ativo': False}, {'nome':'Pizza Suprema', 'categoria':'Pizza', 'ativo': True}, 
                {'nome':'Cantina', 'categoria':'Italiana', 'ativo': False}]

def exibir_nome_do_app():
    print("""
█▀ ▄▀█ █▄▄ █▀█ █▀█   █▀▀ ▀▄▀ █▀█ █▀█ █▀▀ █▀ █▀
▄█ █▀█ █▄█ █▄█ █▀▄   ██▄ █░█ █▀▀ █▀▄ ██▄ ▄█ ▄█""")

def exibir_menu():
    print('1 - Cadastrar restaurante')
    print('2 - Listar restaurantes')
    print('3 - Ativar restaurante')    
    print('4 - Sair')

def finalizar_app():
    exiir_subtitulo('Finalizando o app')

def voltar_menu():
    input('\n Pressione ENTER para continuar... ')
    main()

def opcao_invalida():
    print('Opção inválida! Tente novamente.\n')
    voltar_menu()

def exiir_subtitulo(texto):
    os.system('cls')
    print(texto)
    print()

def cadastrar_restaurante():
    exiir_subtitulo('Cadastrando novos restaurantes')
    nome_do_restaurante = input('Digite o nome do restaurante: ')
    restaurantes.append(nome_do_restaurante)
    print(f'Restaurante {nome_do_restaurante} cadastrado com sucesso!\n')
    voltar_menu()

def listar_restaurantes():
    exiir_subtitulo('Listando os restaurantes')
    
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = restaurante['ativo']
        print(f'- {nome_restaurante} | {categoria} | {ativo}')

    voltar_menu()

def escolher_opcao():
    try:
        # opcao_escolhida = input('Escolha uma opção: ')
        opcao_escolhida = int(input('Escolha uma opção: '))
        # opcao_escolhida = int(opcao_escolhida)
    
        def finalizar_app():
            os.system('cls')
            print('Finalizando o app\n')
            
        if opcao_escolhida == 1:
            cadastrar_restaurante()

        elif opcao_escolhida == 2:
            listar_restaurantes()

        elif opcao_escolhida == 3:
            print('Ativando restaurante')
        
        elif opcao_escolhida == 4:
            finalizar_app() 
        
        else:
            opcao_invalida()
    
    except:
        opcao_invalida()
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
    os.system('cls')
    exibir_nome_do_app()
    exibir_menu()
    escolher_opcao()

if __name__ == '__main__':
    main()