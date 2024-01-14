import { CarType, FilterType } from "../types";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3e56dc0d92mshe72babef2d7cee7p1c9cccjsn1be6ecd3c1a5',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
  
//*Asenkron işlemler yaparak sonuç döndüren function larda return tipini doğrudan yazmayız.
//*yerleşik bir react interface i olan Promise kullanırız.
//*Buna da generic type olarak api isteği başarılı olunca elde edilen verinin tipini veririz.
//*şu an gelen veri type ı bilmediğimizden <any> verdik.
//*API den gelen cevabı inceledik gelen verinin tipini yazdık
//*any yerine oluşturduğumuz CarType ı yazdık


export async function fetchCars(
  filters:FilterType
  ): Promise<CarType[]>{

  /* url de parametre yoksa undefined olmaması için varsayılan değerler belirlenir. */
    const{
      make = 'bmw', 
      model ='m3', 
      limit ='5', 
      year='', 
      fuel_type=''
    } = filters;

    const res= await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,options)
    
      return await res.json(); //fetch ile veriler json formatında geldiğinden gelen verileri js formatına çevirdik.Axios kullansak gerek kalmazdı o arka planda bu işlemi yapıyor çünkü.
}