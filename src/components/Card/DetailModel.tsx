import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types"
import { generateImage } from "../../utils/generateImage";

type ModalPropsType = {
  car: CarType;
  isOpen: boolean;
  close: () => void;

}

const DetailModel = ({car, isOpen, close} :ModalPropsType) => {
  
  return (
  /* modal açıksa ekrana bas */  
  <AnimatePresence>
  {
        isOpen && 
        (<div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center p-4">
          <motion.div 
          initial={{
            scale:0.3,
            opacity:0
          }}

          /* detay elemanı her ekrana geldiğinde devreye girer */
          whileInView={{
            scale:1,
            opacity:1
          }}
          exit={{
            scale:0,
            opacity:0
          }}
          className="p-6 relative  bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl items-center overflow-auto">
              {/* kapatma button */}
              <button 
              onClick={close}
              className="cursor-pointer p-1 absolute end-2 top-1 z-10 bg-white rounded-full">
                  <img src="/close.svg" />
              </button>
          {/* fotoğraflar alanı */}
      
          <div className="flex-1 flex flex-col gap-3">
         {/* büyük resim */}   
            <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
              <img src={generateImage(car)} className="h-full mx-auto object-contain"/>
            </div>
      
          {/* küçük resim */}
            <div className="flex gap-3">
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
            <img className="h-full mx-auto object-contain" src={generateImage(car, '29')}/>
            </div>
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
            <img className="h-full mx-auto object-contain" src={generateImage(car, '13')}/>
            </div>
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
            <img className="h-full mx-auto object-contain" src={generateImage(car, '27')}/>
            </div>
            
            </div>
          </div>
      
          {/* araç bilgileri */}
          {/* obje gelen car verisini map methoduyla dönemeyeceğimiz için 
              objeyi önce .entries methodu ile diziye çevirdik. Bu şekilde key-value
              değerlerinden oluşan bir dizi haline geldi.
          */}
          <div className="w-full">
            {Object.entries(car)
            .filter(([key]) => key !== 'year'  ) //key değeri yıla eşit olan diziyi kaldırdık.
            .map(([key,value]) => (
              <div className="flex justify-between">
                <h4 className="capitalize text-gray">{key.replace("_", " ")}:</h4>
                <p className="text-black-100 font-semibold capitalize">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>)
  }
  </AnimatePresence>
  )
}

export default DetailModel