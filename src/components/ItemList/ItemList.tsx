import { StyledItemList } from './ItemList.styled';
import ListItem from '../ListItem/ListItem';
import CheckoutButton from '../CheckoutButton/CheckoutButton';

const ItemList = () => {
   return (
      <StyledItemList>
         <ListItem />
         <CheckoutButton />
      </StyledItemList>
   );
};
export default ItemList;
