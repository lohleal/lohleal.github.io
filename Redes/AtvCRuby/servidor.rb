require 'socket'

def start_server(host, port)
  server_socket = TCPServer.new(host, port)
  
  puts "Servidor iniciado em #{host}:#{port}"
  
  client_socket = server_socket.accept
  data = client_socket.recv(1024)
  message = data.force_encoding('utf-8')
  
  puts message
  
  client_socket.close
end

HOST = 'localhost' 
PORT = 9000       

start_server(HOST, PORT)





