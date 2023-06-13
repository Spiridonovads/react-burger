import notFoundHeaderStyles from './not-found.module.css';
import imageNotFound from '../../image/404-error.jpg'

const NotFound = () => {
	return (
		<section>
			<div className={notFoundHeaderStyles.wrapper}>
				<img alt='page not found' src={imageNotFound} className={notFoundHeaderStyles.img}/>
			</div>
		</section>
	)
}

export default NotFound;