import {styled} from '@mui/material/styles';
import {Box, BoxProps} from "@mui/material";


export const HeaderWrapper = styled(Box)<BoxProps>(({theme}) => ({
    width: '100%',
    minHeight: '70px',

    backgroundColor: theme.palette.white.main
}));
export const HeaderGrid = styled(Box)<BoxProps>(({theme}) => ({
    minHeight: '70px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

export const LogoGrid = styled(Box)<BoxProps>(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > img': {
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

export const HeaderNavigationGrid = styled(Box)<BoxProps>(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    flex: '1 1 auto',

    paddingLeft: '10px',

}));

export const HeaderRegistrationButtonsGrid = styled(Box)<BoxProps>(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}));


// Линки скорее всего нужно перенести в отдельный файл, где будут лежать стили текста
export const NavigationLink = styled(Box)<BoxProps>(({theme}) => ({
    padding: '10px',

    color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.white.main,
    fontFamily: 'Montserrat',
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 'normal',
    fontSize: theme.typography.body1.fontSize,
}));