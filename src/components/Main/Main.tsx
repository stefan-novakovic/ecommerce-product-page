import ProductTextContainer from '../ProductTextContainer/ProductTextContainer';
import { StyledMain } from './Main.styled';

const Main = () => {
   return (
      <StyledMain>
         {/* placeholder for image div */}
         <div style={{ backgroundColor: '#ccc', width: '100%', maxWidth: '445px', minHeight: '567px', borderRadius: '10px' }}></div>

         <ProductTextContainer />
      </StyledMain>
   );
};
export default Main;
