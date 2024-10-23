from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/backend/api/sort-number', methods=['GET'])
def get_sorted_numbers():
    numbers = random.sample(range(1, 61), 6)
    sorted_numbers = sorted(numbers)
    return jsonify(sorted_numbers)

if __name__ == '__main__':
    app.run(debug=False)
