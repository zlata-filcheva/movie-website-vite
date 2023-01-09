import './style.css'
import SiteMenu from "./components/SiteMenu";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="grid-container grid-container-maxContent-auto-maxContent">
    <div class="site-menu" id="siteMenu">
        ${SiteMenu()} 
    </div>

    <div></div>

    <div>
        <div id="startsoon">
            <img src="456.png" alt="start soon" class="ad-image">
        </div>
    
        <div>
            <img src="888.gif" alt="camera for sale" class="ad-image">
        </div>
    </div>
</div>
`