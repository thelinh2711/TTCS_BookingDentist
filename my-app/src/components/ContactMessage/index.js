import React from 'react'
import "./styles.scss"

const ContactMessage = () => {
    const link = "https://www.facebook.com/HocvienPTIT"
    const zalo = "https://www.facebook.com/HocvienPTIT"
  return (
    <>
        <div className='fixed-mess'>
            <a href={link} target="_blank">
                <div className='w-mess face'>
                    <img className='w-full h-full' title='Chat Facebook với Nha Khoa Á Châu' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1667448245/facebook-messenger-icon_ekx1oh.webp'/>
                </div>
            </a>
        </div>
        <div className='fixed-zalo'>
            <a href={zalo} target="_blank">
                <div className='w-mess face'>
                    <img className='w-full h-full' title='Chat Zalo với Nha Khoa Á Châu' src='https://res.cloudinary.com/dbpw1enlu/image/upload/v1667449009/zalo-icon_sweel2.png'/>
                </div>
            </a>
        </div>
    </>
  )
}

export default ContactMessage