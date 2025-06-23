import socket

def start_client(host: str, port: int):
    client_socket = None
    try:
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client_socket.connect((host, port))
        
        while True:
            message = input('Digite sua mensagem ou "sair": ')
            if message.lower() == 'sair':
                break
                
            client_socket.sendall(message.encode('utf-8'))
            
    except ConnectionRefusedError:
        print("Não foi possível conectar ao servidor")
    finally:
        if client_socket:
            client_socket.close()
            print("Conexão encerrada")

if __name__ == '__main__':
    HOST = 'localhost'
    PORT = 8000
    start_client(HOST, PORT)






