import React from 'react'
import '../styles/PreNavBar.css'

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.583 17.792q-.604 0-1.021-.427-.416-.427-.416-1.011 0-.604.427-1.021.427-.416 1.01-.416.605 0 1.021.427.417.427.417 1.01 0 .604-.427 1.021-.427.417-1.011.417Zm8.813 0q-.604 0-1.021-.427-.417-.427-.417-1.011 0-.604.427-1.021.427-.416 1.011-.416.604 0 1.021.427.416.427.416 1.01 0 .604-.427 1.021-.427.417-1.01.417ZM5.312 5.521l1.73 4h6.166l1.709-4Zm-.604-1.396h11.604q.292 0 .417.219.125.218.021.448l-2.25 5.229q-.146.396-.51.646-.365.25-.802.25H6.646l-.896 1.541h10.083v1.396h-10q-.875 0-1.281-.719-.406-.718.01-1.427l1.084-1.854-2.688-6.292h-1.75V2.167h2.667Zm2.334 5.396h6.166Z" /></svg>

const PreNavBar = () => {
    return (
        <div className='preNav'>
            <div>
                <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
            </div>
            <div>
                <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                <a href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>

            </div>
        </div>
    )
}

export default PreNavBar
