# Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js.

Benchmarking harness and content lives in `benchmarks`, with separate
directories for each draft.  For each draft there are a number of different
benchmarks (contained in subdirectories) that can be run in whole or in part.
This is the basic directory structure:

    benchmarks/
      draft3/
      draft4/
        complex/
        medium/
        trivial/
        index.coffee
        validators.coffee

## Adding Additional Validators

The validators are defined in `validators.coffee`.  Here's an example from
the Draft 4 benchmarks:

```benchmarks/draft4/validators.coffee#L16-25```

The `setup` function returns a validator object usable by the `validate`
function.  The `validate` function performs the actual validation work that
is measured in benchmarking.  The `error` function is used only in the
preflight stage of benchmarking to determine whether the result of the
`validate` function contains any errors. This is useful in making sure that all
the validators are actually operating correctly and thus being compared fairly.



## Adding New Benchmarks

Each individual benchmark consists of a directory containing a schema, a valid
document, and an `index.coffee` file which runs the benchmark.

```benchmarks/draft4/trivial/index.coffee```

The "repeats" parameter determines how many times the document will be
validated during a single measurement sample.





## Running Benchmarks

You can run very specific benchmarks, like the medium-complexity benchmarks for draft 3 only, like so:

`coffee benchmarks/draft3/medium`

You can run all benchmarks for a specific JSON Schema draft:

`coffee benchmarks/draft4`

Or, to run all benchmarks:

`coffee benchmarks/`

You should then see something like this:

```benchmarks/results/all.txt```

