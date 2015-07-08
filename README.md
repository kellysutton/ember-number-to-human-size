# ember-number-to-human-size

[![Build Status](https://travis-ci.org/kellysutton/ember-number-to-human-size.png?branch=master)](https://travis-ci.org/kellysutton/ember-number-to-human-size)

An Ember template helper inspired by the Rails [number_to_human_size](http://api.rubyonrails.org/classes/ActionView/Helpers/NumberHelper.html) method. It makes displaying file sizes in
human-readable fashiong easy.

It supports both IEC Byte Units (KiB, MiB, etc.) and traditional byte units (kB, MB, etc.).

## Installation

```
$ ember install ember-number-to-human-size
```

## Usage

Pretty darn simple. There are three parameters, the second and third being optional:

```handlebars
{{number-to-human-size 1000}} {{!-- prints "1 kB" to the template  --}}
```

If we want to use IEC Byte Units, just set the second parameter to true:

```handlebars
{{number-to-human-size 1024 true}} {{!-- prints "1 kiB" to the template  --}}
{{number-to-human-size 1024 false 3}} {{!-- prints "1.024 kB" to the template  --}}
```

Finally, the third parameter lets you specific the number of significant digits. It
defaults to 0:

```handlebars
{{number-to-human-size 1024 false 0}} {{!-- prints "1 kB" to the template  --}}
{{number-to-human-size 1024 false 1}} {{!-- prints "1.0 kB" to the template  --}}
{{number-to-human-size 1024 false 2}} {{!-- prints "1.02 kB" to the template  --}}
{{number-to-human-size 1024 false 3}} {{!-- prints "1.024 kB" to the template  --}}
```

## Running a Demo App

```
$ ember server
$ open http://localhost:4200
```

## Running Tests

```
$ ember test
```


## Building

```
$ ember build
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
