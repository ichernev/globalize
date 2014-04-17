## Globalize.plural( value [, locale] )

Return the count group String: `zero`, `one`, `two`, `few`, `many`, or `other`.

### Parameters

**value**

Number to be formatted, eg. `0` (integer), or `3.14` (decimal).

**locale** Optional

Locale string that overrides default.


### Example

```javascript
Globalize.locale( "en" );
Globalize.plural( 0 ); // "other"
Globalize.plural( 1 ); // "one"
Globalize.plural( 2 ); // "other"

Globalize.plural( 0, "ar" ); // "zero"
Globalize.plural( 1, "ar" ); // "one"
Globalize.plural( 2, "ar" ); // "two"
Globalize.plural( 3, "ar" ); // "few"

Globalize.plural( 0, "ru" ); // "many"
Globalize.plural( 1, "ru" ); // "one"
Globalize.plural( 2, "ru" ); // "few"
```
