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
    exibir_subtitulo('Finalizando o app')

def voltar_menu():
    input('\n Pressione ENTER para continuar... ')
    main()

def opcao_invalida():
    print('Opção inválida! Tente novamente.\n')
    voltar_menu()

def exibir_subtitulo(texto):
    os.system('cls')
    linha = '*' * (len(texto))
    print(linha)
    print(texto)
    print(linha)
    print()

def cadastrar_restaurante():
    exibir_subtitulo('Cadastrando novos restaurantes')
    nome_do_restaurante = input('Digite o nome do restaurante: ')
    categoria = input(f'Digite o nome da categoria do restaurante {nome_do_restaurante}: ')
    dados_do_restaurante = {'nome':nome_do_restaurante, 'categoria':categoria, 'ativo': False}
    restaurantes.append(dados_do_restaurante)
    print(f'Restaurante {nome_do_restaurante} cadastrado com sucesso!\n')
    voltar_menu()

def listar_restaurantes():
    exibir_subtitulo('Listando os restaurantes')

    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | Status')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = 'ativado' if restaurante['ativo'] else 'desativado'
        print(f'- {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | {ativo}')

    voltar_menu()

def alternar_estado_restaurantes():
    exibir_subtitulo('Alterando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
    
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado')
    
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
            alternar_estado_restaurantes()
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