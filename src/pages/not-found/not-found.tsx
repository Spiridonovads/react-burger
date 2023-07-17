import notFoundStyles from './not-found.module.css';
import imageNotFound from '../../image/404-error.jpg'

const NotFound = () => {
	return (
		<main>
			<section>
				<div className={notFoundStyles.wrapper}>
					<img alt='page not found' src={imageNotFound} className={notFoundStyles.img}/>
				</div>
			</section>
		</main>
	)
}

export default NotFound;