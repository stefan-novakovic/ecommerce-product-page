import { StyledAvatarWrapper } from './AvatarWrapper.styled';
import avatarImg from '../../assets/images/image-avatar.png';

const AvatarWrapper = () => {
   return (
      <StyledAvatarWrapper>
         <img src={avatarImg} alt="Avatar" />
      </StyledAvatarWrapper>
   );
};
export default AvatarWrapper;
