import requests

response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username': 'admin', 'password': 'extron'})

print(f"Getting the response code after auth: {response.status_code}")
print(f"{response.json()}")

response = requests.post('http://127.0.0.1:8000/api/token/', data={'username': 'admin', 'password': 'extron'})

print(response.status_code)
print(response.json())

response = requests.post('http://127.0.0.1:8000/api/token/', data={'username': 'admin', 'password': 'extron'})

print(response.status_code)
print(response.json())
