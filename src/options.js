/** This was lifted from https://developer.chrome.com/extensions/optionsV2 */
function save_options() {
	var tabSpaces = document.getElementById('tabSpaces')
		.value;
	chrome.storage.sync.set({
		tabSpaces: tabSpaces
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		tabSpaces: 4
	}, function(items) {
		document.getElementById('tabSpaces')
			.value = items.tabSpaces;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save')
	.addEventListener('click',
		save_options);
