import {MAIN_MENU} from "../constants/url";

const SiteMenu = () => {
    return MAIN_MENU
        .map(({name, component}) => {
            const url = value
                .split(' ')
                .map(str => str.toLowerCase())
                .join('-');

            return `
                <div class="text text1">
                    <a href="./${url}">${value}</a>
                </div>
            `;
        })
        .join('');
};

export default SiteMenu;