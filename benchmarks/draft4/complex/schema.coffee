
module.exports =
  type: "array"
  items: {$ref: "#transaction"}
  minItems: 1

  definitions:

    base58:
      id: "#base58"
      # https://en.bitcoin.it/wiki/Base58Check_encoding
      description: """
        A value encoded as base58.
      """
      type: "string"
      pattern: "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$"

    hex:
      id: "#hex"
      description: """
        A value encoded as hexadecimal.
      """
      type: "string"
      pattern: "^[0123456789A-Fa-f]+$"

    tx_id:
      id: "#tx_id"
      allOf: [
        {$ref: "#hex"}
        {
          minLength: 64
          maxLength: 64
        }
      ]

    address:
      id: "#address"
      allOf: [
        {$ref: "#base58"}
        {
          minLength: 34
          maxLength: 34
        }
      ]

    signature:
      id: "#signature"
      allOf: [
        {$ref: "#hex"}
        {
          minLength: 128
          maxLength: 128
        }
      ]


    transaction:
      id: "#transaction"
      additionalProperties: false
      properties:

        metadata:
          type: "object"
          properties:
            amount:
              type: "integer"
            fee:
              type: "integer"
              multipleOf: 10000
            status:
              type: "string"
              enum: ["unsigned", "unconfirmed", "confirmed", "invalid", "canceled"]
            confirmations:
              type: "integer"
              minimum: 0
            block_time:
              type: "integer"
              format: "utc-millisec"

        version: {type: "integer"}
        lock_time: {type: "integer"}
        hash: {$ref: "#tx_id"}
        inputs:
          type: "array"
          items: {$ref: "#input"}
        outputs:
          type: "array"
          items: {$ref: "#output"}



    input:
      id: "#input"
      type: "object"
      required: ["index", "output", "sig_hash"]
      properties:
        index:
          type: "integer"
          minimum: 0
        output: {$ref: "#output"}
        sig_hash: {$ref: "#hex"}
        script_sig: {$ref: "#hex"}
        signatures:
          type: "object"
          description: "A dictionary of signatures.  Keys represent keypair names"
          minProperties: 1
          maxProperties: 3
          additionalProperties: {$ref: "#signature"}


    output:
      id: "#output"
      type: "object"
      properties:
        hash: {$ref: "#tx_id"}
        metadata:
          type: "object"
          dependencies:
            # if a wallet path is given, the metadata must also contain the
            # HDW public seed values.  Use case would be for verifying that
            # a change output is going to a legit address.
            wallet_path: ["public_seeds"]
          properties:
            wallet_path:
              type: "string"
            public_seeds:
              type: "object"
              minProperties: 1
              maxProperties: 3
              additionalProperties:
                anyOf: [
                  {$ref: "#base58"}
                  {$ref: "#hex"}
                ]
        index:
          type: "integer"
          minimum: 0
        address: {$ref: "#address"}
        value:
          type: "integer"
        script:
          type: "object"
          properties:
            type:
              type: "string"
              enum: ["standard", "p2sh"]
            asm:
              type: "string"

