import iphoneBanner from '../../assets/img/products-banner/iphone-banner.jpg';
import imacBanner from '../../assets/img/products-banner/imac-banner.jpg';

const Banner:React.FC = () => {
  return (
    <>
        <div className='products_banner mt-5'>
            <div className="content container">
                <div className="left_banner rounded-3">
                    <img src={iphoneBanner} alt="" />
                </div>
                <div className="right_banner rounded-3">
                    <img src={imacBanner} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner