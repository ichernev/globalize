define([
	"./common/get-locale",
	"./core",
	"./plural/form"
], function( commonGetLocale, Globalize, pluralForm ) {

/**
 * Globalize.plural( value, locale )
 *
 * @value [Number]
 *
 * @locale [String]
 *
 * Return the count group String: zero | one | two | few | many | other.
 */
Globalize.plural = function( value, locale ) {
	var form;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	locale = commonGetLocale( locale );

	if ( !( form = pluralForm( value, locale ) ) ) {
		throw new Error( "Plural form not found!" );
	}

	return form;
};

return Globalize;

});
