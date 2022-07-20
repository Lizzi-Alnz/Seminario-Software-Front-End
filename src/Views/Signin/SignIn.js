import Page from "../../Components/Page";
import Field  from '../../Components/InputField';

 const SignInUx = ({
   emailValue = "",
   passwordValue="",
   onChangeHandler = () => { },
   onSignInClick = () => { },
   onLoginClick = () => { }
 }) => {
   return (
     <Page
       showNavBar={true}
       useAbsoluteCenter={true}
       pageTitle="Crear Cuenta"
     >
       <form>
         <Field
           name="email"
           labelText = "Correo Electrónico"
           type = "email"
           value = {emailValue}
           onChange = {onChangeHandler}
         />
         <Field
           name="password"
           labelText="Contraseña"
           type="password"
           value={passwordValue}
           onChange={onChangeHandler}
         />
         <button onClick={onSignInClick}>Crear Cuenta</button>
         <button onClick={onLoginClick}>Ya tengo una Cuenta</button>
       </form>
     </Page>
   );
 }
 export default SignInUx;