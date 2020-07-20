from rx import of, operators as op

class Filtracion():

    def filterOperator(self):
        source = of(1, 2, 3, 4, 5, 6, 7, 8, 9)

        result = source.pipe(
            op.filter(lambda item: item % 2 == 0)
        )

        result.subscribe(lambda item: print('"Subscribe Filter" output {}'.format(item)))


if __name__ == "__main__":
    example = Filtracion()

    print('****Filter Operator****')
    example.filterOperator()