/**
 * Created by mikhail on 26.10.15.
 */
import path from 'path';

export const port = process.env.PORT || 3000;
export const isProduction = (process.env.NODE_ENV === 'production');
export const __PRODUCTION__ = isProduction;
export const __DEVELOPMENT__ = !isProduction;
export const __HOT__ = Boolean(process.env.HOT);
export const sourcePath = path.resolve(__dirname, 'src');
export const srcAssetsPath = path.join(sourcePath, 'assets');
export const distAssetsPath = path.join(__dirname, 'assets');
export const clientSourcePath = path.join(sourcePath, 'client');
export const jsOutputPath = path.join(distAssetsPath, 'js');
