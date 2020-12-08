// console.log('running in the background', GDOM);
// const targetNode = document.body;
// targetNode.id = 'bodyID';

// const observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.addedNodes.length) {
//       console.log('ggggggggggggggggggggggggggg', mutation.addedNodes);
//     }
//   });
// });

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.contextMenus.create({
//     id: 'sampleContextMenu',
//     title: 'Sample Context Menu',
//   });
// });

// observer.observe(targetNode, {
//   attributes: true,
//   childList: true,
//   characterData: true,
//   all: true,
// });

// chrome.runtime.onMessage.addListener(function (message, sender, reply) {
//   chrome.runtime.onMessage.removeListener(event);
// });
