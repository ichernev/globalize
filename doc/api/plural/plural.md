## Globalize.plural( value [, locale] )

It supports the creation of internationalized messages with plural inflection.
This function returns the plural category group `zero`, `one`, `two`, `few`,
`many`, or `other`. So, the appropriate message can be selected based on the
number value.

Note: Typically, plural formatting is done via MessageFormat with a plural
argument type, rather than using this stand-alone function. 

### Parameters

**value**

Number to be tested?, eg. `0` (integer), or `3.14` (decimal).

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
