import {
    HeaderGrid,
    HeaderWrapper,
    LogoGrid,
    HeaderNavigationGrid,
    NavigationLink, HeaderRegistrationButtonsGrid
} from "./Header.styles";
import logo from "../../logos/logo.png"
import '../../App.css'

// todo: Переделать ссылки на роутинги
export const Header = () => {

    return (
        <HeaderWrapper>
            <div className={'container'}>
                 <HeaderGrid>
                    <LogoGrid>
                        <img src={logo} alt="logotype"/>
                    </LogoGrid>
                     <HeaderNavigationGrid>
                         <NavigationLink>О нас</NavigationLink>
                         <NavigationLink>Услуги</NavigationLink>
                         <NavigationLink>Вакансии</NavigationLink>
                         <NavigationLink>Новости</NavigationLink>
                         <NavigationLink>Соглашения</NavigationLink>
                     </HeaderNavigationGrid>
                     <HeaderRegistrationButtonsGrid>
                         <div>djqnb saf f</div>
                         <div>djqnb saf f</div>
                     </HeaderRegistrationButtonsGrid>
                 </HeaderGrid>
            </div>
        </HeaderWrapper>
    );
};

