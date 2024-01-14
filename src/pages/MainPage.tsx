import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import { useSearchParams } from "react-router-dom"
import { fuels, years } from "../constants"
import CustomFilter from "../components/CustomFİlter"

const MainPage = () => {

  const [params] = useSearchParams()

  //useState bizden state te tutulacak verinin type ını ister
  //biz de generic yardımıyla bir CarType dizisini state te tutuacağımız belirttik.
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false)

  //*bileşen erkrana basılınca ve params güncellenince api isteği at
  useEffect(() => {

    /* url deki bütün parametreleri al ve obje oluştur */
      const paramsObj = Object.fromEntries(params.entries())

    fetchCars(paramsObj)
      //istek başarılı olursa 
      .then((data) => setCars(data))
      .catch(() => setIsError(true))
  }, [params])

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katalogu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/* Filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels}/>
            <CustomFilter title="Üretim Yılı" options={years}/>
          </div>
        </div>
        {/*ARABALARI LİSTELEME  */}
        
        {/* 
        1) Veri null ise > henüz API den cevap gelmedi
        2) isError true ise > API den cevap alınırken hata olmuştur.
        3) Veri boş diziyse > Kriterlere uygun eleman yok
        4) Veri doluysa > Veri başarıyla geldi
        
      */}
        {!cars ? (
          <div className="home__error-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="home__error-container">
            <h2>Üzgünüz verileri alırken bir sorun oluştu</h2>
          </div>
        )
          : cars.length < 1 ? (
            <div className="home__error-container">
              <h2>Aradığınız kriterlere uygun araba bulunamadı</h2>
            </div>
          ) : (
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car,i) => 
                <Card key={i} car={car}/>)}
              </div>
              <ShowMore/>
            </section>
          )}

      </div>
    </div>
  )
}

export default MainPage;