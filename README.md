## Описание

Приложение личный кабинет. Страница со списком контактов пользователя доступна только после авторизации.
На странице со списком контактов есть возможность добавлять/удалять/редактировать контакты, а также есть функция поиска.

Тестовое задание для компании Takeoff Staff (https://takeoff-staff.ru/full-stack-team/).

1. Логин: test@mail.ru
2. Пароль: qwerty

## Технологии
1. React
2. TypeScript
3. Redux (thunk, redux-toolkit)
4. JSON-server
5. CSS modules
6. React-router-dom 6
7. Axious
8. Classnames

## Что было сделано

1. JSON-server использовался для создания сервера, к которому будут делаться запросы. Запросы делала с помощью middleware - thunk. Store создавала с помощью Redux-toolkit. 

2. Базу данных сформирована в соответствие с потребностями.

Есть поле *authorization* в котором записаны логин и пароль. 

Есть поле *contacts*, который содержит массив объектов.

``` 
   {
      "user": "Cyntia Miller",
      "phone": "5439495495",
      "email": "cyntiaMiller@google.com",
      "id": 2
    }
```
3. Сделан адаптив под разные устройства.

Адаптив сделан с помощью mixin, который принимает переменные и в зависимости от значения возвращает нужный @media.

4. Вспомогательная функция api, которая позволят создовать объект axios с нужными заголовками.

```
export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: getBackendURL(),
  });
};
```

В thunk нужно просто вызывать эту функцию. Это позволяет избежать дублирования кода.

5. Все приложение обернуто в Error Boundary, который рендерит специальный компонент, если возникают ошибки. Это позволяет избежать возможный крах приложения.

Используется общий компонент для 404 ERROR и для ошибок, которые ловятся в Error Boundary. Этот универсальный компонент принимает разные props и в зависимости от этого отображается нужный текст. Это позволяет избежать дублирования кода.

6. Приватные роуты.

Есть страница на которой отображаются данные, но эти данные может посмотреть только авторизованный пользователь, если он не авторизован, то его перебрасывает на страницу с авторизацией.

``<Route path={ROUTES.home.path} element={ <PrivateRoute> <Home /> </PrivateRoute> }/>``

В данном примере я оборачиваю компонент Home (является страницей) в компонент PrivateRoute, который внутри себя проверяет авторизацию и если ее нет, то на страницу Home вход не происходит.

7. TypeScript позволяет использовать Record, что очень удобно при создании роутов, так как мы заранее определяем в объекте какие страницы будут, это позволяет избежать ошибок.

8. Возможность редактирования **Name**, **Phone**, **Email**.

Для этого делается **PATCH** запрос.

```
const response: AxiosResponse = await api().patch(`/contacts/${id}`, {
        user: name,
      });
```

9. Возможность добавления новых контактов. 

Для этого при нажатии на кнопку всплывает модальное окно с формой, нажимается кнопка *OK* и делается **POST** запрос и новый контакт добавляется. 

Модальное окно создается через createPortal, это сделано для того, чтобы модальное окно было поверх родителя.

``` 
return createPortal(
    <div className={styles.modal} onClick={handleClick}>
      <FormModal handleClickModal={setOpen} />
    </div>,
    document.body,
  );
```
Первый аргумент - это непосредственно модальное окно.

Второй аргумент - это то, место куда должно быть вставлено модальное окно. 

Модальное окно закрывается при клике на область вне модального окна. 

10. Возможность удаления контактов. 

Для этого делается **DELETE** запрос. 

11. Возможность поиска. 

Поиск происходит по имени (name), телефону (phone), email. Это сделано для того чтобы, пользователь смог найти контакт не только по имени, но и по телефону или email. При этом регистр символов не учитывается. 

12. Если вводится неверный логин или пароль, то с помощью *classnames* меняется стиль input.

```
 const className = classnames(styles.wrapper_form, {
    [styles.error_form]: auth === 'no',
  });

```

## Как запустить

1. Клонируете репозиторий

`` git clone https://github.com/IrinRer/Personal_account.git ``

2. Устанавливаете зависимости

`` npm i ``

3. Запускаете проект

 `` npm run dev``
 
 Данная команда запустит также JSON-server.
 
 Версия node: **v14.17.3**
 
