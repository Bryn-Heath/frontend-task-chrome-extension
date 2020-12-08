//----------------------------------------------Challenge 1---------------------------------------// *://gitpod.io/*

const topDOC = document;
console.log('main', topDOC);

topDOC.body.addEventListener('contextmenu', function () {
  // class Youtube {
  //   constructor() {}
  //   click() {
  //     console.log('jajajajajajaj');
  //   }
  // }
  //would like to add this if possible

  // element.insertAdjacentHTML('beforebegin', text); // to append to the start

  let li = document.createElement('li');
  li.setAttribute("data-type", 'command');
  //li.setAttribute("data-command", function(){console.log("hi")});
  li.id = 'YouTubeID';
  li.className = 'p-Menu-item';

  let div1 = document.createElement('div');
  div1.className = 'p-Menu-itemIcon';
  li.appendChild(div1);

  let div2 = document.createElement('div');
  div2.className = 'p-Menu-itemLabel';
  div2.innerText = 'Watch Youtube';
  li.appendChild(div2);

  let div3 = document.createElement('div');
  div3.className = 'p-Menu-itemShortcut';
  div3.innerText = 'EZZZZZZZZZZL2P';
  li.appendChild(div3);

  let div4 = document.createElement('div');
  div4.className = 'p-Menu-itemSubmenuIcon';
  li.appendChild(div4);

  topDOC.querySelector('body > div.p-Widget.p-Menu > ul').append(li);

  topDOC.querySelector("#YouTubeID").addEventListener("mouseover", function( event ) {    
    topDOC.querySelector("#YouTubeID").className = "p-Menu-item p-mod-active";  
  }, false);

  topDOC.querySelector("#YouTubeID").addEventListener("mouseleave", function( event ) {    
    topDOC.querySelector("#YouTubeID").className = "p-Menu-item";
  }, false);


  topDOC.querySelector("#YouTubeID").addEventListener("click", function ( ) {
    console.log("click works");
    // const panel = topDOC.querySelector("#theia-app-shell")
    // panel.innerHTML= 


    // topDOC.querySelector("#theia-main-content-panel").innerHTML=` 
    //                   <div class="p-Widget p-TabBar theia-app-centers theia-app-main" data-orientation="horizontal" style="position: absolute; top: 0px; left: 322px; width: 322px; height: 32px;"><div class="p-TabBar-content-container ps"><ul class="p-TabBar-content"><li id="BBBBBBBBBBBBB" title="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" class="p-TabBar-tab p-mod-closable p-mod-current" style="z-index: 1;"><div class="theia-tab-icon-label"><div></div><div class="p-TabBar-tabLabel">theia-logo.svg</div><div></div></div><div class="p-TabBar-tabCloseIcon"></div></li></ul><div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div><div class="p-Widget p-TabBar-toolbar ps" style="overflow: hidden;"><div class="item enabled"><div id="mini-browser.open.source" class="theia-open-file-icon" title="Open Source"></div></div></div></div>
    //                   <div class="p-Widget p-DockPanel-widget" id="mini-browser:file:///workspace/theia/logo/theia-logo.svg" style="position: absolute; top: 32px; left: 322px; width: 322px; height: 864px;"><div class="p-Widget theia-mini-browser" tabindex="0"><div class="theia-mini-browser-toolbar" style="display: none;"><div title="Show The Previous Page" class="theia-mini-browser-previous theia-mini-browser-button"></div><div title="Show The Next Page" class="theia-mini-browser-next theia-mini-browser-button"></div><div title="Reload This Page" class="theia-mini-browser-refresh theia-mini-browser-button"></div><input type="text" class="theia-input"><div title="Open In A New Window" class="theia-mini-browser-open theia-mini-browser-button"></div></div><div class="theia-mini-browser-content-area"><div class="theia-mini-browser-error-bar" style="display: none;"><span class="fa problem-tab-icon"></span><span></span></div><div class="theia-transparent-overlay" style="display: none;"></div><div class="theia-mini-browser-pdf-container" id="-pdf-container" style="display: none;"></div><div class="theia-mini-browser-load-indicator" style="display: none;"></div><iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" src="https://deb753f9-bfd6-4cba-9068-bae615bd7f72.ws-eu03.gitpod.io/mini-browser/workspace/theia/logo/theia-logo.svg" style="display: block;"></iframe></div></div></div>
    // `
     
  })


// <div class="p-Widget p-TabBar theia-app-centers theia-app-main" data-orientation="horizontal" style="position: absolute; top: 0px; left: 468.075px; width: 468.075px; height: 32px;">
//   <div class="p-TabBar-content-container ps">
//     <ul class="p-TabBar-content">
//       <li id="shell-tab-mini-browser:file:///workspace/theia/logo/theia-logo-no-text-black.svg" title="theia-logo-no-text-black.svg" class="p-TabBar-tab p-mod-closable p-mod-current" style="z-index: 1;">
//         <div class="theia-tab-icon-label">
//           <div>
//             </div>
//             <div class="p-TabBar-tabLabel">Youtube Panel</div>
             
              
//               <div class="p-TabBar-tabCloseIcon">
//                 </div>
//                 </li>
//                 </ul>
//                 <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
//                   <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;">
//                     </div>
//                     </div>
//                     <div class="ps__rail-y" style="top: 0px; right: 0px;">
//                       <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;">
//                         </div>
//                         </div>
//                         </div>
//                         <div class="p-Widget p-TabBar-toolbar ps" style="overflow: hidden;">
//                           <div class="item enabled">
//                             <div id="mini-browser.open.source" class="theia-open-file-icon" title="Open Source">
//                               </div>
//                               </div>
//                               <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
//                                 <div class="ps__thumb-x" style="left: 0px; width: 0px;">
//                                   </div></div><div class="ps__rail-y" style="top: 0px; right: 0px;">
//                                     <div class="ps__thumb-y" style="top: 0px; height: 0px;">
//                                       </div>
//                                       </div>
//                                       </div>
                               

  

});

const removeSpinnerContainer = document.querySelector('#root > div.start'); //select the div containing spinner and loading info
//removeSpinnerContainer.remove(); // remove starting div container
removeSpinnerContainer.innerHTML = "" // line 59 or 60 is valid

const appendHere = document.querySelector('#root'); //select div to create new spinner/loading message (my name)
document.querySelector('html');

// NEW LOADING MESSAGE //
let div = document.createElement('div');
div.id = 'bryn';
div.style.cssText = `
    height: 15vh; 
    position: absolute;
    top: 30vh;bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1001;
    color:white;
`;

let h2 = document.createElement('h2');
h2.style.color = 'white';
h2.textContent = '👋 Bryn Heath 👋';
div.appendChild(h2);
// NEW LOADING MESSAGE //

appendHere.append(div); //Finally append the new message to (body root div)

//------------------------------------------------------------------------------------------------//

// const contextMenu = document.querySelector('body > div.p-Widget.p-Menu > ul');
// console.log(contextMenu);

/* <li class="p-Menu-item" data-type="command" data-command="callhierarchy:open">
    <div class="p-Menu-itemIcon"></div>
    <div class="p-Menu-itemLabel">Call Hierarchy</div>
    <div class="p-Menu-itemShortcut">Ctrl+F1</div>
    <div class="p-Menu-itemSubmenuIcon"></div>
</li> */

// const grabNewBodypoller = setInterval(function () {
//   console.log('starttttttt', document);
//   //   const newBody = document.querySelector('body > div.p-Widget.p-Menu > ul');
//   //   if (newBody) {
//   //     console.log('hits', newBody);
//   //     clearInterval(grabNewBodypoller);
//   //   }
//   //   console.log('still going');
// }, 500);

// const observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.addedNodes.length) {
//       console.log('ggggggggggggggggggggggggggg', mutation.addedNodes[0]);
//     }
//   });
// });

// const targetNode = document.body;
// targetNode.id = 'bodyID';

// console.log('object', targetNode);
// observer.observe(targetNode, {
//   attributes: true,
//   childList: true,
//   characterData: true,
//   all: true,
// });

// document.addEventListener('contextmenu', function (e) {
//   //   e.preventDefault();
//   console.log('MENUUUUUU', e);
// });
