# Nome: Ronaldo Luiz Pinto Filho
# RM96679
consolidado = 0;
perda_manual = 0;
perda_maquina = 0;

for i in range(1, 13):
    qntd = float(input("Mês " + str(i) +"..........: "));
    i_manual = qntd * 0.05;
    i_maquina = qntd * 0.15;
    consolidado += qntd;
    perda_manual += i_manual;
    perda_maquina += i_maquina; 
    print(" *Perda colheita Manual.......: %.2f" % i_manual);
    print(" *Perda colheita c/Maquinas....: %.2f\n" % i_maquina);
    
else:
    print("__________________________Relatorio Consolidado__________________________\n");
    print("Colheita do ano.......: " + str(consolidado)+ "\n");
    print("______Projeção de gasto______");
    print("Colheita manual......: " + str(perda_manual)) ;
    print("Colheita com Máquinas: " + str(perda_maquina) + "\n\n");


