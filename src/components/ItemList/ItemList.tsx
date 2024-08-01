import { StyledItemList } from './ItemList.styled';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import ListItem from '../ListItem/ListItem';

const ItemList = () => {
   return (
      <StyledItemList>
         <ListItem />
         <CheckoutButton />
      </StyledItemList>
   );
};
export default ItemList;
