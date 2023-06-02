# q2-agenda-ui
Aplicativo mobile, desenvolvido com expo e typescript para agendar tarefas e lembretes com push notification

Utilizado mockserver com as seguintes estruturas:
endpoint users :
{
  "username": stirng,
  "password": string,
  "token": string,
  "id": string
},
endpoint tasks :
{
  "user": string,
  "description": string,
  "expirationTime": string,
  "expirationDate": string,
  "id": string
 }
