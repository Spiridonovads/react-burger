import appBurgerConstructorStyle from './burger-constructor.module.css';
import data from '../../utile/data.json';
import BurgerConstructorElements from './burger-constructor-elements';



const BurgerConstructor = () => {  
  return (
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`}>
      <BurgerConstructorElements data={data}/>
    </section>
  );
}



export default BurgerConstructor;


