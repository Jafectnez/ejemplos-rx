from rx import of, operators as op

class Condicional():

    def filterOperator(self):
        source = of(1,2,3,4,5,6,7,8,9).pipe(
            op.filter(lambda item: item > 4)
        )

        source.subscribe(lambda item: print('"Subscribe Filter" output: {}'.format(item)))


if __name__ == "__main__":
    example = Condicional()

    print('****Filter Operator****')
    example.filterOperator()