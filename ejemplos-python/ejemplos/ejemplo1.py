from flask_restful import Resource

class Ejemplo1(Resource):

    def post(self):
        return "Post Ejemplo 1"