import random
import time
from rx import of, interval, operators as op

class Combinacion():

    def intense_calculation(self, value):
        # Sleep for a random short duration between 0.5 to 2.0 
        # seconds to simulate a long-running calculation
        time.sleep(random.randint(5, 20) * 0.1)
        return value

    def mergeOperator(self):
        source = of(1, 2, 3, 4, 5)
        source2 = of(11,12,13,14,15,16)

        result = source.pipe(
            op.merge(source2)
        )

        result.subscribe(lambda item: print('"Subscribe Merge" output: {}'.format(item)))

    def complexMerge(self):
        # This is infinite
        source = interval(1).pipe(
            op.map(lambda item: item * 10),
            op.map(lambda second: self.intense_calculation(second))
        )
        
        source2 = of('Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon').pipe(
            op.map(lambda second: self.intense_calculation(second))
        )

        result = source.pipe(
            op.merge(source2)
        )
        
        result.subscribe(
            on_next=lambda item: print('"Subscribe Complex Merge" output: {}'.format(item)),
            on_error=lambda err: print('Error: {}'.format(e))
        )

        input('Press any key to exit\n')

if __name__ == "__main__":
    example = Combinacion()

    # print('***Merge Operator****')
    # example.mergeOperator()

    # print('***Merge Operator****')
    # example.complexMerge()