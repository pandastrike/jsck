module.exports = ({json_types}) ->

  "known attribute name as key of 'definitions' dictionary":
    schemas:

      required:
        definitions:
          required:
            type: "object"

      id:
        definitions:
          id:
            type: "object"

      items:
        definitions:
          items:
            type: "object"

  "nested definitions":
    schemas:

      foo:
        definitions:
          bar: {type: "string"}
          definitions:
            baz: {type: "string"}
