import {MAIN_MENU} from "../constants/url";

const SiteMenu = () => {
    return MAIN_MENU
        .map(({name}) => {
            const url = name
                .split(' ')
                .map(str => str.toLowerCase())
                .join('-');

            return `
                <div class="text text1">
                    <a href="./${url}">${name}</a>
                </div>
            `;
        })
        .join('');
};

export default SiteMenu;