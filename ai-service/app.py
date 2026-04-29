from flask import Flask, request, jsonify
from services.groq_client import GroqClient

app = Flask(__name__)
client = GroqClient()

@app.route("/describe", methods=["POST"])
def describe():
    data = request.json
    role = data.get("role")

    if not role:
        return jsonify({"error": "Role is required"}), 400

    prompt = f"Describe the responsibilities of a {role} in one paragraph"
    response = client.generate(prompt)

    return jsonify({"description": response})


@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    role = data.get("role")

    if not role:
        return jsonify({"error": "Role is required"}), 400

    prompt = f"List permissions required for a {role}"
    response = client.generate(prompt)

    return jsonify({"permissions": response})


if __name__ == "__main__":
    app.run(debug=True)