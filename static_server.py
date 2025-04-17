#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class StaticServer(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

def run(server_class=HTTPServer, handler_class=StaticServer, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"✨ Starting static file server on http://localhost:{port} ✨")
    print("🌐 This server only serves the frontend files")
    print("🔮 Make sure the FastAPI server is running on port 5000")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
