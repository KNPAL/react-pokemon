
import {AppColor} from './Constants';
export const firstWordCapital = (input) => {
    if(!!input){
        if (input.length === 0) return input;

        const first = input.substring(0, 1).toLocaleUpperCase();
        if (input.length === 1) return first;
        if (input.indexOf('-') !== -1) {
            return input
                .split('-')
                .map((chunk) => firstWordCapital(chunk))
                .join('-');
        }
        return `${first}${input.substring(1)}`;
    }else{
        return ''
    }
   
};

export const formateId = (id) => {
    if (id > 99) return id;
    if (id > 9) {
        return '0' + id;
    } else {
        return '00' + id;
    }
};

export const commaSepratedArrayValue = (inputArray) => {
    if (inputArray?.length === 0) return '';
    let returnStr = '';
    inputArray.forEach(element => {
        returnStr += element + ', ';
    });
    return returnStr.substring(0, returnStr.lastIndexOf(', '));
};

export const getImageUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

export const getBackground = (typeArray) => {
    let count = 0;
    let colorList = '';
    for (var key of Object.keys(AppColor)) {
        if (typeArray.indexOf(key) > -1) {
            count++;
            colorList += AppColor[key] + ',';
        }
    }
    if (count > 1) {
        return `linear-gradient(${colorList.slice(0, colorList.lastIndexOf(','))})`;
    } else {
        return colorList.slice(0, colorList.lastIndexOf(','));
    }

}

export const getTypes = (types) => {
    let type = [];
    const hasTypes = types?.types;
    if (!!hasTypes?.length) {
        hasTypes.forEach(element => {
            type.push(firstWordCapital(element.type.name));
        });
    }
    return type;
};




