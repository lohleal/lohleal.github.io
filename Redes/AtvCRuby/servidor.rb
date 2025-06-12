require 'socket'

HOST = 'localhost'
PORT = 9000

server = UDPSocket.new
server.bind(HOST, PORT)

puts "Servidor UDP iniciado em #{HOST}:#{PORT}"

loop do
  # Espera receber uma mensagem (até 1024 bytes)
  data, sender = server.recvfrom(1024)
  message = data.force_encoding('UTF-8')
  client_ip = sender[3]
  client_port = sender[1]

  puts "[CLIENTE #{client_ip}:#{client_port}] : #{message}"

  print 'Responder ao cliente: '
  response = gets.chomp
  server.send(response, 0, client_ip, client_port)
end
