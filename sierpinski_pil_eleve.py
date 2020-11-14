__author__ = "david cobac"
__date__ = 20201020

from PIL import Image, ImageDraw
import math


W = 1_000
H = W
im = Image.new("RGB", (W, H), "black")
calque = ImageDraw.Draw(im)


def milieu(A, B):
    # zone à compléter
    pass


def sierpinski(contexte, ABC, niveau, couleur):
    if niveau == 1:
        # zone à compléter
        pass
    else:
        A, B, C = ABC
        D = milieu(A, B)
        E = milieu(A, C)
        F = milieu(B, C)
        # zone à compléter


A, B, C = (0, H), (W, H), (W / 2, H - math.sqrt(3) * W / 2)
nb_figures = 10

for i in range(1, 1 + nb_figures):
    niveau_teinte = (i - 1) * 360 // nb_figures
    c = f"hsl({niveau_teinte}, 90%, 40%)"
    sierpinski(calque, [A, B, C], i, c)

im.save("sierpinski.png")
