import random
from rx import create, operators as op

class Multidifusion():

    def multicastOperator(self):
        # `multicast` is changed in Python by `publish`
        def template_function(observer, scheduler):
            observer.on_next(random.random())
            observer.on_completed()

        source = create(template_function)

        source.subscribe(lambda item: print('"Subscribe without Multicast 1" output: {}'.format(item)))

        source.subscribe(lambda item: print('"Subscribe without Multicast 2" output: {}'.format(item)))

        source = source.pipe(
            op.publish()
        )

        source.subscribe(lambda item: print('"Subscribe with Multicast 1" output: {}'.format(item)))

        source.subscribe(lambda item: print('"Subscribe with Multicast 2" output: {}'.format(item)))

        source.connect()

if __name__ == "__main__":
    example = Multidifusion()

    print('***Multicast Publish Operator****')
    example.multicastOperator()