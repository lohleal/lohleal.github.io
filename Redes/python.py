class Pessoa:

    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def  apresentar(self):
        print(f'Olá meu nome é {self.nome} e tenho {self.idade} anos.')

pessoa = Pessoa('João', 25)
pessoa.apresentar()

nome = 'leandro'
idade = 20
verdadeiro = True
falso = False

frutas = ['maça', 'banana', 'laranja', 0]

dicionario={
    'Aluno 1': 'Davi',
        'Aluno 2': 'Daniel',
        0: "Valor 0",
        'frutas': frutas,

}

print (dicionario ['Aluno 1'])
print (dicionario)

# array = [
#     [1,2,3],
#     [4,5,6],
#     [7,8,9]
# ]
def funcao_exemplo():
    print('Função exemplo jcasdjf')


for fruta in frutas:
    print('Fruta', frutas)

if (verdadeiro):
    print('Verdadeiro')
else:
    print('Falso')

if not (verdadeiro ):
    pass

#while(idade < 19):
#    print('idade', idade)

if (verdadeiro):
    pass

print(nome)
print(idade)