import { Button } from 'antd'
import { CustomResult } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const NotFound = () => {
	const navigate = useNavigate()

	const goBack = () => navigate(-1)

	return (
		<div className={styles.page}>
			<CustomResult
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button type="primary" onClick={goBack}>
						Go back
					</Button>
				}
			/>
		</div>
	)
}

export default NotFound
