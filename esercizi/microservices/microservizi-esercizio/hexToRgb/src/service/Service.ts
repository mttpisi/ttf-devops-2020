import colorConverter from 'color-convert'
import {TtfRgb,TtfHex} from '../../../commons/src/model/Color';
//TODO
export function convert(color: TtfHex): TtfRgb {
    const convertedColor = colorConverter.hex.rgb(color.hex);
    const res: TtfRgb = {
        red: convertedColor[0],
        green: convertedColor[1],
        blue: convertedColor[2]
    }
    return res;
}
