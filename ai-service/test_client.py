from services.groq_client import GroqClient

client = GroqClient()

response = client.generate("Explain RBAC in one line")

print(response)