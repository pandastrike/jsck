module.exports =
  api_server:
    url: "http://example.com:8998"
    host: "example.com"
    port: 8998

  transport:
    server: "127.0.0.1:6381"
    queues:
      blocking_timeout: 0

  storage:
    server: "127.0.0.1:5432"
    database: "thingy-test"
    user: "thingy-test"
    password: "password"

  chain:
    api_key_id: "cafebabe"
    api_key_secret: "babecafe"


