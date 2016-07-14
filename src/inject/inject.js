getAndApplyTabSpaces();

function getAndApplyTabSpaces() {
	chrome.storage.sync.get("tabSpaces", function (items) {
		if (!chrome.runtime.error) {
			changeTabSpace(items.tabSpaces);
		}
	});
}

function changeTabSpace (numberOfSpaces = 4) {
	var codeTables = document.querySelectorAll('table[data-tab-size]');
	Array.prototype.forEach.call(codeTables, function(element, index){
		element.setAttribute('data-tab-size', numberOfSpaces);
	});
}

var target = document.querySelector('body');

// create observer
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function() {
		getAndApplyTabSpaces();
	});
});

// init observer
observer.observe(target, { attributes: true, childList: true, characterData: true });
