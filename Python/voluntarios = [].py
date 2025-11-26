estoque1 = tuple(input("Produtos do estoque 1 (separados por vírgula): ").split(", "))
estoque2 = tuple(input("Produtos do estoque 2 (separados por vírgula): ").split(", "))
estoque_combinado = estoque1 + estoque2  
print(f"Estoque combinado:\n{estoque_combinado}")


convidados = ['Ana', 'Pedro', 'Carlos']
print(f"Lista atual de convidados: {convidados}")
novo_convidado = input("Digite o nome do novo convidado: ")
posicao = int(input("Digite a posição na qual deseja inserir o convidado: "))
convidados.insert(posicao - 1, novo_convidado)  
print(f"Lista atualizada de convidados: {convidados}")


eventos_registrados = ['Encerramento', 'Palestra 3', 'Palestra 2', 'Abertura']

eventos_registrados.reverse()
print(f"Ordem corrigida: {eventos_registrados}")


resultados = ["Ana", "Carlos", "Pedro"]
print("Lista original:", resultados)

erro = input("Digite o nome incorreto: ")
if erro in resultados:
    correto = input("Digite o nome correto: ")
    posicao = resultados.index(erro)
    resultados.remove(erro)
    resultados.insert(posicao, correto)
    print(f"O nome {erro} foi substituído por {correto}.")
    print("Lista atualizada:", resultados)
else:
    print("Nome não encontrado.")


pedidos = input("Pedidos feitos (separados por vírgula): ").split(", ")
pedidos.pop()
print("Pedidos finais:")
print(pedidos)


notas = input("Digite as notas dos alunos separadas por vírgula: ").split(", ")
notas = [float(nota) for nota in notas]
media = sum(notas) / len(notas)
print(f"Média final da turma: {media:.2f}")


dados = input("Digite os dados do aluno no formato Nome, Idade, Nota separados por vírgula: ").split(", ")

for i in range(0, len(dados), 3):
    nome, idade, nota = dados[i], int(dados[i + 1]), float(dados[i + 2])
    print(f"Aluno: {nome}")
    print(f"Idade: {idade}")
    print(f"Nota: {nota}\n")