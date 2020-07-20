from rx import of, operators as op

class Errores():

    def catchOperator(self):
        def test(i):
            if (i == 4):
                raise Exception('four')
            else:
                return i

        source = of(1,2,3,4,5,6,7)
        handler = of(11,12,13,14)

        result = source.pipe(
            op.map(lambda item: test(item)),
            op.catch(handler)
        )

        result.subscribe(lambda item: print('"Subscribe Catch" output: {}'.format(item)))

if __name__ == "__main__":
    example = Errores()

    print('****Catch Operator****')
    example.catchOperator()