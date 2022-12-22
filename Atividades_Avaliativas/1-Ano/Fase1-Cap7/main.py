print("Formato de resposta: 1 - 2.5 - 11.75")
tempo = input("Tempo como fumante (em anos).......: ")
tempo = float(tempo)
valorMaco = input("Valor do maço......................: ")
valorMaco = float(valorMaco)
quandidadeMacoDia = input("Quantidade de maços por dia........: ")
quandidadeMacoDia = float(quandidadeMacoDia)


meses = tempo * 12

dias = meses * 30

gastoTotal = dias * valorMaco * quandidadeMacoDia

if gastoTotal < 20000:
    print('Com o valor: R$ %.2f voce poderia ter dado entrada num carro' % gastoTotal)


elif gastoTotal >= 20000 and gastoTotal < 50000:
    print('Com o valor: R$ %.2f, você poderia ter comprado um carro popular usado.' % gastoTotal)

else:
    print('Com o valor: R$ %.2f, você poderia ter comprado um carro zero..' % gastoTotal)

