import os
import requests
from dotenv import load_dotenv

# Load .env file
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    print("API key not found. Check your .env file.")
    exit()

url = "https://api.groq.com/openai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "model": "llama-3.3-70b-versatile",
    "messages": [
        {"role": "user", "content": "Explain role-based access control in one sentence"}
    ],
    "temperature": 0.5
}

try:
    response = requests.post(url, headers=headers, json=data)
    print(response.json())
except Exception as e:
    print("Error:", e)