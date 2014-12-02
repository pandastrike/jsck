# Testing JSCK

JSCK is developed against several sets of tests:

* the official [JSON Schema Test Suite][canonical]
* tests for schemas that should be considered invalid
* tests for schemas that should be considered valid
* unit tests particular to JSCK

To run all tests for all versions of JSON Schema:

    coffee test


## The official test suite

The good folks behind JSON Schema have provided a language-agnostic test suite,
composed of JSON documents that define schemas and input objects that should be
judged as valid or invalid for each schema. The README for the test suite
provides a
[good overview of the structure](https://github.com/json-schema/JSON-Schema-Test-Suite#structure-of-a-test)
of the JSON test files.

JSCK includes the official test suite as a git submodule at
`test/JSON-Schema-Test-Suite`. Running `coffee tasks/update` will initialize
and/or update the submodule.


As a concrete example, here is the first case for the "items" attribute in Draft 4:

```json
    {
        "description": "a schema given for items",
        "schema": {
            "items": {"type": "integer"}
        },
        "tests": [
            {
                "description": "valid items",
                "data": [ 1, 2, 3 ],
                "valid": true
            },
            {
                "description": "wrong type of items",
                "data": [1, "x"],
                "valid": false
            },
            {
                "description": "ignores non-arrays",
                "data": {"foo" : "bar"},
                "valid": true
            }
        ]
    },

```


Breaking this down

* the case described is for when the value of "items" is a schema
* the schema under consideration does not declare a type for the input data
* if the input data is an array, all of its items must be integers

There are three tests for this case:

* valid input data
* invalid input data
* irrelevant input data


### Running the official tests

To run the official tests for a specific draft:

    coffee test/draft4

It can be difficult to troubleshoot bugs when running hundreds of tests.
To run only the tests for a specific attribute (in this case,
"patternProperties"):

    coffee test/draft4 patternProperties

And to run only a certain test for that attribute, append the (zero-based)
index of the test:

    coffee test/draft4 patternProperties 3


### Ignoring specific tests

The test harness provided by JSCK allows you to ignore specific tests from
the official suite. Here is how we define the ignores for Draft 4:

```coffee
runner = new SuiteRunner "draft4",
  ignore:
    # Doubtful value for the majority of use cases.
    # https://github.com/pandastrike/jsck/issues/42
    minLength: [
      "one supplementary Unicode code point is not long enough"
    ]
    maxLength: [
      "two supplementary Unicode code points is long enough"
    ]

    # Not supported because of the potential performance implications
    # https://github.com/pandastrike/jsck/issues/2
    uniqueItems: true

    # Impossible to test when using output of JSON.parse
    # https://github.com/pandastrike/jsck/issues/6
    "optional/zeroTerminatedFloats": true
    
    # The following items require fetching of remote schemas.
    # Support for remote references is planned for the next version of JSCK
    refRemote: true
    ref: [
      "remote ref, containing refs itself"
    ]
    definitions: true

```



## Invalid Schemas

A tool for working with JSON Schemas must be able to reject invalid schemas.
The official test suite (at this time) only provides tests data for validating
documents against correctly formed schemas, so JSCK introduces a similar
test format for checking the invalidity of schema definitions.  These tests
are defined as CoffeeScript files in `test/draft{3,4}/invalid/`.  Though we
use CoffeeScript for easy maintenance, the actual content could be represented
as JSON, or YAML, or any other data format.

Here's an example of an invalidity test for the "type" attribute:

```coffee
    {
      description: "string values must be one of the primitive types"
      schemas: [
        type: "bogus"
      ]
    }

```


All of the objects in the `schemas` array are invalid schemas that should
cause JSCK (or any other validation library) to reject the schema.

One of the benefits of using CoffeeScript (or JavaScript, or any other
language) to generate the test content is the ability to use helper functions
to create multiple test schemas:

```coffee
    {
      description: "value MUST be either a string or an array"
      schemas: for value in json_types.except("string", "array")
        {type: value}
    }

```


In the above example, `schemas` is defined using a list comprehension and a 
helper function that generates an invalid schema for all of the primitive JSON
Schema types except those explicitly named.

To run only the invalidity tests:

    coffee test/draft4/invalid.coffee

## Valid Schemas

It is also valuable to have tests for the acceptance of valid schemas that
buggy or overzealous libraries might reject.  JSCK's schema validity tests
are defined as CoffeeScript files in `test/draft{3,4}/valid/`.

As an example, the names of JSON Schema attributes ("properties", "type",
"required", etc.) are not reserved terms.  It is legal to use these strings
as the names of object properties.  During one round of refactoring, JSCK
began rejecting schemas that used JSON Schema attribute names as properties.

To prevent this, a validity test was added:

```coffee
    {
      description: "using known attribute name as a property name"
      schemas: [
        {
          type: "object"
          properties:
            required:
              type: "boolean"
        }
      ]
    }

```



To run only the validity tests:

    coffee test/draft4/valid.coffee


## Unit tests

JSCK also uses a few unit tests to assist in developing and troubleshooting
some of the internal functions, such as scope resolution and URI construction.

To run only the unit tests for a particular draft version:

    coffee test/draft4/unit


[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite
