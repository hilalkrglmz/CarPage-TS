import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

type OptionType = {

  label:string;
  value:string
}


type FilterPropTypes ={
  title:string;
  options:OptionType[]
}


const CustomFilter = ({title, options}:FilterPropTypes) => {

  const [selected,setSelected] = useState<OptionType | null>(null)
  const[params, setParams] =useSearchParams();

/* seçilen filtreye göre url i güncelle */
  useEffect(() => {
    /* url e eklenecek parametreyi belirle */
    const key= title === "Yakıt Tipi" ? "fuel_type" : "year"
    
    if(selected?.value) {
      params.append(key,selected.value.toLowerCase())
    }else {
      /* value yoksa url den parametreyi kaldır */
      params.delete(key)
    }
    /* url i güncelle */
    setParams(params)
  },[selected])

  return (
    <div className="w-fit text-black">
      <Select 
      onChange={(e) => setSelected(e)}
      className="min-w-[100px]"
      placeholder={title}
      options={options}/>
    </div>
  )
}

export default CustomFilter