import http.server
import socketserver

PORT = 8000 

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serveur en cours d'exécution sur http://127.0.0.1:{PORT}...")
    httpd.serve_forever()
