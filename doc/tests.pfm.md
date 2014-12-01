# Testing JSCK

JSCK is developed against several sets of tests:

* the official [JSON Schema Test Suite][canonical]
* tests for schemas that should be considered invalid
* tests for schemas that should be considered valid
* unit tests particular to JSCK

To run all tests for all versions of JSON Schema:

    coffee test


## The official test suite

You'll find the official test suite source as a git submodule at
`test/JSON-Schema-Test-Suite`. Running `coffee tasks/update` will initialize
and/or update the submodule.

The README for the test suite provides a
[good overview of the structure](https://github.com/json-schema/JSON-Schema-Test-Suite#structure-of-a-test)
of the JSON test files.


As a concrete example, here is the first case for the "items" attribute in Draft 4:

```test/JSON-Schema-Test-Suite/tests/draft4/items.json#L2-24```

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


### JSCK's test harness for the official tests

The test harness allows you to ignore specific tests from the official suite.
Here is how we define the ignores for Draft 4:

```test/draft4/official.coffee#L7-32```


## Invalid Schemas

A tool for working with JSON Schemas must be able to reject invalid schemas.
The official test suite (at this time) only provides tests data for validating
documents against correctly formed schemas, so JSCK introduces a similar
test format for checking the invalidity of schema definitions.  These tests
are defined as CoffeeScript files in `test/draft{3,4}/invalid/`.  Though we
use CoffeeScript for easy maintenance, the actual content could be represented
as JSON, or YAML, or any other data format.

Here's an example of an invalidity test for the "type" attribute:

```test/draft4/invalid/type.coffee#L24-29```

All of the objects in the `schemas` array are invalid schemas that should
cause JSCK (or any other validation library) to reject the schema.

One of the benefits of using CoffeeScript (or JavaScript, or any other
language) to generate the test content is the ability to use helper functions
to create multiple test schemas:

```test/draft4/invalid/type.coffee#L5-9```

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

```test/draft4/valid/reserved.coffee#L5-15```


To run only the validity tests:

    coffee test/draft4/valid.coffee


## Unit tests

To run only the unit tests:

    coffee test/draft4/unit


[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite



