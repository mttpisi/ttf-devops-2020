import colorConverter from 'color-convert'
import {TtfHsl,TtfHex} from '../../../commons/src/model/Color'
//TODO
export function convert(color: TtfHsl): TtfHex {
    const convertedColor = colorConverter.hsl.hex([color.hue,color.saturation,color.lightness]);
    const res: TtfHex = {
        hex: convertedColor
    }
    return res;
}
