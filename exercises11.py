from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"

restklasse2 = { x for x in range (-5,6) if x % 3 == 0}
restklasse1 = { x for x in range (-5,6) if x % 3 == 2}
restklasse3 = { x for x in range (-5,6) if x % 3 == 1}
Anzahl_Elemente_in_Z3 = 3

def multInv(n,k):
    return pow(n,-1,k)

def addInv(n,k):
    return -n%k
