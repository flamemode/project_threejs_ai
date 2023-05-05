import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './transparent.png',
    fullDecal: './etikettlg.jpeg',

});

export default state;