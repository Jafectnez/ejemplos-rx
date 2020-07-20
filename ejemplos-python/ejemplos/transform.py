from rx import of, operators as op

class Transformacion():
    
    def mapOperator(self):
        source = of(1, 2, 3, 4, 5 , 6)

        result = source.pipe(
            op.map(lambda item: item * 10)
        )

        result.subscribe(lambda item: print('"Subscribe Map" output: {}'.format(item)))


if __name__ == "__main__":
    example = Transformacion()

    print('****Map operator****')
    example.mapOperator()