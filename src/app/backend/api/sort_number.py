from flask import Flask, jsonify
import random

app = Flask(__name__)

def sort_number():
    aposta = random.sample(range(1, 61), 6)
    return sorted(aposta)

@app.route('/backend/api/sort-number', methods=['GET'])
def get_sorted_numbers():
    sorted_numbers = sort_number()
    return jsonify(sorted_numbers)

if __name__ == '__main__':
    app.run(debug=False)
