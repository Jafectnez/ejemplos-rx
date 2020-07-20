from rx import of, operators as op

class Matematicas():

    def countOperator(self):
        source = of(1, 2, 3, 4, 5, 6, 7, 8, 9)

        result = source.pipe(
            op.count()
        )

        result.subscribe(lambda item: print('"Subscribe Filter" output {}'.format(item)))


if __name__ == "__main__":
    example = Matematicas()

    print('****Filter Operator****')
    example.countOperator()