# Security Considerations

## 1. API Key Exposure
- Risk: API key leakage if .env is committed
- Mitigation: Use .gitignore and environment variables

## 2. Prompt Injection
- Risk: Malicious user inputs manipulating AI output
- Mitigation: Input validation and sanitization

## 3. Rate Limiting
- Risk: API abuse or excessive requests
- Mitigation: Add rate limiting (flask-limiter in future)

## 4. Error Handling
- Risk: Crashes exposing system details
- Mitigation: Use try-except and controlled responses

## 5. Data Privacy
- Risk: Sending sensitive data to AI model
- Mitigation: Avoid including personal/sensitive data in prompts