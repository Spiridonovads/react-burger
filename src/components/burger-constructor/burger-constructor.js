import appBurgerConstructorStyle from './burger-constructor.module.css';
import BurgerConstructorElements from './burger-constructor-elements';
import PropTypes from 'prop-types';



const BurgerConstructor = ({data}) => {  
  return (
    <section className={`pt-25 pl-4 ${appBurgerConstructorStyle.constructor__section}`}>
      <BurgerConstructorElements data={data}/>
    </section>
  );
}



BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired
}



export default BurgerConstructor;


