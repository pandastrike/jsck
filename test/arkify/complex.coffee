
module.exports =
  type: "array"
  items: {$ref: "#transaction"}
  minItems: 1

  definitions:

    base58:
      id: "#base58"
      # https://en.bitcoin.it/wiki/Base58Check_encoding
      type: "string"
      pattern: "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$"

    hex:
      id: "#hex"
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
      required: ["metadata", "hash", "inputs", "outputs"]
      properties:

        metadata:
          type: "object"
          required: ["amount", "fee"]
          properties:
            amount:
              type: "integer"
            fee:
              type: "integer"
              multipleOf: 10000
            status:
              type: "string"
              enum: ["unsigned", "unconfirmed", "confirmed", "invalid"]
            confirmations:
              type: "integer"
              minimum: 0
            block_time:
              type: "integer"

        version: {type: "integer"}
        lock_time: {type: "integer"}
        hash: {$ref: "#tx_id"}
        inputs:
          type: "array"
          items: {$ref: "#input"}
          minItems: 1
        outputs:
          type: "array"
          items: {$ref: "#output"}
          minItems: 1



    input:
      id: "#input"
      type: "object"
      additionalProperties: false
      required: ["index", "output", "script_sig"]
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
      additionalProperties: false
      required: ["hash", "index", "value", "script"]
      properties:
        hash: {$ref: "#tx_id"}
        index:
          type: "integer"
          minimum: 0
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
        address: {$ref: "#address"}
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


