print('.:GLOSOR:.\n')

gloslistaArray=[]

mata='j'
i=0
tempglosa=''

while (mata != 'n'):
    glosaArray=[]
    input_variable = input("Svensk glosa: ")
    input_variable2 = input("Polsk glosa: ")
    glosaArray.append(str(input_variable))
    glosaArray.append(str(input_variable2))


    gloslistaArray.append(glosaArray)
    mata = input('Add another one? j/n ')
    i = i+1


mata ='j'


while (mata != 'n'):
    print ("\n" * 100)
    print('\nWe are now starting!\n')
    t_antalR=0
    t_antalglosor = len(gloslistaArray)


    for a in gloslistaArray:
        sv_glosa=a[0] + ' = '
        pl_glosa=a[1]


        tglosa = input(sv_glosa)

        if tglosa == pl_glosa:
            print('Thas right! \n')
            t_antalR=t_antalR+1

        else:
            print('Nuh uh, the right one is : ', pl_glosa , '\n' )
        
    if t_antalR==t_antalglosor :
        print('Congrats, you are a nerd.')
    
    else :
        print('Close enough, you got ', t_antalR , 'out of ', t_antalglosor ,)
    
    mata = input('Wanna go again? j/n \n')