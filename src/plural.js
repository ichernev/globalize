define([
	"./common/get-cldr",
	"./core",
	"./plural/form"
], function( commonGetCldr, Globalize, pluralForm ) {

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
	var cldr, form;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	cldr = commonGetCldr( locale );

	if ( !( form = pluralForm( value, cldr ) ) ) {
		throw new Error( "Plural form not found!" );
	}

	return form;
};

return Globalize;

});
