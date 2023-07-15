from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
from IPython.display import display, HTML
from concepts import *

def showRelation(contxt):
    relation = []
    for item1 in contxt.objects:
        for item2 in contxt[[item1]][1]:
            relation.append((item1, item2))
    return relation

def setOfAllConcepts (contxt):
    returnedSet = set()
    for extent,intent in contxt.lattice:
        returnedSet.add((extent, intent))
    return returnedSet

# functions provided by concepts, but not sets
#ctx.intension("a")
#ctx.extension({"2","3"})

# these 2 print attribute, object concepts, but what if obj = attr?
# ctx.__getitem__("2")
#ctx.__getitem__("a")