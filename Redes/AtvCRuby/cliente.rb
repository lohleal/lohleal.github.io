require 'socket'
require 'thread'

HOST = 'localhost'
PORT = 9000

client = UDPSocket.new

# Thread para ouvir mensagens do servidor
Thread.new do
  loop do
    data, _ = client.recvfrom(1024)
    puts "[SERVIDOR]: #{data.force_encoding('UTF-8')}"
  end
end

# Loop para enviar mensagens
loop do
  print 'Digite sua mensagem: '
  message = gets.chomp
  client.send(message, 0, HOST, PORT)
end
