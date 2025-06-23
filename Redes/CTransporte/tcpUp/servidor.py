import socket

def start_server(host: str, port: int):
    server_socket = None
    try:
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server_socket.bind((host, port))
        server_socket.listen(1)
        print(f'Servidor iniciado em {host}:{port}')

        while True:
            client_socket, address = server_socket.accept()
            print(f"Conexão estabelecida com {address}")
            
            try:
                while True:
                    data = client_socket.recv(1024)
                    if not data:
                        print(f"Cliente {address} desconectou")
                        break
                    message = data.decode('utf-8')
                    print(f"Cliente {address} diz: {message}")
                    
            except ConnectionResetError:
                print(f"Cliente {address} caiu")
            finally:
                client_socket.close()
                print(f"Conexão com {address} encerrada")
    finally:
        if server_socket:
            server_socket.close()
            print("Servidor encerrado")

if __name__ == '__main__':
    HOST = 'localhost'
    PORT = 8000
    start_server(HOST, PORT)


    




