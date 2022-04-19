// кладем в переменную тип нашего action
export const CHANGE_HEADER_BURGER_MENU = 'CHANGE_HEADER_BURGER_MENU'

// Открываем/закрываем меню навигации на маленьком экране в header
export function changeBurgerMenu(status) {
    return {
        type: CHANGE_HEADER_BURGER_MENU,
        status: status,
    }
}

