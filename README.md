This repo demos an issue with turbo repo configuration.

Currently this project is configured to run all tasks in parallel (`"dependsOn": []`).

After running `pnpm i` to initialize this project, Start by running `pnpm test`.
After about 10 seconds this will succeed.

Now make a change in `add/index.js` (like changing + to -). Run `pnpm test` again.
Observed that the multiply and subtract tests succeed because they use a cached result, but
the add test will fail. Desired behavior is that we would not get a cached result but instead
all tests would fail.

Now we will attempt to fix this problem by changing `"dependsOn": []` to `"dependsOn": ["^test"]` in
`./turbo.json`. Run tests again using `pnpm test`. Observe that the tests for the add project are now
run before the tests for any other project. Desired behavior is that all tests would run in parallel.
