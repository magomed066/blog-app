import { ExportOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { FC } from 'react'
import styles from './index.module.scss'

interface IProps {
	isAuth: boolean
}

const HeaderActions: FC<IProps> = ({ isAuth }) => {
	return (
		<div className={styles.actions}>
			{isAuth ? (
				<Button type="primary" danger icon={<ExportOutlined />}>
					Log Out
				</Button>
			) : (
				<Button type="primary" icon={<UserOutlined />}>
					Log In
				</Button>
			)}
		</div>
	)
}

export default HeaderActions
