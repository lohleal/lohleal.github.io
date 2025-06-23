require 'socket'

def start_server(host, port)
  client_socket = TCPSocket.new(host, port)
  
  puts 'Type your message: '
  message = gets.chomp
  client_socket.send(message.encode('utf-8'), 0)
  
  client_socket.close
end

HOST = 'localhost'
PORT = 9000       

start_server(HOST, PORT)



