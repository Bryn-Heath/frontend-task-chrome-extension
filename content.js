//----------------------------------------------Challenge 1---------------------------------------// 

const topDOC = document;
 
topDOC.body.addEventListener('contextmenu', function () { 
  //-----------Challenge 2------------// 
 
  // element.insertAdjacentHTML('beforebegin', text); // to append to the start

  let li = document.createElement('li');
  li.setAttribute("data-type", 'command');
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
  div3.innerText = 'Opens a side panel';
  li.appendChild(div3);

  let div4 = document.createElement('div');
  div4.className = 'p-Menu-itemSubmenuIcon';
  li.appendChild(div4);

  topDOC.querySelector('body > div.p-Widget.p-Menu > ul').append(li);

  topDOC.querySelector("#YouTubeID").addEventListener("mouseover", function(  ) {    
    topDOC.querySelector("#YouTubeID").className = "p-Menu-item p-mod-active";  
  }, false);

  topDOC.querySelector("#YouTubeID").addEventListener("mouseleave", function(  ) {    
    topDOC.querySelector("#YouTubeID").className = "p-Menu-item";
  }, false);


  topDOC.querySelector("#YouTubeID").addEventListener("click", function () { 
    let YouTubeDiv = document.createElement('div');
    YouTubeDiv.id = "YouTubeDivID";
    topDOC.querySelector("#theia-main-content-panel").append(YouTubeDiv);
    topDOC.querySelector("#YouTubeDivID").innerHTML = `<div class="p-Widget p-TabBar theia-app-centers theia-app-main" data-orientation="horizontal" style="position: absolute; top: 0px; right:0; width: 650px; height: 32px;"><div class="p-TabBar-content-container ps"><ul class="p-TabBar-content"><li id="YOUTUBEPanelHeader" title="YOUTUBE Panel" class="p-TabBar-tab p-mod-closable p-mod-current" style="z-index: 1;"><div class="theia-tab-icon-label"><div></div><div class="p-TabBar-tabLabel">YOUTUBE Panel</div><div></div></div><div class="p-TabBar-tabCloseIcon"></div></li></ul><div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div><div class="p-Widget p-TabBar-toolbar p-mod-hidden ps" style="overflow: hidden;"><div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" style="top: 0px; height: 0px;"></div></div></div></div>
    <div data-keybinding-context="3" data-mode-id="javascript" class="p-Widget theia-editor p-DockPanel-widget" id="YOUTUBEPanelBODY" style="position: absolute; top: 32px; right:0; width: 650px; height: 900px;">
    `; 
      
      const YouTubeFrame =  document.createElement('div');
      YouTubeFrame.id = "YouTubeIFrameID"
      YouTubeFrame.innerHTML =`<iframe width="100%" height="600" src="https://www.youtube.com/embed/wGJHwc5ksMA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      topDOC.querySelector("#YOUTUBEPanelBODY").append(YouTubeFrame)


      topDOC.querySelector("#YOUTUBEPanelHeader > div.p-TabBar-tabCloseIcon").addEventListener("click", function () {
        topDOC.querySelector("#YouTubeDivID").remove()
      });

  });

  

});

 


const removeSpinnerContainer = document.querySelector('#root > div.start'); //select the div containing spinner and loading info
removeSpinnerContainer ? removeSpinnerContainer.remove() : null ; // remove starting div container

const appendHere = document.querySelector('#root'); //select div to create new spinner/loading message (my name)
document.querySelector('html');

// NEW LOADING MESSAGE //
let spinnerDiv = document.createElement('div');
spinnerDiv.id = 'newSpinnerID';
spinnerDiv.style.cssText = ` height: 15vh; 
  position: absolute;
  top: 30vh;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1001;
  color:white; `;

let h2 = document.createElement('h2');
h2.style.color = 'white';
h2.textContent = '👋 Bryn Heath 👋';
spinnerDiv.appendChild(h2);
// NEW LOADING MESSAGE //

appendHere ? appendHere.append(spinnerDiv) : null //Finally append the new message to (body root div)

//------------------------------------------------------------------------------------------------//