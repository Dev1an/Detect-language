Meteor.startup(function() {
	var preferredLanguage = amplify.store('preferred-language')
	if (preferredLanguage)
		TAPi18n.setLanguage(preferredLanguage)
	else
		TAPi18n.setLanguage(navigator.language.split('-')[0])
})

TAPi18n.setLanguageAmplify = function(language) {
	amplify.store('preferred-language', language)
	TAPi18n.setLanguage(language).always(TAPi18n._afterUILanguageChange)
}