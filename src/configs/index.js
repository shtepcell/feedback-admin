import devConf from './development';
import prodConf from './production';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'producion';

export const getConfig = () => {
    if (isDev) return devConf;

    if (isProd) return prodConf;

    return devConf;
};

export default getConfig();
