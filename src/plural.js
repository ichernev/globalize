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
 * @json [JSON]
 *
 * @locale [String]
 *
 * Return the appropriate message based on the plural group: zero | one | two | few | many | other.
 */
Globalize.plural = function( value, json, locale ) {
	var cldr, form;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	cldr = commonGetCldr( locale );

	if ( !( form = pluralForm( value, cldr ) ) ) {
		throw new Error( "Plural form not found!" );
	}

	return json[ form ];
};

return Globalize;

});
