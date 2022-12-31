import { AliwangwangOutlined } from '@ant-design/icons'
import HeaderActions from './actions'
import styles from './index.module.scss'
import Nav from './nav'

const Header = () => {
	return (
		<div className={styles.header}>
			<AliwangwangOutlined size={100} />
			<Nav />
			<HeaderActions isAuth={false} />
		</div>
	)
}

export default Header
