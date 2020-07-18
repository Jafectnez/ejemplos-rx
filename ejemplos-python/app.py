from flask import Flask
from flask_restful import Api

from ejemplos.ejemplo1 import Ejemplo1

app = Flask(__name__)
api = Api(app)

@app.route("/")
def hello():
    """Root route.

    Returns:
        Str: Simple hello world response
    """
    return "Hello World!"

api.add_resource(Ejemplo1, '/ejemplo1')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)