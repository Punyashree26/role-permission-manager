import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()

class GroqClient:
    def __init__(self):
        self.api_key = os.getenv("GROQ_API_KEY")
        self.url = "https://api.groq.com/openai/v1/chat/completions"

    def generate(self, prompt):
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

        data = {
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.5
        }

        retries = 3

        for attempt in range(retries):
            try:
                response = requests.post(self.url, headers=headers, json=data)
                result = response.json()

                # basic validation
                return result["choices"][0]["message"]["content"]

            except Exception as e:
                print(f"[ERROR] Attempt {attempt+1} failed:", e)
                time.sleep(2 ** attempt)  # exponential backoff

        return None