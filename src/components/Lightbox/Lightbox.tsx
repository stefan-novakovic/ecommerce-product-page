import { Lightbox as LightBox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './LightboxOverride.css';

import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

type Props = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   currImg: number;
};

const Lightbox = ({ open, setOpen, currImg }: Props) => {
   return (
      <LightBox
         open={open}
         close={() => setOpen(false)}
         index={currImg}
         slides={[
            {
               src: img1,
               alt: '',
               width: 550
            },
            {
               src: img2,
               alt: '',
               width: 550
            },
            {
               src: img3,
               alt: '',
               width: 550
            },
            {
               src: img4,
               alt: '',
               width: 550
            }
         ]}
      ></LightBox>
   );
};
export default Lightbox;
