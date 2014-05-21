## .formatPlural( value, messageData )

It supports the creation of internationalized messages with plural inflection by
returning the appropriate message based on value's plural group: `zero`, `one`,
`two`, `few`, `many`, or `other`.

### Parameters

**value**

A Number for which the plural message should be formatted for.

**messageData**

JSON object with message data.

### Example

```javascript
var messageData = {
  one: "You have 1 unread message",
  other: "You have {0} unread messages"
};
Globalize.locale( "en" );
Globalize.plural( 0, messageData ); // "You have 0 unread messages"
Globalize.plural( 1 ); // "You have 1 unread message"
Globalize.plural( 2 ); // "You have 2 unread messages"

Globalize.plural( 0, "ar" ); // "zero"
Globalize.plural( 1, "ar" ); // "one"
Globalize.plural( 2, "ar" ); // "two"
Globalize.plural( 3, "ar" ); // "few"

Globalize.plural( 0, "ru" ); // "many"
Globalize.plural( 1, "ru" ); // "one"
Globalize.plural( 2, "ru" ); // "few"
```
