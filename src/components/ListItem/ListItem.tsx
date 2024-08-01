import { StyledListItem } from './ListItem.styled';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import useCartContext from '../../hooks/useCartContext';
import DeleteButton from '../DeleteButton/DeleteButton';

const ListItem = () => {
   const { totalQuantity } = useCartContext();
   return (
      <StyledListItem>
         <img src={thumbnail1} alt="" />

         <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
               $125.00 x {totalQuantity}
               <span>${(125 * totalQuantity).toFixed(2)}</span>
            </p>
         </div>

         <DeleteButton />
      </StyledListItem>
   );
};
export default ListItem;
