//TODO:Tanımlanan type bileşeni karıştıracak düzeydeyse veya birden fazla bileşende kullanılıyorsa genelde bu şekilde type klasöründe tutulur.

//mouse olaylarında çalışan function budur.
import { MouseEventHandler } from "react";

//*gelen prop tiplerini tanımlama
export type ButtonPropsType = {
    disabled?:boolean;
    designs?:string;
    btnType?: "button" | "submit"; //!hem union types hem string literal kullanımı
    title:string;
    handleClick?: MouseEventHandler <HTMLButtonElement>; //*Bu function bir button elemanına mouse un etkileşimiyle tetikelenen bir function dır.
    rIcon?:string
}

//*APIDEN GELEN ARABA VERİSİNİN TİPİ
export interface CarType {
       "city_mpg": number,
        "class": string,
        "combination_mpg": number,
        "cylinders": number,
        "displacement": number,
        "drive": "fwd" | "awd" | "rwd" | "4wd",
        "fuel_type": "gas" | "diesel" |  "electricity",
        "highway_mpg": number,
        "make": string,
        "model": string,
        "transmission": "a" | "m",
        "year": number
    
}

/* url deki param type leri */
export type FilterType = {

    make?:string;
    model?:string;
    limit?:string;
    fuel_type?:string;
    year?:string;
  }
  
