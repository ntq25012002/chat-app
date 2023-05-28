import React, {useState, useRef, useCallback, useEffect} from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEllipsisVertical,faEarthEurope , faSpinner, faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles)

function Header() {
    const [keyword, setKeyword] = useState('');
    const inputRef = useRef()   

    useEffect(() => {
        const handleFocusInput = () => {
            console.log('focus');
            inputRef.current.parentNode.parentNode.style.border = '1px solid #0000001f'
        }
        const handleBlurInput = () => {
            inputRef.current.parentNode.parentNode.style.border = 'none'
        }

        inputRef.current.onfocus = handleFocusInput
        inputRef.current.onblur = handleBlurInput
    },[])

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                    <div className={cx('search-input-container')}>
                        <input 
                            type="text" 
                            className={cx('input-search')} 
                            value={keyword} onChange={(e) => setKeyword(e.target.value)} 
                            placeholder="Tìm kiếm"
                            ref = {inputRef}
                        />
                        {
                            keyword && 
                            (
                                <button className={cx('btn-clear')} onClick={() => setKeyword('')} >
                                    {/* <FontAwesomeIcon icon="fa-duotone fa-circle-xmark" /> */}
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            )
                        }
                    </div>
                    
                    {/* <FontAwesomeIcon icon={faSpinner} /> */}
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('header-right-container')}>
                    <div className={cx('header-right-before-login')}>
                        <button className={cx('btn-upload')}>
                            <FontAwesomeIcon icon={faPlus} />
                            {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
                            <span className={cx('btn-upload-text')}>Upload</span>
                        </button>

                        <button className={cx('btn-login')}>
                            Login
                        </button>

                        <button className={cx('btn-see-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>

                        <div className={cx('see-more-content')}>
                            <div className={cx('language')}>
                                <FontAwesomeIcon icon={faEarthEurope} />
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;