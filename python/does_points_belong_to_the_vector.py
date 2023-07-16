# https://www.codewars.com/kata/554e5ef27daf4082f6000071

from preloaded import vector_length, point_vs_vector_v2
import math


def point_in_vector(point, vector):
    x, y = point
    (x1, y1), (x2, y2) = vector

    vector_length_squared = (x2 - x1) ** 2 + (y2 - y1) ** 2

    dot_product = (x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)

    if vector_length_squared == 0:
        return math.isclose(x, x1) and math.isclose(y, y1)
    else:
        parameter = dot_product / vector_length_squared

        if 0 <= parameter <= 1:
            distance_squared = ((x1 + parameter * (x2 - x1)) - x) ** 2 + ((y1 + parameter * (y2 - y1)) - y) ** 2

            return distance_squared <= 10**-10
        else:
            return False