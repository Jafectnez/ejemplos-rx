from rx import of, create, interval

class Creacion():

    def ofOperator(self):
        source = of('Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon')
        
        source.subscribe(lambda item: print('"Subscribe Of" output: {}'.format(item)))

    def createOperator(self):
        def template_function(observer, scheduler): 
            observer.on_next('Alpha')
            observer.on_next('Beta')
            observer.on_next('Gamma')
            observer.on_next('Delta')
            observer.on_next('Epsilon')
            observer.on_completed()

        source = create(template_function)

        source.subscribe(
            on_next = lambda item: print('"Subscribe Create" output: {}'.format(item))
        )

if __name__ == "__main__":
    example = Creacion()

    print('****Of Operator****')
    example.ofOperator()

    # print('****Create Operator****')
    # example.createOperator()