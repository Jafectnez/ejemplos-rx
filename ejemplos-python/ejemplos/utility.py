import random
import time
from rx import of, interval, operators as op

class Utilidad():

    def intense_calculation(self, value):
        # Sleep for a random short duration between 0.5 to 2.0 
        # seconds to simulate a long-running calculation
        time.sleep(random.randint(5, 20) * 0.1)
        return value

    def doOperator(self):
        source = of(1,2,3,4,5,6,7).pipe(
            op.do_action(lambda item: print('"Do Operator" output: {}'.format(item * 2)))
        )

        source.subscribe(lambda item: print('"Subscribe Do" output: {}'.format(item)))

    def timestampOperator(self):
        source = interval(1).pipe(
            op.map(lambda second: self.intense_calculation(second)),
            op.timestamp()
        )
        
        source2 = of('Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon').pipe(
            op.map(lambda second: self.intense_calculation(second)),
            op.timestamp()
        )

        result = source.pipe(
            op.merge(source2)
        )

        result.subscribe(lambda item: print('"Subscribe Timestamp" output: {}'.format(item)))

if __name__ == "__main__":
    example = Utilidad()

    # print('****Do Operator****')
    # example.doOperator()

    # print('****Timestamp Operator****')
    # example.timestampOperator()