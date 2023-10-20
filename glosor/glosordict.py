def main():
    glosLista = {}

    print("Glosoooooor")
    while True:
        svGlosa = input("Swedish word: ")
        plGlosa = input("Polish translation: ")

        glosLista.update({svGlosa : plGlosa})

        fortsatt = input("Wanna add more? j/n: ")
        if fortsatt == "n":
            break

    while True:

        print("\n Buckle up, we are starting")

        for glosa in glosLista:
            svar = input(f"\n {glosa} : ")

            if svar == glosLista[glosa]:
                print("Correct, nerd")
            else :
                print(f"\nNuh uh, the right answer is {glosLista[glosa]}")
        
        fortsatt2 = input("Wanna try again? j/n: ")
        if fortsatt2 == "n":
            break


main()