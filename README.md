
# Autocannon 

npx autocannon -c 500 -d 30 --workers 10 --renderStatusCodes --latency --warmup [ -c 1 -d 2 ] localhost:3000
 # -c 500 = usuarios simultanios (500 usuários)
 # -d 30 = tempo que irá rodar (30 segundos)
 # --workers 10 = o node irá criar 10 treats
 # --renderStatusCodes = irá nos retornar quantos irá nos retornar status 200
 # -- latency = irá retornar o relatório completo de latency
 # --warmup [ -c 1 -d 2 ] = teste de carga menor para inicializar 
 # localhost:300 = rota que ira utilizar

 # --debug = mostra sobre os erros
 