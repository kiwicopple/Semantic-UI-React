import * as React from 'preact-compat';
import { ImageProps } from '../../elements/Image';

export interface ItemImageProps extends ImageProps {
}

declare const ItemImage: React.StatelessComponent<ItemImageProps>;

export default ItemImage;
