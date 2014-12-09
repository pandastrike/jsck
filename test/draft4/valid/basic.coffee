module.exports = ({json_types}) ->

  "may contain properties which are not schema keywords":
    schemas:

      "string value":
        monkey: "shines"

      "integer value":
        monkey: 84

      "schema value":
        monkey:
          type: "array"


