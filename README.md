# `babel-plugin-eslint`

**[WARNING] This is untested and unstable, beta software.** To install the beast:

    npm install --save-dev babel-plugin-eslint 

Then use as babel plugin to lint source files on compilation. For example in your `.babelrc`:

    {
      "plugins": [
        "eslint"
      ]
    }

Currently supports only configuration by `.eslintrc` located in folder where `babel` is run.

# License

MIT
