import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
const [params, setParams] = useSearchParams();

/* urlden limiti al; limit yoksa 5 olarak belirle*/
const limit = Number(params.get("limit")) || 5
console.log(limit)
const handleLimit= () => {

/* 1) URL de limit parametre yoksa, kullanıcı siteye yeni girmiştir ve ekranda 5 ürün gözükmektedir.    
   Bu noktada url limit parametresi eklenecek ve değeri 10 olacak.
   2) URL de limit param varsa:
   Bu kullanıcının birkaç kez daha fazla butonuna bastığını gösterir.
   url deki limit parametresini alıp +5 EKLERİZ 

*/

/* yeni limiti belirle */
  const newLimit = String(limit +5);
  /* param değişkenini güncelle */
  params.set('limit' ,newLimit)
  /* url i güncelle */
  setParams(params);

}

  return <div     className="w-full flex-center gap-5 my-10">
     {limit < 30 && (
          <CustomButton
          handleClick={handleLimit} 
          title="Daha Fazla"
          />
      
     ) }
  </div>

};

export default ShowMore;