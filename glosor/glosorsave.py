"""import pickle
import os

os.system('cls' if os.name == 'nt' else 'clear')

print("\t. :Glosoooooor:.\n")

glosor = []


Tread = input('Read the words from last time? j/n: ')

if Tread=='j':
        with open('test.txt', 'rb') as fp: glosor = pickle.load(fp)
        print('Read file')

else:
        print('Add words')
        while 1:
                Svglosa = input('Add Swedish word: ')
                Plglosa = input('Add Polish word: ')
                glosa = [Svglosa, Plglosa]
                glosor.append(glosa)

                if 'n' == input('Wanna add another one? j/n: '):
                        break
                

while 1:
        os.system('cls' if os.name == 'nt' else 'clear')

        print('\n\t-Buckle up, it is starting-\n')

        poeng=0

        for g in glosor:
                
                if g[1] == input(g[0] +' = '):
                        print('Correct, nerd\n')
                        poeng = poeng+1

                else:
                        print('Nuh uh, wrong. The right word is: ' + g[1] + '\n')
        
        print('You got ' + str(poeng)+ ' out of '+ str(len(glosor)))

        if 'n' == input('Wanna go again? j/n: '):
                break
        
if 'j' == input('Wanna save the ones you just did? j/n: '):
        with open('test.txt', 'wb') as fp: pickle.dump(glosor, fp)"""


import os
import sqlite3
from sqlite3 import Error

conn = sqlite3.Connection('glosor.db')

def main():
    while True:
        add_glosa()
        list_glosa_table()

        a = input("Want to add ")