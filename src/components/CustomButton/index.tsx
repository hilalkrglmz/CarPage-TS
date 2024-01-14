import { ButtonPropsType } from "../../types"

//component
const CustomButton = ({disabled,designs, btnType, title, handleClick,rIcon}:ButtonPropsType) => {
  return (
    <button 
    disabled={disabled} 
    type={btnType} 
    className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    onClick={handleClick}
    >
        <span className="flex-1">{title}</span>
        {rIcon && 
        (<div className="relative w-6 h-6">
        <img src={rIcon}/>
        </div>)
        }
    </button>
  )
}

export default CustomButton