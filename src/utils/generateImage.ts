import { colors } from './../constants/index';
import { CarType } from "../types";

/* parametre olarak gelen herbir arabanın fotoğrafı
için o fotoğrafın linkini oluşturacağız.
Temel url:'https://cdn.imagin.studio/getimage';
Temel_URL?customer=hrjavascript-mastery&make=ford&modelFamily=focus
*/
export const generateImage = (
    car:CarType, 
    angle?:string
    ) : string => {

        /* url sınıfının özelliklerine erişebilmek 
        için bir örnek oluşturduk.
        Örnek oluştururken temel url parametre oalrak gönderiyoruz. */

        const url: URL = new URL('https://cdn.imagin.studio/getimage')

        url.searchParams.append('customer', 'hrjavascript-mastery')
        url.searchParams.append('make', car.make)
        url.searchParams.append('modelFamily', car.model.split('/')[0].split(" ")[0])
        url.searchParams.append('zoomType', 'fullscreen')

        if(angle) {
            url.searchParams.append('angle',angle)
        }

        /* ragele bir renk seç ve onu ekle */
        const idx = Math.round(Math.random() * colors.length)
        url.searchParams.append('paintId',colors[idx] )


       
    return url.href; //*oluşturduğumuz resim url ini döndür.
}

